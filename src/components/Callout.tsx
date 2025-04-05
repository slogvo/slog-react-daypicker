import { CalloutBlock } from "../types/callout.types";
import { RichText } from "./RichText";

export const Callout = ({ block }: { block: CalloutBlock }) => (
  <div className="notion-callout bg-gray-100 dark:bg-gray-800 p-4 rounded-md flex items-start my-5">
    {block.callout.icon?.type === "emoji" && (
      <span className="notion-callout__icon text-xl mr-3">{block.callout.icon.emoji}</span>
    )}
    {block.callout.icon?.type === "external" && (
      <img
        src={block.callout.icon.external!.url}
        alt="icon"
        className="notion-callout__icon w-6 h-6 mr-3"
      />
    )}
    <div className="notion-callout__content text-gray-700 dark:text-gray-200">
      <RichText richText={block.callout.rich_text} />
    </div>
  </div>
);
