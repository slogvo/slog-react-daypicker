import { BaseBlock, RichText } from "./base.types";

export interface TableRowBlock extends BaseBlock {
  type: "table_row";
  table_row: {
    cells: RichText[][];
  };
}
