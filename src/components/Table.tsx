import { TableBlock } from "../types/table.types";
import { TableRow } from "./TableRow";

export const Table = ({ block }: { block: TableBlock }) => {
  if (!block || !block.children || !Array.isArray(block.children)) {
    console.error("Invalid table block:", block);
    return null;
  }

  return (
    <table className="notion-table w-full border-collapse my-5 border border-gray-300 dark:border-gray-600">
      <tbody>
        {block.children.map((row, index) => (
          <TableRow key={index} block={row} />
        ))}
      </tbody>
    </table>
  );
};
