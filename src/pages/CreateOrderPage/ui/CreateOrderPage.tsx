import { Footer } from "@/widgets/Global_widgets/Footer";
import "./CreateOrderPage.scss";
import "@/shared/main.scss";
import { Header } from "@/widgets/Global_widgets/Header";
import { useEffect, useState } from "react";
import { memo } from "react";
import {
  CreateOrderProgress,
  CreateOrderProgressSteps,
} from "@/widgets/CreateOrderPage_widgets/CreateOrderProgress";
import { CreateOrderCostContent } from "@/widgets/CreateOrderPage_widgets/CreateOrderCostContent";
import { CreateOrderPageContext } from "../model/CreateOrderPageContext";
import { CreateOrderTechnicalInformationContent } from "@/widgets/CreateOrderPage_widgets/CreateOrderTKContent";

export const CreateOrderPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CreateOrderPage");
  }, []);

  const [CreateOrderActiveStep, setCreateOrderActiveStep] =
    useState<CreateOrderProgressSteps>(CreateOrderProgressSteps.COST);

  const [CreateOrderCompletedSteps, setCreateOrderCompletedSteps] = useState<
    CreateOrderProgressSteps[]
  >([CreateOrderProgressSteps.CREATE]);

  return (
    <CreateOrderPageContext.Provider
      value={{
        CreateOrderActiveStep,
        setCreateOrderActiveStep,
        CreateOrderCompletedSteps,
        setCreateOrderCompletedSteps,
      }}
    >
      <Header />
      <main className="CreateOrderPage__main">
        <div className="padding">
          <CreateOrderProgress />

          <div className="CreateOrderPage__contentWrapper">
            <CreateOrderCostContent />

            <CreateOrderTechnicalInformationContent />
          </div>
        </div>
      </main>
      <Footer />
    </CreateOrderPageContext.Provider>
  );
});
