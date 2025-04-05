import { useState } from "react";
import { ImageBlock } from "../types/image.types";
import { RichText } from "./RichText";

export const Image = ({ block }: { block: ImageBlock }) => {
  const [isLoading, setIsLoading] = useState(true);
  const imageUrl =
    block.image.type === "external"
      ? block.image.external!.url
      : block.image.file!.url;

  return (
    <figure className="notion-image my-5">
      <div className="notion-image__wrapper relative w-full mx-auto">
        {/* Skeleton Loader */}
        {isLoading && (
          <div className="notion-image__skeleton absolute inset-0 bg-zinc-100 dark:bg-zinc-600 animate-pulse rounded-lg"></div>
        )}

        {/* Image */}
        <img
          src={imageUrl}
          alt={block.image.caption.map((t) => t.plain_text).join("") || "Image"}
          className={`notion-image__img w-full mx-auto h-auto object-cover rounded-md transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Caption */}
      {block.image.caption.length > 0 && (
        <figcaption className="notion-image__caption text-sm text-gray-600 dark:text-gray-400 mt-2">
          <RichText richText={block.image.caption} />
        </figcaption>
      )}
    </figure>
  );
};
