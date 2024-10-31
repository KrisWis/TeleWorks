import styles from "./CreateOrderCostPayment.module.scss";
import { memo, useContext, useMemo, useState } from "react";
import { userHaveEnoughMoney } from "../model/CreateOrderCostPayment_data";
import { Input } from "@/shared/ui-kit/Input";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { UseTryAction } from "@/shared/utils/hooks/UseTryAction";
import { EmailIsValid } from "@/shared/utils/EmailIsValid/EmailIsValid";
import { CreateOrderPageContext } from "@/app/layouts/BaseLayout/ui/pageWrappers/CreateOrderContainer";
import { CreateOrderProgressSteps } from "@/shared/const/createOrder";

export const CreateOrderCostPayment: React.FC = memo((): React.JSX.Element => {
  // Ввод данных в инпут
  const [EmailInputValue, setEmailInputValue] = useState<string>("");

  const [TryPay, setTryPay] = UseTryAction();

  const canPay = useMemo(
    () => EmailIsValid(EmailInputValue),
    [EmailInputValue]
  );

  // Перенаправление на второй этап
  const {
    setCreateOrderActiveStep,
    setCreateOrderCompletedSteps,
    CreateOrderCompletedSteps,
  } = useContext(CreateOrderPageContext);

  const ClickPayButton = (): void => {
    setCreateOrderActiveStep(CreateOrderProgressSteps.TechnicalInformation);
    setCreateOrderCompletedSteps(() => [
      ...CreateOrderCompletedSteps,
      CreateOrderProgressSteps.COST,
    ]);
  };

  return (
    <div className={`Page__BoxShadowWrapper ${styles.createOrderCostPayment}`}>
      <div className={styles.createOrderCostPayment__header}>
        <h6
          className={`CreateOrderPage__caption ${styles.createOrderCostPayment__header__caption}`}
        >
          {userHaveEnoughMoney ? "Оплата заказа" : "Пополнение баланса"}
        </h6>

        {userHaveEnoughMoney && (
          <div className={styles.createOrderCostPayment__header__balance}>
            <span
              className={styles.createOrderCostPayment__header__balance__text}
            >
              Баланс TeleWorks
            </span>

            <span
              className={styles.createOrderCostPayment__header__balance__amount}
            >
              120000
              <span
                className={
                  styles.createOrderCostPayment__header__balance__amount__pennies
                }
              >
                .00
              </span>
              ₽
            </span>
          </div>
        )}
      </div>

      <div className={styles.createOrderCostPayment__wrapper}>
        <div className={styles.createOrderCostPayment__inputWrapper}>
          <span
            className={styles.createOrderCostPayment__inputWrapper__subcaption}
          >
            Ваш e-mail
          </span>

          <Input
            type="email"
            value={EmailInputValue}
            onChange={(e) => setEmailInputValue(e.target.value)}
            isWarn={!EmailIsValid(EmailInputValue) && TryPay}
          />

          <span className={styles.createOrderCostPayment__inputWrapper__desc}>
            На данный e-mail вышлем чек об оплате.
          </span>
        </div>

        <Button
          className={styles.createOrderCostPayment__pay}
          type={ButtonTypes.RED}
          text={`${userHaveEnoughMoney ? "Оплатить" : "Пополнить"} 6000 ₽ `}
          onClick={canPay ? ClickPayButton : () => setTryPay(true)}
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
