import { AudioBlock } from "../types/audio.types";
import { RichText } from "./RichText";

export const Audio = ({ block }: { block: AudioBlock }) => (
  <div className="notion-audio my-5">
    <audio controls className="notion-audio__player w-full">
      <source
        src={
          block.audio.type === "external"
            ? block.audio.external!.url
            : block.audio.file!.url
        }
      />
    </audio>
    {block.audio.caption.length > 0 && (
      <div className="notion-audio__caption text-sm mt-2">
        <RichText richText={block.audio.caption} />
      </div>
    )}
  </div>
);
