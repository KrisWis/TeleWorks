import {
  ProjectExtraService,
  ProjectInfoPack,
  ProjectInfoPackNames,
} from "../../ProjectInfo_pack/model/ProjectInfo_pack_types";

export interface CheckoutOrderProps {
  pack: ProjectInfoPack;
}

export type ProjectExtraServices = {
  [key in string]: ProjectExtraService;
};

export interface CheckoutOrderPack {
  packPrice: number;
  packAmounts: number;
  extraServices: ProjectExtraServices;
}

export type CheckoutOrderPacks = {
  [key in ProjectInfoPackNames]: CheckoutOrderPack;
};

export interface CheckoutOrderSchema {
  packs: CheckoutOrderPacks;
  finalPrice: number;
}
