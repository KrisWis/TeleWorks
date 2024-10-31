import styles from "./CreateOrderTechnicalInformationContent.module.scss";
import { memo, useContext } from "react";
import { CreateOrderTechnicalInformationContentProps } from "../model/CreateOrderTechnicalInformationContent_types";
import { OrderSuccessfullyPaid } from "@/shared/ui-kit/OrderSuccessfullyPaid";
import { CreateOrderTechnicalInformationContainer } from "./CreateOrderTechnicalInformationContainer";
import { OrderSecurityGuarantee } from "@/shared/ui-kit/OrderSecurityGuarantee";
import { OrderInfo } from "@/entities/Global_entities/OrderInfo";
import { orderInfoData } from "../model/CreateOrderTechnicalInformationContent_data";
import { OrderStatuses } from "@/shared/ui-kit/OrderStatus";
import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";
import {
  CreateOrderPageContext,
  UseCreateOrderStepLocalStorage,
} from "@/app/layouts/BaseLayout/ui/pageWrappers/CreateOrderContainer";
import { CreateOrderProgressSteps } from "@/shared/const/createOrder";

export const CreateOrderTechnicalInformationContent: React.FC<CreateOrderTechnicalInformationContentProps> =
  memo((): React.JSX.Element => {
    const { CreateOrderCompletedSteps } = useContext(CreateOrderPageContext);

    UseCreateOrderStepLocalStorage(UseLocalStorageTypes.UPDATE, {
      CreateOrderActiveStep: CreateOrderProgressSteps.TechnicalInformation,
      CreateOrderCompletedSteps: [
        ...CreateOrderCompletedSteps,
        CreateOrderProgressSteps.COST,
      ],
    });

    // localStorage.clear();

    return (
      <section className={styles.createOrderTechnicalInformationContent}>
        <OrderSuccessfullyPaid />

        <div className={styles.createOrderTechnicalInformationContent__wrapper}>
          <CreateOrderTechnicalInformationContainer />

          <div
            className={styles.createOrderTechnicalInformationContent__secondCol}
          >
            <OrderInfo orderStatus={OrderStatuses.PROCESS} {...orderInfoData} />
            <OrderSecurityGuarantee />
          </div>
        </div>
      </section>
    );
  });
