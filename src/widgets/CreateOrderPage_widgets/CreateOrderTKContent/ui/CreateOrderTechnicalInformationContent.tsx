import styles from "./CreateOrderTechnicalInformationContent.module.scss";
import { memo, useContext, useEffect, useState } from "react";
import { CreateOrderPageContext } from "@/pages/CreateOrderPage";
import { CreateOrderProgressSteps } from "../../CreateOrderProgress";
import { CreateOrderTechnicalInformationContentProps } from "../model/CreateOrderTechnicalInformationContent_types";
import { OrderSuccessfullyPaid } from "@/shared/ui-kit/OrderSuccessfullyPaid";
import { CreateOrderTechnicalInformationContainer } from "./CreateOrderTechnicalInformationContainer";
import { OrderSecurityGuarantee } from "@/shared/ui-kit/OrderSecurityGuarantee";
import { OrderInfo } from "@/entities/Global_entities/OrderInfo";
import { orderInfoData } from "../model/CreateOrderTechnicalInformationContent_data";
import { OrderStatuses } from "@/shared/ui-kit/OrderStatus";

export const CreateOrderTechnicalInformationContent: React.FC<CreateOrderTechnicalInformationContentProps> =
  memo((): React.JSX.Element => {
    const { CreateOrderActiveStep } = useContext(CreateOrderPageContext);

    const [IsVisible, setIsVisible] = useState<boolean>(false);

    const [IsAppear, setIsAppear] = useState<boolean>(false);

    useEffect(() => {
      if (
        CreateOrderActiveStep == CreateOrderProgressSteps.TechnicalInformation
      ) {
        setIsVisible(true);

        setTimeout(() => {
          setIsAppear(true);
        }, 700);
      }
    }, [CreateOrderActiveStep]);

    return (
      <>
        {IsVisible && (
          <section
            className={`${styles.createOrderTechnicalInformationContent} 
    ${IsAppear ? styles.createOrderTechnicalInformationContent__appear : ""}`}
          >
            <OrderSuccessfullyPaid />

            <div
              className={styles.createOrderTechnicalInformationContent__wrapper}
            >
              <CreateOrderTechnicalInformationContainer />

              <div
                className={
                  styles.createOrderTechnicalInformationContent__secondCol
                }
              >
                <OrderInfo
                  orderStatus={OrderStatuses.PROCESS}
                  {...orderInfoData}
                />
                <OrderSecurityGuarantee />
              </div>
            </div>
          </section>
        )}
      </>
    );
  });
