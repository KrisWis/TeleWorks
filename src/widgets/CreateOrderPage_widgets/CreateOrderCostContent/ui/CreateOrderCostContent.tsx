import styles from "./CreateOrderCostContent.module.scss";
import { memo, useState } from "react";
import { CreateOrderCostContentProps } from "../model/CreateOrderCostContent_types";
import { CreateOrderCostPayment } from "./CreateOrderCostPayment";
import { UserSavedBankCards } from "@/entities/Global_entities/UserSavedBankCards";
import { SavedBankCardType } from "@/entities/Global_entities/UserSavedBankCards/model/UserSavedBankCards_types";

export const CreateOrderCostContent: React.FC<CreateOrderCostContentProps> =
  memo(({ price }): React.JSX.Element => {
    const [SelectedSaveCard, setSelectedSaveCard] =
      useState<SavedBankCardType | null>(null);

    return (
      <section className={styles.createOrderCostContent}>
        <div className={styles.createOrderCostContent__wrapper}>
          <CreateOrderCostPayment
            SelectedSaveCard={SelectedSaveCard}
            price={price}
          />

          <UserSavedBankCards setSelectedCard={setSelectedSaveCard} />
        </div>
      </section>
    );
  });
