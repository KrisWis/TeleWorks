import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";
import { CreateOrderPageContext, UseCreateOrderStepLocalStorage } from "..";
import {
  CreateOrderProgress,
  CreateOrderProgressSteps,
} from "../../CreateOrderProgress";
import styles from "./CreateOrderContainer.module.scss";
import { memo, useEffect, useState } from "react";
import { transitionDurationMedium } from "@/shared/const/global";
import { TransitionBetweenBlocks } from "@/shared/ui-kit/TransitionBetweenBlocks";
import { CreateOrderCostContent } from "../../CreateOrderCostContent";
import { CreateOrderTechnicalInformationContent } from "../../CreateOrderTechnicalInformationContent";

export const CreateOrderContainer: React.FC = memo((): React.JSX.Element => {
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

  // Стейт для обработки исчезновения первого блока
  const [costBlockIsDisappear, setCostBlockIsDisappear] =
    useState<boolean>(false);

  useEffect(() => {
    if (
      CreateOrderActiveStep != CreateOrderProgressSteps.COST &&
      !CreateOrderStepLI
    ) {
      setCostBlockIsDisappear(true);

      const costBlockIsDisappearTimeout = setTimeout(() => {
        setCostBlockIsDisappear(false);
        clearTimeout(costBlockIsDisappearTimeout);
      }, transitionDurationMedium);
    }
  }, [CreateOrderActiveStep, CreateOrderStepLI]);

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

          <div className={styles.CreateOrderContainer__contentWrapper}>
            <TransitionBetweenBlocks
              className={
                costBlockIsDisappear
                  ? styles.CreateOrderContainer__contentWrapper__wrapper__disappear
                  : styles.CreateOrderContainer__contentWrapper__wrapper
              }
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
