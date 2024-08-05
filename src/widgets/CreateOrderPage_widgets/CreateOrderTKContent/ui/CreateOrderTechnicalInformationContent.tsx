import styles from "./CreateOrderTechnicalInformationContent.module.scss";
import { memo, useContext } from "react";
import { CreateOrderPageContext } from "@/pages/CreateOrderPage";
import { CreateOrderProgressSteps } from "../../CreateOrderProgress";
import { CreateOrderTechnicalInformationContentProps } from "../model/CreateOrderTechnicalInformationContent_types";
import { OrderSuccessfullyPaid } from "@/shared/ui-kit/OrderSuccessfullyPaid";

export const CreateOrderTechnicalInformationContent: React.FC<CreateOrderTechnicalInformationContentProps> =
  memo((): React.JSX.Element => {
    const { CreateOrderActiveStep } = useContext(CreateOrderPageContext);

    return (
      <section
        className={`${styles.createOrderTechnicalInformationContent} 
    ${CreateOrderActiveStep == CreateOrderProgressSteps.TechnicalInformation ? styles.createOrderTechnicalInformationContent__appear : ""}`}
      >
        <OrderSuccessfullyPaid />
      </section>
    );
  });
