import { RichText } from "./RichText";
import { HeadingBlock } from "../types/heading.types";
import { JSX } from "react";

export const Heading = ({ block }: { block: HeadingBlock }) => {
  const level =
    block.type === "heading_1" ? 1 : block.type === "heading_2" ? 2 : 3;
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`notion-heading notion-heading--h${level}`}>
      <RichText richText={block[block.type]?.rich_text || []} />
    </Tag>
  );
};
