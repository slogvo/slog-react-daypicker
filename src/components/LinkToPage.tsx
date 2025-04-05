import { LinkToPageBlock } from "../types/linkToPage.types";

export const LinkToPage = ({ block }: { block: LinkToPageBlock }) => {
  const isPage = block.link_to_page.type === "page_id";
  const pageId = isPage
    ? block.link_to_page.page_id
    : block.link_to_page.database_id;

  return (
    <a
      href={`/${pageId}`}
      className="notion-link-to-page text-primary dark:text-primary-300 hover:underline my-5"
    >
      Link to {isPage ? "Page" : "Database"}
    </a>
  );
};
