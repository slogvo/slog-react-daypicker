import { BreadcrumbBlock } from "../types/breadcrumb.types";

export const Breadcrumb = ({ block }: { block: BreadcrumbBlock }) => {
  if (!block || block.type !== "breadcrumb" || !block.breadcrumb?.items) {
    console.error("Invalid breadcrumb block:", block);
    return null;
  }

  return (
    <nav className="notion-breadcrumb py-2 my-5 text-sm text-gray-600 dark:text-gray-300">
      {block.breadcrumb.items.map((item, index) => (
        <span key={index} className="notion-breadcrumb__item">
          <a href={item.url} className="notion-breadcrumb__link hover:underline text-primary dark:text-primary-300">
            {item.title}
          </a>
          {index < block.breadcrumb.items.length - 1 && <span className="notion-breadcrumb__separator mx-1">/</span>}
        </span>
      ))}
    </nav>
  );
};
