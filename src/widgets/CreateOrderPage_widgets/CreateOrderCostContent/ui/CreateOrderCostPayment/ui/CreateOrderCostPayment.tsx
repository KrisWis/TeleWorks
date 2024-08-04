import styles from "./CreateOrderCostPayment.module.scss";
import { memo, useCallback, useContext, useEffect, useState } from "react";
import { Select, selectStyles } from "@/shared/ui-kit/Select";
import {
  SelectTextStyles,
  valueContainerPaddingEnum,
} from "@/shared/ui-kit/Select/model/Select_types";

import BankCardSVG from "@/shared/assets/icons/CreateOrderPage/CreateOrderCostPayment/BankCardSVG.svg?react";
import SelectDropdownIndicatorRedSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorRedSVG.svg?react";
import { CreateOrderCostPaymentBankCard__selectedOptions } from "../model/CreateOrderCostPayment_data";
import { Input } from "@/shared/ui-kit/Input";
import { CheckBoxBlock } from "@/shared/ui-kit/CheckBoxBlock";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { UseTryAction } from "@/shared/utils/hooks/useTryAction";
import { CreateOrderCostPaymentProps } from "../model/CreateOrderCostPayment_types";
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
  color: "#000",
};

export const CreateOrderCostPayment: React.FC<CreateOrderCostPaymentProps> =
  memo(({ FinalPrice, SelectedSaveCard }): React.JSX.Element => {
    const [CardNumber, setCardNumber] = useState<string>("");

    const [ExpirationDate, setExpirationDate] = useState<string>("");

    const [CVCCode, setCVCCode] = useState<string>("");

    const [SaveCard, setSaveCard] = useState<boolean>(false);

    const [TryPay, setTryPay] = UseTryAction();

    const { setCreateOrderActiveStep, setCreateOrderCompletedSteps } =
      useContext(CreateOrderPageContext);

    const CardNumberIsValid = CardNumber.match(
      /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/
    );

    const ExpirationDateIsValid = ExpirationDate.match(
      /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/
    );

    const CVCCodeIsValid = CVCCode.match(/^[0-9]{3,4}$/);

    const canPay = CardNumberIsValid && ExpirationDateIsValid && CVCCodeIsValid;

    useEffect(() => {
      if (SelectedSaveCard) {
        setCardNumber(SelectedSaveCard.cardNumber);
        setExpirationDate(SelectedSaveCard.expirationDate);
        setCVCCode(SelectedSaveCard.CVC);
      }
    }, [SelectedSaveCard]);

    const ClickPayButton = useCallback((): void => {
      if (!canPay) {
        setTryPay(true);
      } else {
        setCreateOrderActiveStep(CreateOrderProgressSteps.START);
        setCreateOrderCompletedSteps((prev) => [
          ...prev,
          CreateOrderProgressSteps.COST,
        ]);
      }
    }, [
      canPay,
      setCreateOrderActiveStep,
      setCreateOrderCompletedSteps,
      setTryPay,
    ]);

    return (
      <div
        className={`Page__BoxShadowWrapper ${styles.createOrderCostPayment}`}
      >
        <div className={styles.createOrderCostPayment__header}>
          <h6 className="CreateOrderPage__caption">Оплата заказа</h6>

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
            <span className="CreateOrderPage__subcaption">Номер карты</span>

            <Input
              type="text"
              placeholder="0000000000000000"
              value={CardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              isWarn={!CardNumberIsValid && TryPay}
            />
          </div>

          <div className={styles.createOrderCostPayment__inputsWrapper}>
            <div className={styles.createOrderCostPayment__inputWrapper}>
              <span className="CreateOrderPage__subcaption">Срок действия</span>

              <Input
                type="text"
                placeholder="ММ/ГГ"
                value={ExpirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                isWarn={!ExpirationDateIsValid && TryPay}
              />
            </div>

            <div className={styles.createOrderCostPayment__inputWrapper}>
              <span className="CreateOrderPage__subcaption">CVC-код</span>

              <Input
                type="password"
                placeholder="***"
                value={CVCCode}
                onChange={(e) => setCVCCode(e.target.value)}
                isWarn={!CVCCodeIsValid && TryPay}
              />
            </div>
          </div>

          <div className={styles.createOrderCostPayment__saveCard}>
            <CheckBoxBlock
              isActive={SaveCard}
              onClick={() => setSaveCard(!SaveCard)}
            />

            <span className="CreateOrderPage__subcaption">
              Сохранить карту, для оплаты следующих покупок
            </span>
          </div>

          <Button
            className={styles.createOrderCostPayment__pay}
            type={ButtonTypes.RED}
            text={`Оплатить ${FinalPrice} ₽ `}
            onClick={ClickPayButton}
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
