import { LinkPreviewBlock } from "../types/linkPreview.types";

export const LinkPreview = ({ block }: { block: LinkPreviewBlock }) => (
  <a
    href={block.link_preview.url}
  className="notion-link-preview text-primary dark:text-primary-300 hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    {block.link_preview.url}
  </a>
);
