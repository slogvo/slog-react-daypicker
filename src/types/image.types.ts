// src/modules/notion-blocks/types/image.types.ts
import { BaseBlock, RichText } from "./base.types";

export interface ImageBlock extends BaseBlock {
  type: "image";
  image: {
    caption: RichText[];
    type: "external" | "file";
    external?: { url: string };
    file?: { url: string; expiry_time: string };
  };
}
