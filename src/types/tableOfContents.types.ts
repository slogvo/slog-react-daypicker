import { BaseBlock } from "./base.types";

export interface TableOfContentsBlock extends BaseBlock {
  type: "table_of_contents";
  table_of_contents: {
    color: string;
  };
}
