import { BaseBlock } from "./base.types";

export interface ColumnBlock extends BaseBlock {
  type: "column";
  column: Record<string, never>;
  children?: BaseBlock[]; 
}
