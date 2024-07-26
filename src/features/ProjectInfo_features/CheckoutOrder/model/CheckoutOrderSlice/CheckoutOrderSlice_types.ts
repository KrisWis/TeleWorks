import { CheckoutOrderSchema } from "@/features";
import { ProjectInfoPackNames } from "@/features/ProjectInfo_features/ProjectInfo_pack/model/ProjectInfo_pack_types";

interface CheckoutOrderPackPricePayload {
  price: number;
  packType: ProjectInfoPackNames;
}
export interface CheckoutOrderPackPriceAction {
  payload: CheckoutOrderPackPricePayload;
  type: string;
}

interface CheckoutOrderPackAmountsPayload {
  amounts: number;
  packType: ProjectInfoPackNames;
}

export interface CheckoutOrderPackAmountsAction {
  payload: CheckoutOrderPackAmountsPayload;
  type: string;
}

export interface CheckoutOrderStateAction {
  payload: CheckoutOrderSchema;
  type: string;
}
