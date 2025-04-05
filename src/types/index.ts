export * from "./base.types";
import { AudioBlock } from "./audio.types";
import { BookmarkBlock } from "./bookmark.types";
import { BreadcrumbBlock } from "./breadcrumb.types";
import { BulletedListItemBlock } from "./bulletedListItem.types";
import { CalloutBlock } from "./callout.types";
import { ChildDatabaseBlock } from "./childDatabase.types";
import { ChildPageBlock } from "./childPage.types";
import { CodeBlock } from "./code.types";
import { ColumnBlock } from "./column.types";
import { ColumnListBlock } from "./columnList.types";
import { DividerBlock } from "./divider.types";
import { EmbedBlock } from "./embed.types";
import { EquationBlock } from "./equation.types";
import { FileBlock } from "./file.types";
import { HeadingBlock } from "./heading.types";
import { ImageBlock } from "./image.types";
import { LinkPreviewBlock } from "./linkPreview.types";
import { LinkToPageBlock } from "./linkToPage.types";
import { NumberedListItemBlock } from "./numberedListItem.types";
import { ParagraphBlock } from "./paragraph.types";
import { PDFBlock } from "./pdf.types";
import { QuoteBlock } from "./quote.types";
import { SyncedBlock } from "./syncedBlock.types";
import { TableBlock } from "./table.types";
import { TableOfContentsBlock } from "./tableOfContents.types";
import { TableRowBlock } from "./tableRow.types";
import { ToDoBlock } from "./toDo.types";
import { VideoBlock } from "./video.types";

export type NotionBlock =
  | ParagraphBlock
  | HeadingBlock
  | DividerBlock
  | ImageBlock
  | CodeBlock
  | QuoteBlock
  | BulletedListItemBlock
  | NumberedListItemBlock
  | ToDoBlock
  | TableBlock
  | TableRowBlock
  | CalloutBlock
  | EmbedBlock
  | BookmarkBlock
  | FileBlock
  | VideoBlock
  | AudioBlock
  | PDFBlock
  | EquationBlock
  | ChildDatabaseBlock
  | ChildPageBlock
  | LinkPreviewBlock
  | ColumnBlock
  | ColumnListBlock
  | SyncedBlock
  | BreadcrumbBlock
  | TableOfContentsBlock
  | LinkToPageBlock;
