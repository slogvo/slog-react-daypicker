import { QuoteBlock } from "../types/quote.types";
import { RichText } from "./RichText";

export const Quote = ({ block }: { block: QuoteBlock }) => (
  <blockquote className="notion-quote border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-5">
    <RichText richText={block.quote.rich_text} />
  </blockquote>
);
