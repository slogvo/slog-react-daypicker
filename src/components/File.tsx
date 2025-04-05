import { FileBlock } from "../types/file.types";
import { RichText } from "./RichText";

export const File = ({ block }: { block: FileBlock }) => (
  <div className="notion-file my-4">
    <a
      href={
        block.file.type === "external"
          ? block.file.external!.url
          : block.file.file!.url
      }
      className="notion-file__link text-primary hover:underline dark:text-primary-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {block.file.caption.length > 0 ? (
        <RichText richText={block.file.caption} />
      ) : (
        "Download File"
      )}
    </a>
  </div>
);
