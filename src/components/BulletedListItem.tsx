import { BulletedListItemBlock } from "../types/bulletedListItem.types";
import { Children } from "./Children";
import { RichText } from "./RichText";

export const BulletedListItem = ({
  block,
}: {
  block: BulletedListItemBlock;
}) => (
  <div>
    <li className="notion-bulleted-list-item list-disc list-inside p-2">
      <RichText richText={block.bulleted_list_item.rich_text} />
    </li>
    {block.has_children && block.children && (
      <div className="notion-paragraph__children ml-4">
        <Children children={block.children} />
      </div>
    )}
  </div>
);
