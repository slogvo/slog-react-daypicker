import { BaseBlock, RichText } from "./base.types";

export interface QuoteBlock extends BaseBlock {
  type: "quote";
  quote: {
    rich_text: RichText[];
    color: string;
  };
}
