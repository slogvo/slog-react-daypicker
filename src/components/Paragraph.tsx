import { ParagraphBlock } from "../types/paragraph.types";
import { Children } from "./Children";
import { RichText } from "./RichText";

export const Paragraph = ({ block }: { block: ParagraphBlock }) => {
  if (!block || block.type !== "paragraph" || !block.paragraph || !Array.isArray(block.paragraph.rich_text)) {
    console.error("Invalid paragraph block:", block);
    return null;
  }

  return (
    <div className="notion-paragraph">
      <p className="notion-paragraph__text text-base leading-relaxed mb-4">
        <RichText richText={block.paragraph.rich_text} />
      </p>
      {block.has_children && block.children && (
        <div className="notion-paragraph__children ml-4">
          <Children children={block.children} />
        </div>
      )}
    </div>
  );
};
