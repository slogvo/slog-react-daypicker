import { ChildPageBlock } from "../types/childPage.types";

export const ChildPage = ({ block }: { block: ChildPageBlock }) => (
  <div className="notion-child-page bg-gray-100 dark:bg-gray-800 p-3 rounded-md my-5">
    <h3 className="notion-child-page__title text-gray-900 dark:text-gray-100 font-semibold">
      {block.child_page.title}
    </h3>
  </div>
);
