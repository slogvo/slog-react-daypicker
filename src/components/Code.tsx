import { useEffect, useRef } from "react";
import { CodeBlock } from "../types/code.types";
import { RichText } from "./RichText";
import * as Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";

export const Code = ({ block }: { block: CodeBlock }) => {
  const codeRef = useRef<HTMLElement>(null);

  const codeContent = block.code.rich_text
    .map((text) => text.text.content)
    .join("");

  const language = block.code.language.toLowerCase() || "plaintext";

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [block.code.rich_text]);

  return (
    <div className="notion-code my-5 bg-gray-900 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="notion-code__header flex items-center justify-between bg-gray-800 dark:bg-gray-700 px-4 py-2">
        <span className="notion-code__language text-sm text-gray-300">
          {language}
        </span>
        <div className="notion-code__controls flex gap-1">
          <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        </div>
      </div>

      {/* Code Block */}
      <pre className="notion-code__body p-4 overflow-x-auto">
        <code
          ref={codeRef}
          className={`language-${language} font-mono text-sm text-white`}
        >
          {codeContent}
        </code>
      </pre>

      {/* Caption */}
      {block.code.caption.length > 0 && (
        <div className="notion-code__caption px-4 py-2 bg-gray-800 dark:bg-gray-700 text-sm text-gray-400">
          <RichText richText={block.code.caption} />
        </div>
      )}
    </div>
  );
};
