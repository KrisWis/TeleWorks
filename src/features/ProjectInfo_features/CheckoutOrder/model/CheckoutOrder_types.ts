import {
  ProjectInfoPack,
  ProjectInfoPackNames,
} from "../../ProjectInfo_pack/model/ProjectInfo_pack_types";

export interface CheckoutOrderProps {
  pack: ProjectInfoPack;
}

export interface CheckoutOrderPack {
  packPrice: number;
  packAmounts: number;
}

export type CheckoutOrderPacks = {
  [key in ProjectInfoPackNames]: CheckoutOrderPack;
};

export interface CheckoutOrderSchema {
  packs: CheckoutOrderPacks;
  extraServicesPrice: number;
  finalPrice: number;
}
