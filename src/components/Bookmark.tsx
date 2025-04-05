import { BookmarkBlock } from "../types/bookmark.types";
import { RichText } from "./RichText";

export const Bookmark = ({ block }: { block: BookmarkBlock }) => (
  <a
    href={block.bookmark.url}
    className="notion-bookmark block p-2 bg-gray-100 rounded-md text-primary hover:underline my-4 dark:text-primary-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {block.bookmark.caption.length > 0 ? (
      <RichText richText={block.bookmark.caption} />
    ) : (
      block.bookmark.url
    )}
  </a>
);
