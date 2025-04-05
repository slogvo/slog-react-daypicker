import { BaseBlock } from "./base.types";

export interface ChildDatabaseBlock extends BaseBlock {
  type: "child_database";
  child_database: {
    title: string;
  };
}
