import { RichText as RichTextType } from "../types";

interface RichTextProps {
  richText: RichTextType[] | undefined | null;
}

const notionColors: Record<string, string> = {
  default: "",
  gray: "text-gray-500 dark:text-gray-400",
  brown: "text-[#9F6B53] dark:text-[#B38B74]",
  orange: "text-[#D9730D] dark:text-[#E69A3C]",
  yellow: "text-[#CB912F] dark:text-[#EAB308]",
  green: "text-[#448361] dark:text-[#65A30D]",
  blue: "text-[#337EA9] dark:text-[#3B82F6]",
  purple: "text-[#9065B0] dark:text-[#A855F7]",
  pink: "text-[#C14C8A] dark:text-[#EC4899]",
  red: "text-[#D44C47] dark:text-[#EF4444]",
};

export const RichText = ({ richText }: RichTextProps) => {
  if (!Array.isArray(richText) || richText.length === 0) {
    return null;
  }

  return (
    <>
      {richText.length > 0 && richText.map((text, index) => {
        if (!text || !text.annotations || !text.text) {
          console.error("Invalid rich text item:", text);
          return null;
        }

        const { bold, italic, strikethrough, underline, code, color } =
          text.annotations;

        return (
          <span
            key={index}
            className={[
              "notion-rich-text", 
              notionColors[color] || notionColors.default, 
              bold ? "font-bold" : "",
              italic ? "italic" : "",
              strikethrough ? "line-through" : "",
              underline ? "underline" : "",
              code
                ? "notion-rich-text--code font-mono bg-gray-200/80 text-red-500 px-1.5 rounded"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {text?.text?.link?.url ? (
              <a
                href={text.text.link.url}
                className="notion-rich-text--link text-primary dark:text-primary-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {text.text.content || ""}
              </a>
            ) : (
              text.text.content || ""
            )}
          </span>
        );
      })}
    </>
  );
};
