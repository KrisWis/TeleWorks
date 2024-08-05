import styles from "./CreateOrderCostContent.module.scss";
import { memo, useContext, useEffect, useRef, useState } from "react";
import { CreateOrderCostPayment } from "./CreateOrderCostPayment";
import { UserSavedBankCards } from "@/entities/Global_entities/UserSavedBankCards";
import { SavedBankCardType } from "@/entities/Global_entities/UserSavedBankCards/model/UserSavedBankCards_types";
import { OrderPreview } from "@/entities/CreateOrderPage_entities/CreateOrderCostContent/OrderPreview";
import { createOrderCostFinalPrice } from "../model/CreateOrderCostContent_data";
import { OrderSecurityGuarantee } from "@/shared/ui-kit/OrderSecurityGuarantee";
import { CreateOrderPageContext } from "@/pages/CreateOrderPage";
import { CreateOrderProgressSteps } from "../../CreateOrderProgress";

export const CreateOrderCostContent: React.FC = memo((): React.JSX.Element => {
  const [SelectedSaveCard, setSelectedSaveCard] =
    useState<SavedBankCardType | null>(null);

  const { CreateOrderActiveStep } = useContext(CreateOrderPageContext);

  const [IsVisible, setIsVisible] = useState<boolean>(true);

  const isVisibleTimeOutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (
      CreateOrderActiveStep == CreateOrderProgressSteps.TechnicalInformation
    ) {
      isVisibleTimeOutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 700);
    }
  }, [CreateOrderActiveStep]);

  useEffect(() => {
    return () => {
      clearTimeout(isVisibleTimeOutRef.current);
    };
  }, []);

  return (
    <>
      {IsVisible && (
        <section
          className={`${styles.createOrderCostContent}
      ${CreateOrderActiveStep == CreateOrderProgressSteps.TechnicalInformation ? styles.createOrderCostContent__disappear : ""}`}
        >
          <div className={styles.createOrderCostContent__firstCol}>
            <CreateOrderCostPayment
              SelectedSaveCard={SelectedSaveCard}
              FinalPrice={createOrderCostFinalPrice}
            />

            <UserSavedBankCards setSelectedCard={setSelectedSaveCard} />
          </div>

          <div className={styles.createOrderCostContent__secondCol}>
            <OrderPreview FinalPrice={createOrderCostFinalPrice} />

            <OrderSecurityGuarantee />
          </div>
        </section>
      )}
    </>
  );
});
