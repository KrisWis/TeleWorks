import { CheckoutOrderSchema } from "@/features";
import {
  ProjectExtraService,
  ProjectInfoPackNames,
} from "@/features/ProjectInfo_features/ProjectInfo_pack/model/ProjectInfo_pack_types";

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

interface CheckoutOrderExtraServiceAmountPayload {
  extraServiceTitle: string;
  extraServiceAmount: number;
  packType: ProjectInfoPackNames;
}

export interface CheckoutOrderExtraServiceAmountAction {
  payload: CheckoutOrderExtraServiceAmountPayload;
  type: string;
}

interface CheckoutOrderExtraServicesPayload {
  extraServices: ProjectExtraService[];
  packType: ProjectInfoPackNames;
}

export interface CheckoutOrderExtraServicesAction {
  payload: CheckoutOrderExtraServicesPayload;
  type: string;
}
