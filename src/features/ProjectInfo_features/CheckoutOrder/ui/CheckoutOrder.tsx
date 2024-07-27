import { StoreSchema, useAppDispatch } from "@/app/AppStore";
import { ActiveServices } from "../../ProjectInfo_pack/ui/ActiveServices/ui/ActiveServices";
import { Deadline } from "../../ProjectInfo_pack/ui/Deadline/ui/Deadline";
import { Editions } from "../../ProjectInfo_pack/ui/Editions/ui/Editions";
import { CheckoutOrderProps } from "../model/CheckoutOrder_types";
import styles from "./CheckoutOrder.module.scss";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { checkoutOrderSliceActions } from "../model/CheckoutOrderSlice/CheckoutOrderSlice";
import {
  getExtraServiceAmount,
  getPackAmounts,
} from "../model/CheckoutOrderSlice/CheckoutOrderSlice_selectors";
import { ProjectExtraService } from "../../ProjectInfo_pack/model/ProjectInfo_pack_types";
import { CheckoutOrderAmountCounter } from "./CheckoutOrderAmountCounter/ui/CheckoutOrderAmountCounter";

export const CheckoutOrder: React.FC<CheckoutOrderProps> = memo(
  ({ pack }): React.JSX.Element => {
    const PackAmounts = useSelector((state: StoreSchema) =>
      getPackAmounts(state, pack.packName)
    );

    const GetExtraServiceAmounts = (extraServiceTitle: string): number => {
      return useSelector((state: StoreSchema) =>
        getExtraServiceAmount(state, pack.packName, extraServiceTitle)
      );
    };

    const dispatch = useAppDispatch();

    const [ExtraServices, setExtraServices] = useState<ProjectExtraService[]>(
      []
    );

    const ToggleExtraService = (extraService: ProjectExtraService): void => {
      const ExtraServicesModified = Object.assign([], ExtraServices);

      if (ExtraServicesModified.includes(extraService)) {
        setExtraServices(ExtraServices.filter((item) => item !== extraService));
      } else {
        ExtraServicesModified.push(extraService);
        setExtraServices(ExtraServicesModified);
      }
    };

    const ExtraServiceInState = (
      extraService: ProjectExtraService
    ): boolean => {
      const ExtraServicesModified = Object.assign([], ExtraServices);

      return ExtraServicesModified.includes(extraService);
    };

    useEffect(() => {
      dispatch(
        checkoutOrderSliceActions.addExtraServices({
          packType: pack.packName,
          extraServices: pack.extraServices!,
        })
      );
    }, [dispatch, pack.extraServices, pack.packName]);

    return (
      <div className={styles.checkoutOrder}>
        <span className={styles.checkoutOrder__header}>Варианты заказа</span>

        <span className={styles.checkoutOrder__separator}></span>

        <div className={styles.checkoutOrder__title}>
          <span className={styles.checkoutOrder__caption}>{pack.packName}</span>
          <span className={styles.checkoutOrder__packPrice}>
            {pack.price} ₽
          </span>
        </div>

        <p className={styles.checkoutOrder__desc}>
          Базовый — для стартапов. Я разработаю ваш креативный типографский
          логотип.
        </p>

        <ActiveServices activeServices={pack.activeServices} />

        <div className={styles.checkoutOrder__wrapper}>
          <div className={styles.checkoutOrder__info}>
            <Deadline deadline={pack.deadline} />

            <Editions editionsAmount={pack.editionsAmount} />
          </div>

          <CheckoutOrderAmountCounter
            amount={PackAmounts}
            dicreaseAmount={() =>
              dispatch(
                checkoutOrderSliceActions.changePackAmounts({
                  packType: pack.packName,
                  amounts: -1,
                })
              )
            }
            increaseAmount={() =>
              dispatch(
                checkoutOrderSliceActions.changePackAmounts({
                  packType: pack.packName,
                  amounts: 1,
                })
              )
            }
          />
        </div>

        <span className={styles.checkoutOrder__separator}></span>

        <span className={styles.checkoutOrder__caption}>
          Улучшите свой заказ с помощью дополнительных услуг
        </span>

        {pack.extraServices && (
          <div className={styles.checkoutOrder__extraServices}>
            {pack.extraServices.map((extraService: ProjectExtraService) => (
              <div
                key={extraService.title}
                className={styles.checkoutOrder__extraService}
              >
                <div className={styles.checkoutOrder__extraService__header}>
                  <div className={styles.checkoutOrder__extraService__info}>
                    <h5 className={styles.checkoutOrder__extraService__title}>
                      {extraService.title}
                    </h5>

                    <p className={styles.checkoutOrder__extraService__desc}>
                      {extraService.desc}
                    </p>
                  </div>

                  <div
                    onClick={() => ToggleExtraService(extraService)}
                    className={`${styles.checkoutOrder__extraService__select} 
                  ${ExtraServiceInState(extraService) ? styles.checkoutOrder__extraService__select__active : ""}`}
                  ></div>
                </div>

                <div className={styles.checkoutOrder__extraService__footer}>
                  <span className={styles.checkoutOrder__extraService__price}>
                    {extraService.price} ₽
                  </span>

                  {extraService.scalability && (
                    <CheckoutOrderAmountCounter
                      amount={GetExtraServiceAmounts(extraService.title)}
                      dicreaseAmount={() =>
                        dispatch(
                          checkoutOrderSliceActions.changeExtraServiceAmounts({
                            packType: pack.packName,
                            extraServiceTitle: extraService.title,
                            extraServiceAmount: -1,
                          })
                        )
                      }
                      increaseAmount={() =>
                        dispatch(
                          checkoutOrderSliceActions.changeExtraServiceAmounts({
                            packType: pack.packName,
                            extraServiceTitle: extraService.title,
                            extraServiceAmount: 1,
                          })
                        )
                      }
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <span className={styles.checkoutOrder__separator}></span>
      </div>
    );
  }
);
