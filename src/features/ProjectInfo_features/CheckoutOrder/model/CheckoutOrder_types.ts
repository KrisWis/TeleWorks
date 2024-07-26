import { ProjectInfoPack } from "../../ProjectInfo_pack/model/ProjectInfo_pack_types";

export interface CheckoutOrderProps {
  pack: ProjectInfoPack;
}

export interface CheckoutOrderSchema {
  packPrice: number;
  packAmounts: number;
  extraServicesPrice: number;
  finalPrice: number;
}
