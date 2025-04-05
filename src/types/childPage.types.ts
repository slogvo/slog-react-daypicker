import { BaseBlock } from "./base.types";

export interface ChildPageBlock extends BaseBlock {
  type: "child_page";
  child_page: {
    title: string;
  };
}
