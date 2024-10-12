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
import { TransitionBetweenBlocks } from "@/shared/ui-kit/TransitionBetweenBlocks";
import { transitionDurationMedium } from "@/app/layouts/BaseLayout/model/BaseLayout__data";

export const CreateOrderPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CreateOrderPage");
    document.title = `TeleWorks | Создание заказа`;
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
            <TransitionBetweenBlocks
              blocks={[
                {
                  component: <CreateOrderCostContent />,
                  condition:
                    CreateOrderActiveStep == CreateOrderProgressSteps.COST,
                  id: 0,
                },

                {
                  component: <CreateOrderTechnicalInformationContent />,
                  condition:
                    CreateOrderActiveStep ==
                    CreateOrderProgressSteps.TechnicalInformation,
                  id: 1,
                },
              ]}
              transitionDuration={transitionDurationMedium}
              defaultIndex={
                CreateOrderActiveStep == CreateOrderProgressSteps.COST ? 0 : 1
              }
            />
          </div>
        </div>
      </main>
    </CreateOrderPageContext.Provider>
  );
});
