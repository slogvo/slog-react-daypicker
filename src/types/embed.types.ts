import { BaseBlock, RichText } from "./base.types";

export interface EmbedBlock extends BaseBlock {
  type: "embed";
  embed: {
    url: string;
    caption: RichText[];
  };
}
