import { SyncedBlock as SyncedBlockType } from "@/types/syncedBlock.types";
import { Children } from "./Children";

export const SyncedBlock = ({ block }: { block: SyncedBlockType }) => (
  <div className="notion-synced-block p-2 bg-gray-50 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 my-5 rounded-md">
    {block.synced_block.children ? (
      <Children children={block.synced_block.children} />
    ) : (
      <p className="text-gray-500 dark:text-gray-400 italic">
        This content is synced.
      </p>
    )}
  </div>
);
