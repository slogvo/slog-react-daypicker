import { BaseBlock } from "./base.types";

export interface LinkToPageBlock extends BaseBlock {
  type: "link_to_page";
  link_to_page: {
    type: "page_id" | "database_id";
    page_id?: string;
    database_id?: string;
  };
}
