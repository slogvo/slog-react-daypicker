import { EmbedBlock } from "@/types/embed.types";
import { RichText } from "./RichText";

export const Embed = ({ block }: { block: EmbedBlock }) => (
  <div className="notion-embed my-5">
    <iframe
      src={block.embed.url}
      title="Embed content"
      className="notion-embed__iframe w-full h-96 rounded-md shadow-md"
    />
    {block.embed.caption.length > 0 && (
      <div className="notion-embed__caption text-sm mt-2">
        <RichText richText={block.embed.caption} />
      </div>
    )}
  </div>
);
