import { MathJax, MathJaxContext } from "better-react-mathjax";
import { EquationBlock } from "../types/equation.types";

export const Equation = ({ block }: { block: EquationBlock }) => (
  <MathJaxContext>
    <div className="notion-equation text-center my-5 font-mono text-primary dark:text-primary-300">
      <MathJax>{`\\(${block.equation.expression}\\)`}</MathJax>
    </div>
  </MathJaxContext>
);
