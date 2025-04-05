import { ToDoBlock } from "../types/toDo.types";
import { RichText } from "./RichText";
import { Children } from "./Children";

export const ToDo = ({ block }: { block: ToDoBlock }) => (
  <div className="notion-todo flex items-start gap-2 my-2">
    <input
      type="checkbox"
      checked={block.to_do.checked}
      disabled
      className="notion-todo__checkbox w-5 h-5 rounded border-gray-400 dark:border-gray-600 cursor-not-allowed"
    />
    <div className="notion-todo__content flex-1">
      <RichText richText={block.to_do.rich_text} />
      {block.to_do.children && block.to_do.children.length > 0 && (
        <div className="notion-todo__children ml-6">
          <Children children={block.to_do.children} />
        </div>
      )}
    </div>
  </div>
);
