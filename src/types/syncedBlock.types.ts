import { BaseBlock } from "./base.types";

export interface SyncedBlock extends BaseBlock {
  type: "synced_block";
  synced_block: {
    synced_from: { block_id: string } | null;
    children?: BaseBlock[]; 
  };
}
