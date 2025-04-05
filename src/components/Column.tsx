import { ColumnBlock } from "../types/column.types";
import { Children } from "./Children";

export const Column = ({ block }: { block: ColumnBlock }) => {
  return (
    <div className="notion-column flex-1">
      {block.children && <Children children={block.children} />}
    </div>
  );
};
