import { BaseBlock } from "./base.types";

export interface EquationBlock extends BaseBlock {
  type: "equation";
  equation: {
    expression: string;
  };
}
