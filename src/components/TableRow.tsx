import { TableRowBlock } from "@/types/tableRow.types";
import { RichText } from "./RichText";

export const TableRow = ({ block }: { block: TableRowBlock }) => {
  if (!block || !block.table_row || !Array.isArray(block.table_row.cells)) {
    console.error("Invalid table row block:", block);
    return null;
  }

  return (
    <tr className="notion-table__row border-b border-gray-200 dark:border-gray-700">
      {block.table_row.cells.map((cellGroup, index) => (
        <td key={index} className="notion-table__cell px-3 py-2 border-r border-gray-200 dark:border-gray-700">
          {cellGroup.map((textItem, textIndex) => (
            <RichText key={textIndex} richText={[textItem]} />
          ))}
        </td>
      ))}
    </tr>
  );
};
