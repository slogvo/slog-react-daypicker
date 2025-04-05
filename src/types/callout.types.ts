import { BaseBlock, RichText } from "./base.types";

export interface CalloutBlock extends BaseBlock {
  type: "callout";
  callout: {
    rich_text: RichText[];
    icon: {
      type: "emoji" | "external";
      emoji?: string;
      external?: { url: string };
    };
    color: string;
  };
}
