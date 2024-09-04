import "./CreateOrderPage.scss";
import "@/shared/main.scss";
import { useEffect, useState } from "react";
import { memo } from "react";
import {
  CreateOrderProgress,
  CreateOrderProgressSteps,
} from "@/widgets/CreateOrderPage_widgets/CreateOrderProgress";
import { CreateOrderCostContent } from "@/widgets/CreateOrderPage_widgets/CreateOrderCostContent";
import { CreateOrderPageContext } from "../model/CreateOrderPageContext";
import { CreateOrderTechnicalInformationContent } from "@/widgets/CreateOrderPage_widgets/CreateOrderTechnicalInformationContent";
import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";
import { UseCreateOrderStepLocalStorage } from "../model/useCreateOrderStepLocalStorage/useCreateOrderStepLocalStorage";

export const CreateOrderPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CreateOrderPage");
  }, []);

  // Сохранение и загрузка этапов, используя LocalStorage
  const CreateOrderStepLI = UseCreateOrderStepLocalStorage(
    UseLocalStorageTypes.GET
  );

  const [CreateOrderActiveStep, setCreateOrderActiveStep] =
    useState<CreateOrderProgressSteps>(
      CreateOrderStepLI
        ? CreateOrderStepLI.CreateOrderActiveStep
        : CreateOrderProgressSteps.COST
    );

  const [CreateOrderCompletedSteps, setCreateOrderCompletedSteps] = useState<
    CreateOrderProgressSteps[]
  >(
    CreateOrderStepLI
      ? CreateOrderStepLI.CreateOrderCompletedSteps
      : [CreateOrderProgressSteps.CREATE]
  );

  return (
    <CreateOrderPageContext.Provider
      value={{
        CreateOrderActiveStep,
        setCreateOrderActiveStep,
        CreateOrderCompletedSteps,
        setCreateOrderCompletedSteps,
      }}
    >
      <main className="Page CreateOrderPage__main">
        <div className="padding">
          <CreateOrderProgress />

          <div className="CreateOrderPage__contentWrapper">
            <CreateOrderCostContent />

            <CreateOrderTechnicalInformationContent />
          </div>
        </div>
      </main>
    </CreateOrderPageContext.Provider>
  );
});
