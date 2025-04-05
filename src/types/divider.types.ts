import { BaseBlock } from "./base.types";

export interface DividerBlock extends BaseBlock {
  type: "divider";
  divider: Record<string, never>;
}
