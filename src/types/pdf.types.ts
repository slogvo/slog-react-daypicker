import { BaseBlock, RichText } from "./base.types";

export interface PDFBlock extends BaseBlock {
  type: "pdf";
  pdf: {
    caption: RichText[];
    type: "external" | "file";
    external?: { url: string };
    file?: { url: string; expiry_time: string };
  };
}
