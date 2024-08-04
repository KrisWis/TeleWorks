import { CreateOrderProgressSteps } from "@/widgets/CreateOrderPage_widgets/CreateOrderProgress";
import { createContext, useState } from "react";

interface CreateOrderPageContext {
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
