import styles from "./CreateOrderCostPayment.module.scss";
import { memo, useCallback, useContext, useState } from "react";
import { Select, selectStyles } from "@/shared/ui-kit/Select";
import {
  SelectTextStyles,
  valueContainerPaddingEnum,
} from "@/shared/ui-kit/Select/model/Select_types";

import BankCardSVG from "@/shared/assets/icons/CreateOrderPage/CreateOrderCostPayment/BankCardSVG.svg?react";
import SelectDropdownIndicatorRedSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorRedSVG.svg?react";
import { CreateOrderCostPaymentBankCard__selectedOptions } from "../model/CreateOrderCostPayment_data";
import { Input } from "@/shared/ui-kit/Input";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { CreateOrderPageContext } from "@/pages/CreateOrderPage";
import { CreateOrderProgressSteps } from "@/widgets/CreateOrderPage_widgets/CreateOrderProgress";

const CardSelectDropdownIndicator = (): JSX.Element => {
  return <SelectDropdownIndicatorRedSVG className={selectStyles.Select__svg} />;
};

const CardSelectTextStyles: SelectTextStyles = {
  fontFamily: "var(--font-family)",
  fontWeight: 500,
  fontSize: "20px",
  letterSpacing: "-0.01em",
  lineHeight: "150%",
  color: "var(--black-color)",
};

export const CreateOrderCostPayment: React.FC = memo((): React.JSX.Element => {
  const [ReplenishmentAmount, setReplenishmentAmount] = useState<string>("");

  const { setCreateOrderActiveStep, setCreateOrderCompletedSteps } = useContext(
    CreateOrderPageContext
  );

  const ClickPayButton = useCallback((): void => {
    setCreateOrderActiveStep(CreateOrderProgressSteps.TechnicalInformation);
    setCreateOrderCompletedSteps((prev) => [
      ...prev,
      CreateOrderProgressSteps.COST,
    ]);
  }, [setCreateOrderActiveStep, setCreateOrderCompletedSteps]);

  return (
    <div className={`Page__BoxShadowWrapper ${styles.createOrderCostPayment}`}>
      <div className={styles.createOrderCostPayment__header}>
        <h6 className="CreateOrderPage__caption">Пополнение баланса</h6>

        <div className={styles.createOrderCostPayment__cardChoice}>
          <BankCardSVG />

          <Select
            className={styles.createOrderCostPayment__cardChoice__select}
            selectedOptions={CreateOrderCostPaymentBankCard__selectedOptions}
            CustomDropdownIndicator={CardSelectDropdownIndicator}
            TextStyles={CardSelectTextStyles}
            valueContainerPadding={valueContainerPaddingEnum.SMALL}
          />
        </div>
      </div>

      <div className={styles.createOrderCostPayment__wrapper}>
        <div className={styles.createOrderCostPayment__inputWrapper}>
          <span className="CreateOrderPage__subcaption">Сумма пополнения</span>

          <Input
            type="number"
            placeholder="6000₽"
            value={ReplenishmentAmount}
            onChange={(e) => setReplenishmentAmount(e.target.value)}
          />
        </div>

        <Button
          className={`${styles.createOrderCostPayment__pay} 
          ${!ReplenishmentAmount ? styles.createOrderCostPayment__pay__disabled : ""}`}
          type={ButtonTypes.RED}
          text={`Оплатить ${ReplenishmentAmount} ₽ `}
          onClick={ClickPayButton}
          ariaDisabled={!ReplenishmentAmount}
        />

        <span className={styles.createOrderCostPayment__writeSupport}>
          <span className={styles.createOrderCostPayment__writeSupport__icon}>
            ?
          </span>

          <a
            href="https://t.me/TeleWorksSupportbot"
            className={styles.createOrderCostPayment__writeSupport__text}
          >
            Написать в поддержку
          </a>
        </span>
      </div>
    </div>
  );
});
