import { BaseBlock, RichText } from "./base.types";

export interface HeadingBlock extends BaseBlock {
  type: "heading_1" | "heading_2" | "heading_3";
  heading_1?: { rich_text: RichText[] };
  heading_2?: { rich_text: RichText[] };
  heading_3?: { rich_text: RichText[] };
}
