import { BaseBlock, RichText } from "./base.types";

export interface BookmarkBlock extends BaseBlock {
  type: "bookmark";
  bookmark: {
    url: string;
    caption: RichText[];
  };
}
