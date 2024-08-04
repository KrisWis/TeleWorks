import styles from "./CreateOrderCostPayment.module.scss";
import { memo, useEffect, useState } from "react";
import { CreateOrderCostPaymentProps } from "../model/CreateOrderCostPayment_types";
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
  memo(({ price, SelectedSaveCard }): React.JSX.Element => {
    const [CardNumber, setCardNumber] = useState<string>("");

    const [ExpirationDate, setExpirationDate] = useState<string>("");

    const [CVCCode, setCVCCode] = useState<string>("");

    const [SaveCard, setSaveCard] = useState<boolean>(false);

    const [TryPay, setTryPay] = UseTryAction();

    const canPay = CardNumber && ExpirationDate && CVCCode;

    useEffect(() => {
      if (SelectedSaveCard) {
        setCardNumber(SelectedSaveCard.cardNumber);
        setExpirationDate(SelectedSaveCard.expirationDate);
        setCVCCode(SelectedSaveCard.CVC);
      }
    }, [SelectedSaveCard]);

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
              placeholder="0000    0000    0000    0000"
              value={CardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              isWarn={!CardNumber && TryPay}
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
                isWarn={!ExpirationDate && TryPay}
              />
            </div>

            <div className={styles.createOrderCostPayment__inputWrapper}>
              <span className="CreateOrderPage__subcaption">CVC-код</span>

              <Input
                type="password"
                placeholder="***"
                value={CVCCode}
                onChange={(e) => setCVCCode(e.target.value)}
                isWarn={!CVCCode && TryPay}
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
            text={`Оплатить ${price} ₽ `}
            onClick={!canPay ? () => setTryPay(true) : () => {}}
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
