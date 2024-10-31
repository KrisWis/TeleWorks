import { ProjectExtraService } from "@/shared/types/project";
import { CheckoutOrderSchema } from "@/shared/types/schemas";
import { ProjectInfoPackNames } from "@/shared/const/project";

interface CheckoutOrderPackPricePayload {
  price: number;
  packType: ProjectInfoPackNames;
}
export interface CheckoutOrderPackPriceAction {
  payload: CheckoutOrderPackPricePayload;
  type: string;
}

interface CheckoutOrdereditionsAmountsPayload {
  amounts: number;
  packType: ProjectInfoPackNames;
}

export interface CheckoutOrdereditionsAmountsAction {
  payload: CheckoutOrdereditionsAmountsPayload;
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

interface CheckoutOrderExtraServicePayload {
  extraService: ProjectExtraService;
  packType: ProjectInfoPackNames;
  changeTo: boolean;
}

export interface CheckoutOrderExtraServiceAction {
  payload: CheckoutOrderExtraServicePayload;
  type: string;
}

export interface CheckoutOrderFinalPriceAction {
  payload: number;
  type: string;
}
