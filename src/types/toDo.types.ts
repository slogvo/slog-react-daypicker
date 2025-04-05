import { BaseBlock, RichText } from "./base.types";

export interface ToDoBlock extends BaseBlock {
  type: "to_do";
  to_do: {
    rich_text: RichText[];
    checked: boolean;
    color: string;
    children?: BaseBlock[];
  };
}
