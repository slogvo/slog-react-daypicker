import { BaseBlock, RichText } from "./base.types";

export interface FileBlock extends BaseBlock {
  type: "file";
  file: {
    caption: RichText[];
    type: "external" | "file";
    external?: { url: string };
    file?: { url: string; expiry_time: string };
  };
}
