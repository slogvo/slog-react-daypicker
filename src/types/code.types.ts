import { BaseBlock, RichText } from "./base.types";

export interface CodeBlock extends BaseBlock {
  type: "code";
  code: {
    rich_text: RichText[];
    language: string;
    caption: RichText[];
  };
}
