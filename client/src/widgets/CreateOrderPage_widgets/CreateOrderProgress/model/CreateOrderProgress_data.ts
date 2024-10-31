import {
  CreateOrderProgressStep,
  CreateOrderProgressStepsPostfixs,
} from "./CreateOrderProgress_types";
import { CreateOrderProgressSteps } from "@/shared/const/createOrder";

export const createOrderProgressSteps: CreateOrderProgressStep[] = [
  {
    step: CreateOrderProgressSteps.CREATE,
    title: "Заказ создан",
    postfix: CreateOrderProgressStepsPostfixs.FIRST,
  },

  {
    step: CreateOrderProgressSteps.COST,
    title: "Стоимость",
    postfix: CreateOrderProgressStepsPostfixs.SECOND,
  },

  {
    step: CreateOrderProgressSteps.TechnicalInformation,
    title: "Заказ начат",
    postfix: CreateOrderProgressStepsPostfixs.THIRD,
  },
];
