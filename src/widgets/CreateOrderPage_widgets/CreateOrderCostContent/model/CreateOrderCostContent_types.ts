import { CreateOrderProgressSteps } from "../../CreateOrderProgress";

export interface CreateOrderCostContentProps {
  setCreateOrderActiveStep: React.Dispatch<
    React.SetStateAction<CreateOrderProgressSteps>
  >;
  setCreateOrderCompletedSteps: React.Dispatch<
    React.SetStateAction<CreateOrderProgressSteps[]>
  >;
}
