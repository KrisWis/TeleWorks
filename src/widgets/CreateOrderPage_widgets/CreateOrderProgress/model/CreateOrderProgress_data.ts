import {
  CreateOrderProgressStep,
  CreateOrderProgressSteps,
  CreateOrderProgressStepsPostfixs,
} from "./CreateOrderProgress_types";

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
