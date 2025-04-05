// src/utils/blockMapper.ts
import { ReactNode } from "react";
import { NotionBlock } from "../types";
import { Paragraph } from "../components/Paragraph";
import { Heading } from "../components/Heading";
import { Divider } from "../components/Divider";
import { Image } from "../components/Image";
import { Code } from "../components/Code";
import { Quote } from "../components/Quote";
import { BulletedListItem } from "../components/BulletedListItem";
import { NumberedListItem } from "../components/NumberedListItem";
import { ToDo } from "../components/ToDo";
import { Table } from "../components/Table";
import { TableRow } from "../components/TableRow";
import { Callout } from "../components/Callout";
import { Embed } from "../components/Embed";
import { Bookmark } from "../components/Bookmark";
import { File } from "../components/File";
import { Video } from "../components/Video";
import { Audio } from "../components/Audio";
import { PDF } from "../components/PDF";
import { Equation } from "../components/Equation";
import { ChildPage } from "../components/ChildPage";
import { ChildDatabase } from "../components/ChildDatabase";
import { LinkPreview } from "../components/LinkPreview";
import { Column } from "../components/Column";
import { ColumnList } from "../components/ColumnList";
import { SyncedBlock } from "../components/SyncedBlock";
import { Breadcrumb } from "../components/Breadcrumb";
import { TableOfContents } from "../components/TableOfContents";
import { LinkToPage } from "../components/LinkToPage";

const FallbackBlock = (): ReactNode => `<div>Invalid Block</div>`;

export const blockMapper = (block: NotionBlock | undefined | null): ReactNode => {
  if (!block || typeof block !== "object" || !block.type) {
    console.error("Invalid block:", block);
    return FallbackBlock(); 
  }

  const blockType = block.type;
  
  const specialBlocks = ["divider", "table", "column", "column_list", "synced_block", "breadcrumb", "table_of_contents"];
  const hasData = blockType in block && block[blockType as keyof NotionBlock] !== undefined;
  
  if (!hasData && !specialBlocks.includes(blockType)) {
    console.error(`Block data for type "${blockType}" is undefined:`, block);
    return FallbackBlock();
  }

  switch (blockType) {
    case "paragraph":
      return Paragraph({ block: block });
    case "heading_1":
    case "heading_2":
    case "heading_3":
      return Heading({ block: block });
    case "divider":
      return Divider();
    case "image":
      return Image({ block: block });
    case "code":
      return Code({ block: block });
    case "quote":
      return Quote({ block: block });
    case "bulleted_list_item":
      return BulletedListItem({ block: block });
    case "numbered_list_item":
      return NumberedListItem({ block: block });
    case "to_do":
      return ToDo({ block: block });
    case "table":
      return Table({ block: block });
    case "table_row":
      return TableRow({ block: block });
    case "callout":
      return Callout({ block: block });
    case "embed":
      return Embed({ block: block });
    case "bookmark":
      return Bookmark({ block: block });
    case "file":
      return File({ block: block });
    case "video":
      return Video({ block: block });
    case "audio":
      return Audio({ block: block });
    case "pdf":
      return PDF({ block: block });
    case "equation":
      return Equation({ block: block });
    case "child_page":
      return ChildPage({ block: block });
    case "child_database":
      return ChildDatabase({ block: block });
    case "link_preview":
      return LinkPreview({ block: block });
    case "column":
      return Column({ block: block });
    case "column_list":
      return ColumnList({ block: block });
    case "synced_block":
      return SyncedBlock({ block: block });
    case "breadcrumb":
      return Breadcrumb({ block: block });
    case "table_of_contents":
      return TableOfContents();
    case "link_to_page":
      return LinkToPage({ block: block });
    default:
      console.warn(`Unsupported block type: ${blockType}`);
      return FallbackBlock(); 
  }
};