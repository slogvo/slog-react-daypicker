export interface RichText {
  type: "text" | "mention" | "equation";
  text: { content: string; link: { url: string } | null };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
}

export interface BlockParent {
  type: "page_id" | "database_id" | "block_id";
  page_id?: string;
  database_id?: string;
  block_id?: string;
}

export interface User {
  object: "user";
  id: string;
}

export interface BaseBlock {
  object: "block";
  id: string;
  type: string;
  parent: BlockParent;
  created_time: string;
  last_edited_time: string;
  created_by: User;
  last_edited_by: User;
  has_children: boolean;
  archived: boolean;
  in_trash: boolean;
}
