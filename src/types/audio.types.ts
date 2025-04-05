import { BaseBlock, RichText } from "./base.types";

export interface AudioBlock extends BaseBlock {
  type: "audio";
  audio: {
    caption: RichText[];
    type: "external" | "file";
    external?: { url: string };
    file?: { url: string; expiry_time: string };
  };
}
