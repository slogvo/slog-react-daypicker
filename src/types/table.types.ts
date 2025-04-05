import { BaseBlock } from "./base.types";
import { TableRowBlock } from "./tableRow.types";

export interface TableBlock extends BaseBlock {
  type: "table";
  table: {
    table_width: number;
    has_column_header: boolean;
    has_row_header: boolean;
  };
  children?: TableRowBlock[]; 
}
