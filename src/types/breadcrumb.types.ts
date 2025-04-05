import { BaseBlock } from "./base.types";

export interface BreadcrumbBlock extends BaseBlock {
  type: "breadcrumb";
  breadcrumb: {
    items: {
      title: string;
      url: string;
    }[];
  };
}
