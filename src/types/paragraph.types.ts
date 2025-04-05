import { BaseBlock, RichText } from "./base.types";

export interface ParagraphBlock extends BaseBlock {
  type: "paragraph";
  paragraph: {
    rich_text: RichText[];
    color: string;
  };
  children?: BaseBlock[]
}
