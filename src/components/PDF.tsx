import { PDFBlock } from "../types/pdf.types";
import { RichText } from "./RichText";

export const PDF = ({ block }: { block: PDFBlock }) => {
  const pdfUrl =
    block.pdf.type === "external" ? block.pdf.external!.url : block.pdf.file!.url;

  return (
    <div className="notion-pdf my-5">
      <embed
        src={pdfUrl}
        type="application/pdf"
        className="notion-pdf__viewer w-full h-96 border border-gray-300 dark:border-gray-700 rounded-md"
      />
      {block.pdf.caption.length > 0 && (
        <div className="notion-pdf__caption text-sm mt-2">
          <RichText richText={block.pdf.caption} />
        </div>
      )}
    </div>
  );
};
