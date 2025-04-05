import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { Divider } from "./Divider";
import { Image } from "./Image";
import { Code } from "./Code";
import { Quote } from "./Quote";
import { BulletedListItem } from "./BulletedListItem";
import { NumberedListItem } from "./NumberedListItem";
import { ToDo } from "./ToDo";
import { Callout } from "./Callout";
import { Bookmark } from "./Bookmark";
import { Table } from "./Table";
import { ChildPage } from "./ChildPage";
import { ChildDatabase } from "./ChildDatabase";
import { BaseBlock } from "@/types";
import { ParagraphBlock } from "@/types/paragraph.types";
import { HeadingBlock } from "@/types/heading.types";
import { ImageBlock } from "@/types/image.types";
import { CodeBlock } from "@/types/code.types";
import { QuoteBlock } from "@/types/quote.types";
import { BulletedListItemBlock } from "@/types/bulletedListItem.types";
import { NumberedListItemBlock } from "@/types/numberedListItem.types";
import { ToDoBlock } from "@/types/toDo.types";
import { CalloutBlock } from "@/types/callout.types";
import { BookmarkBlock } from "@/types/bookmark.types";
import { TableBlock } from "@/types/table.types";
import { ChildPageBlock } from "@/types/childPage.types";
import { ChildDatabaseBlock } from "@/types/childDatabase.types";


interface ChildrenProps {
  children: BaseBlock[];
  className?: string;
}

export const Children = ({ children, className }: ChildrenProps) => {
  if (!Array.isArray(children) || children.length === 0) {
    return null;
  }

  return (
    <div className={`notion-children ml-4 ${className}`}>
      {children.map((child) => {
        switch (child.type) {
          case "paragraph":
            return <Paragraph key={child.id} block={child as ParagraphBlock} />;
          case "heading_1":
          case "heading_2":
          case "heading_3":
            return <Heading key={child.id} block={child as HeadingBlock} />;
          case "divider":
            return <Divider key={child.id} />;
          case "image":
            return <Image key={child.id} block={child as ImageBlock} />;
          case "code":
            return <Code key={child.id} block={child as CodeBlock} />;
          case "quote":
            return <Quote key={child.id} block={child as QuoteBlock} />;
          case "bulleted_list_item":
            return <BulletedListItem key={child.id} block={child as BulletedListItemBlock} />;
          case "numbered_list_item":
            return <NumberedListItem key={child.id} block={child as NumberedListItemBlock} />;
          case "to_do":
            return <ToDo key={child.id} block={child as ToDoBlock} />;
          case "callout":
            return <Callout key={child.id} block={child as CalloutBlock} />;
          case "bookmark":
            return <Bookmark key={child.id} block={child as BookmarkBlock} />;
          case "table":
            return <Table key={child.id} block={child as TableBlock} />;
          case "child_page":
            return <ChildPage key={child.id} block={child as ChildPageBlock} />;
          case "child_database":
            return <ChildDatabase key={child.id} block={child as ChildDatabaseBlock} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
