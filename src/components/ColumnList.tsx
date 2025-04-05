import { ColumnListBlock } from "../types/columnList.types";
import { Column } from "./Column";

export const ColumnList = ({ block }: { block: ColumnListBlock }) => {
  return (
    <div className="notion-column-list flex gap-4 my-5">
      {block.children?.map((col) => (
        <Column key={col.id} block={col} />
      ))}
    </div>
  );
};
