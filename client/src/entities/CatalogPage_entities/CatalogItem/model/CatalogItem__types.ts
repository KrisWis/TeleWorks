import { CatalogItemInterface } from "@/shared/types/catalog";

type CatalogItemFooter = "small" | "big";

type CatalogItemSelectsType = "format|amount" | "time|top";
export interface CatalogItemProps {
  catalogItem: CatalogItemInterface;
  setMoveToOpenChannelCartIsAppear?: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  footer?: CatalogItemFooter;
  selectsType?: CatalogItemSelectsType;
  hasCounter?: boolean;
}
