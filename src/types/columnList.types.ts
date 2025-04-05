import { BaseBlock } from "./base.types";
import { ColumnBlock } from "./column.types";

export interface ColumnListBlock extends BaseBlock {
  type: "column_list";
  column_list: Record<string, never>; 
  children?: ColumnBlock[]; 
}