import { BaseBlock } from "./base.types";

export interface LinkPreviewBlock extends BaseBlock {
  type: "link_preview";
  link_preview: {
    url: string;
  };
}
