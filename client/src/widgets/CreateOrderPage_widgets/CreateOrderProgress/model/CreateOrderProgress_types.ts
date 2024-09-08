export enum CreateOrderProgressSteps {
  CREATE = "Заказ создан",
  COST = "Стоимость",
  TechnicalInformation = "Заказ начат",
}

export enum CreateOrderProgressStepsPostfixs {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
}

export interface CreateOrderProgressStep {
  step: CreateOrderProgressSteps;
  title: string;
  postfix: CreateOrderProgressStepsPostfixs;
}
