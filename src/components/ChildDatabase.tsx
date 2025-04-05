import { ChildDatabaseBlock } from "../types/childDatabase.types";

export const ChildDatabase = ({ block }: { block: ChildDatabaseBlock }) => (
  <div className="notion-child-database bg-gray-100 dark:bg-gray-800 p-3 rounded-md my-5">
    <h3 className="notion-child-database__title text-gray-900 dark:text-gray-100 font-semibold">
      {block.child_database.title}
    </h3>
  </div>
);
