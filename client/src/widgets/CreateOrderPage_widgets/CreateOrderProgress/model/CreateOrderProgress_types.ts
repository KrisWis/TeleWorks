import { CreateOrderProgressSteps } from "@/shared/const/createOrder";

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
