import { BaseBlock, RichText } from "./base.types";

export interface NumberedListItemBlock extends BaseBlock {
  type: "numbered_list_item";
  numbered_list_item: {
    rich_text: RichText[];
    color: string;
  };
}
