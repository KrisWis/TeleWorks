import {
  ProjectExtraService,
  ProjectInfoPack,
  ProjectInfoPackNames,
} from "../../ProjectInfo_pack/model/ProjectInfo_pack_types";

export interface CheckoutOrderProps {
  pack: ProjectInfoPack;
  ExtraServices: ProjectExtraService[];
  setExtraServices: React.Dispatch<React.SetStateAction<ProjectExtraService[]>>;
}

export type ProjectExtraServices = {
  [key in string]: ProjectExtraService;
};

export interface CheckoutOrderPack {
  packPrice: number;
  editionsAmounts: number;
  extraServices: ProjectExtraServices;
}

export type CheckoutOrderPacks = {
  [key in ProjectInfoPackNames]: CheckoutOrderPack;
};

export interface CheckoutOrderSchema {
  packs: CheckoutOrderPacks;
  finalPrice: number;
}
