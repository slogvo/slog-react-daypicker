import { BaseBlock, RichText } from "./base.types";

export interface BulletedListItemBlock extends BaseBlock {
  type: "bulleted_list_item";
  bulleted_list_item: {
    rich_text: RichText[];
    color: string;
  };
  children?: BaseBlock[];
}
