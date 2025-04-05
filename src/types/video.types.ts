// src/modules/notion-blocks/types/video.types.ts
import { BaseBlock, RichText } from "./base.types";

export interface VideoBlock extends BaseBlock {
  type: "video";
  video: {
    caption: RichText[];
    type: "external" | "file";
    external?: { url: string };
    file?: { url: string; expiry_time: string };
  };
}
