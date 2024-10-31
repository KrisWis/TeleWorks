import { CreateOrderProgressSteps } from "@/shared/const/createOrder";
import { createContext, useState } from "react";

export interface CreateOrderPageContext {
  CreateOrderActiveStep: CreateOrderProgressSteps;
  setCreateOrderActiveStep: React.Dispatch<
    React.SetStateAction<CreateOrderProgressSteps>
  >;
  CreateOrderCompletedSteps: CreateOrderProgressSteps[];
  setCreateOrderCompletedSteps: React.Dispatch<
    React.SetStateAction<CreateOrderProgressSteps[]>
  >;
}

export const CreateOrderPageContext = createContext<CreateOrderPageContext>({
  CreateOrderActiveStep: CreateOrderProgressSteps.COST,
  setCreateOrderActiveStep: useState,
  CreateOrderCompletedSteps: [CreateOrderProgressSteps.CREATE],
  setCreateOrderCompletedSteps: useState,
});
