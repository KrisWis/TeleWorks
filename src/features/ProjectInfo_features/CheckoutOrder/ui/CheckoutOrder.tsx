import { StoreSchema, useAppDispatch } from "@/app/AppStore";
import { ActiveServices } from "../../ProjectInfo_pack/ui/ActiveServices/ui/ActiveServices";
import { Deadline } from "../../ProjectInfo_pack/ui/Deadline/ui/Deadline";
import { Editions } from "../../ProjectInfo_pack/ui/Editions/ui/Editions";
import { CheckoutOrderProps } from "../model/CheckoutOrder_types";
import styles from "./CheckoutOrder.module.scss";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { checkoutOrderSliceActions } from "../model/CheckoutOrderSlice/CheckoutOrderSlice";
import {
  getExtraServiceAmount,
  getFinalPrice,
  geteditionsAmounts,
} from "../model/CheckoutOrderSlice/CheckoutOrderSlice_selectors";
import {
  ProjectExtraService,
  ProjectInfoPackNames,
} from "../../ProjectInfo_pack/model/ProjectInfo_pack_types";
import { CheckoutOrderAmountCounter } from "./CheckoutOrderAmountCounter/ui/CheckoutOrderAmountCounter";
import { Button, ButtonTypes } from "@/shared";

export const CheckoutOrder: React.FC<CheckoutOrderProps> = memo(
  ({ pack, ExtraServices, setExtraServices }): React.JSX.Element => {
    const dispatch = useAppDispatch();

    const [ResultItemsIsOpen, setResultItemsIsOpen] = useState<boolean>(false);

    const editionsAmounts = useSelector((state: StoreSchema) =>
      geteditionsAmounts(state, pack.packName)
    );

    const finalPrice = useSelector((state: StoreSchema) =>
      getFinalPrice(state)
    );

    const GetExtraServiceAmounts = (extraServiceTitle: string): number => {
      return useSelector((state: StoreSchema) =>
        getExtraServiceAmount(state, pack.packName, extraServiceTitle)
      );
    };

    const ExtraServiceInState = useMemo(
      () =>
        (extraService: ProjectExtraService): boolean => {
          const ExtraServicesModified = Object.assign([], ExtraServices);

          return Boolean(
            ExtraServicesModified.find(
              (extraServiceItem: ProjectExtraService) =>
                extraServiceItem.title === extraService.title
            )
          );
        },
      [ExtraServices]
    );

    const ToggleExtraService = useCallback(
      (extraService: ProjectExtraService): void => {
        const ExtraServicesModified: ProjectExtraService[] = Object.assign(
          [],
          ExtraServices
        );

        if (ExtraServiceInState(extraService)) {
          const newExtraServices = ExtraServices.filter(
            (item) => item.title !== extraService.title
          );

          setExtraServices(newExtraServices);

          dispatch(
            checkoutOrderSliceActions.changeExtraServiceSelected({
              packType: pack.packName,
              extraService: extraService,
              changeTo: false,
            })
          );
        } else {
          ExtraServicesModified.push(extraService);

          setExtraServices(ExtraServicesModified);

          dispatch(
            checkoutOrderSliceActions.changeExtraServiceSelected({
              packType: pack.packName,
              extraService: extraService,
              changeTo: true,
            })
          );
        }
      },
      [
        ExtraServiceInState,
        ExtraServices,
        dispatch,
        pack.packName,
        setExtraServices,
      ]
    );

    const changeExtraServiceAmount = (
      amount: number,
      packName: ProjectInfoPackNames,
      extraService: ProjectExtraService
    ): void => {
      const ExtraServicesModified: ProjectExtraService[] = Object.assign(
        [],
        ExtraServices
      );

      const ExtraServiceModified: ProjectExtraService = Object.assign(
        [],
        ExtraServicesModified[
          ExtraServicesModified.findIndex(
            (el) => el.title === extraService.title
          )
        ]
      );

      if (!ExtraServiceModified.amount) {
        ExtraServiceModified.amount = 0;
      }

      ExtraServiceModified.amount += amount;

      ExtraServicesModified[
        ExtraServicesModified.findIndex((el) => el.title === extraService.title)
      ] = ExtraServiceModified;

      setExtraServices(ExtraServicesModified);

      dispatch(
        checkoutOrderSliceActions.changeExtraServiceAmounts({
          packType: packName,
          extraServiceTitle: extraService.title,
          extraServiceAmount: amount,
        })
      );
    };

    useEffect(() => {
      dispatch(
        checkoutOrderSliceActions.changeExtraServices({
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
          <span className={styles.checkoutOrder__price}>{pack.price} ₽</span>
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
            isDisabled={false}
            amount={editionsAmounts}
            dicreaseAmount={() =>
              dispatch(
                checkoutOrderSliceActions.changeeditionsAmounts({
                  packType: pack.packName,
                  amounts: -1,
                })
              )
            }
            increaseAmount={() =>
              dispatch(
                checkoutOrderSliceActions.changeeditionsAmounts({
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
                    <h5 className={styles.checkoutOrder__caption}>
                      {extraService.title}
                    </h5>

                    <p className={styles.checkoutOrder__descSpan}>
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
                  <span className={styles.checkoutOrder__price}>
                    {extraService.price} ₽
                  </span>

                  {extraService.scalability && (
                    <CheckoutOrderAmountCounter
                      isDisabled={!ExtraServiceInState(extraService)}
                      amount={GetExtraServiceAmounts(extraService.title)}
                      dicreaseAmount={() =>
                        changeExtraServiceAmount(
                          -1,
                          pack.packName,
                          extraService
                        )
                      }
                      increaseAmount={() =>
                        changeExtraServiceAmount(1, pack.packName, extraService)
                      }
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <span
          className={`${styles.checkoutOrder__separator} ${styles.checkoutOrder__separator_big}`}
        ></span>

        <div className={styles.checkoutOrder__result}>
          <div className={styles.checkoutOrder__result__header}>
            <span className={styles.checkoutOrder__caption}>Итого</span>
            <span className={styles.checkoutOrder__price}>{finalPrice} ₽</span>
          </div>

          <span className={styles.checkoutOrder__descSpan}>
            {pack.packName} пакет{" "}
            {ExtraServices.map((extraService) => (
              <span key={extraService.title}> + {extraService.title} </span>
            ))}
          </span>

          <span
            className={`${styles.checkoutOrder__separator} ${styles.checkoutOrder__separator_big}`}
          ></span>

          <div className={styles.checkoutOrder__resultWrapper}>
            <div
              className={`${styles.checkoutOrder__resultItems} 
              ${ResultItemsIsOpen ? styles.checkoutOrder__resultItems__active : ""}`}
            >
              <div className={styles.checkoutOrder__resultItem}>
                <svg
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.88 13.1309C14.88 12.4682 14.3427 11.9309 13.68 11.9309C13.0173 11.9309 12.48 12.4682 12.48 13.1309H14.88ZM13.68 24.1997H12.48C12.48 24.5981 12.6778 24.9706 13.0079 25.1938C13.3379 25.417 13.7573 25.4618 14.1271 25.3133L13.68 24.1997ZM22.8704 20.5101L23.3175 21.6237C23.7723 21.4411 24.0704 21.0002 24.0704 20.5101H22.8704ZM24.0704 12.8397C24.0704 12.177 23.5331 11.6397 22.8704 11.6397C22.2077 11.6397 21.6704 12.177 21.6704 12.8397H24.0704ZM14.4087 12.1774C13.8821 11.775 13.129 11.8757 12.7266 12.4022C12.3242 12.9288 12.4248 13.6819 12.9514 14.0843L14.4087 12.1774ZM16.9568 15.6349L16.2282 16.5883C16.585 16.861 17.064 16.9117 17.4699 16.7197L16.9568 15.6349ZM23.3787 13.9245C23.9778 13.641 24.2338 12.9256 23.9504 12.3266C23.6669 11.7275 22.9515 11.4715 22.3525 11.7549L23.3787 13.9245ZM13.233 12.0173C12.6179 12.2642 12.3195 12.9629 12.5664 13.5779C12.8133 14.193 13.512 14.4914 14.1271 14.2445L13.233 12.0173ZM23.3175 10.5549C23.9325 10.308 24.2309 9.60923 23.984 8.9942C23.7371 8.37918 23.0384 8.08075 22.4234 8.32766L23.3175 10.5549ZM22.4235 10.5549C23.0386 10.8018 23.7373 10.5032 23.984 9.88815C24.2309 9.27312 23.9323 8.57441 23.3173 8.3276L22.4235 10.5549ZM14.1269 4.6396C13.5119 4.39278 12.8131 4.69131 12.5664 5.30636C12.3195 5.92144 12.6181 6.62014 13.2331 6.86696L14.1269 4.6396ZM23.4584 8.39683C22.8808 8.07206 22.1491 8.27711 21.8243 8.85483C21.4995 9.43254 21.7047 10.1642 22.2824 10.489L23.4584 8.39683ZM26.152 11.2877L26.6645 12.3728C27.0704 12.1811 27.3354 11.7789 27.3512 11.3302C27.3672 10.8816 27.1314 10.4616 26.74 10.2416L26.152 11.2877ZM22.3525 11.7549C21.7533 12.0379 21.4975 12.7528 21.7805 13.3522C22.0635 13.9514 22.7794 14.2075 23.3787 13.9245L22.3525 11.7549ZM21.9759 8.63604C21.5312 9.12742 21.569 9.88624 22.0603 10.331C22.5517 10.7757 23.3106 10.7379 23.7554 10.2466L21.9759 8.63604ZM26.8 5.09408L27.6898 5.89931C27.9615 5.59902 28.0635 5.18188 27.9608 4.79009C27.8583 4.39828 27.565 4.08467 27.1808 3.95612L26.8 5.09408ZM16.9568 1.79968L17.3376 0.661724C16.8682 0.504572 16.3503 0.651964 16.0338 1.03281L16.9568 1.79968ZM12.749 4.98641C12.3255 5.49617 12.3954 6.25275 12.9051 6.67627C13.4149 7.0998 14.1715 7.0299 14.5951 6.52014L12.749 4.98641ZM4.03471 8.3276C3.41965 8.57441 3.12113 9.27312 3.36794 9.88815C3.61476 10.5032 4.31346 10.8018 4.92853 10.5549L4.03471 8.3276ZM14.1189 6.86696C14.7339 6.62014 15.0325 5.92144 14.7856 5.30636C14.5389 4.69131 13.8402 4.39278 13.2251 4.6396L14.1189 6.86696ZM5.06967 10.4874C5.64738 10.1626 5.85244 9.43094 5.52767 8.85323C5.20289 8.27552 4.47129 8.07046 3.89357 8.39523L5.06967 10.4874ZM1.20002 11.2861L0.611974 10.24C0.220854 10.4598 -0.0149384 10.8797 0.000757575 11.328C0.0164536 11.7765 0.280998 12.1787 0.68655 12.3707L1.20002 11.2861ZM3.96815 13.9243C4.56714 14.2078 5.28263 13.9522 5.56621 13.3531C5.8498 12.7541 5.5941 12.0387 4.99509 11.755L3.96815 13.9243ZM4.92869 8.32766C4.31367 8.08075 3.61492 8.37918 3.36801 8.9942C3.12109 9.60923 3.41953 10.308 4.03455 10.5549L4.92869 8.32766ZM13.225 14.2445C13.84 14.4914 14.5387 14.193 14.7856 13.5779C15.0325 12.9629 14.7341 12.2642 14.1191 12.0173L13.225 14.2445ZM3.58514 10.239C4.02569 10.7341 4.7842 10.7782 5.27932 10.3378C5.77444 9.89727 5.81866 9.1387 5.3781 8.64358L3.58514 10.239ZM1.20002 5.75328L0.725814 4.65096C0.371638 4.80331 0.112246 5.11656 0.0285976 5.49292C-0.0550504 5.86929 0.0472375 6.26294 0.303542 6.55097L1.20002 5.75328ZM10.3904 1.79968L11.3138 1.03326C10.9739 0.623804 10.405 0.487068 9.91621 0.697356L10.3904 1.79968ZM12.7487 6.51969C13.1719 7.02966 13.9285 7.09992 14.4384 6.67664C14.9483 6.25336 15.0187 5.49681 14.5954 4.98686L12.7487 6.51969ZM14.872 13.1325C14.872 12.4698 14.3347 11.9325 13.672 11.9325C13.0093 11.9325 12.472 12.4698 12.472 13.1325H14.872ZM13.672 24.1997L13.225 25.3133C13.5947 25.4618 14.0141 25.417 14.3442 25.1938C14.6743 24.9706 14.872 24.5981 14.872 24.1997H13.672ZM4.48162 20.5101H3.28162C3.28162 21.0002 3.5797 21.4411 4.03455 21.6237L4.48162 20.5101ZM5.68162 12.8397C5.68162 12.177 5.14436 11.6397 4.48162 11.6397C3.81889 11.6397 3.28162 12.177 3.28162 12.8397H5.68162ZM14.4 14.0848C14.9269 13.6829 15.028 12.9298 14.6259 12.4029C14.224 11.876 13.4709 11.7749 12.944 12.177L14.4 14.0848ZM10.3904 15.6349L9.87727 16.7197C10.2829 16.9115 10.7616 16.8611 11.1184 16.5888L10.3904 15.6349ZM4.99509 11.755C4.39601 11.4717 3.68028 11.7275 3.39687 12.3266C3.11346 12.9256 3.36906 13.6408 3.96815 13.9243L4.99509 11.755ZM12.48 13.1309V24.1997H14.88V13.1309H12.48ZM14.1271 25.3133L23.3175 21.6237L22.4234 19.3965L13.233 23.0861L14.1271 25.3133ZM24.0704 20.5101V12.8397H21.6704V20.5101H24.0704ZM12.9514 14.0843L16.2282 16.5883L17.6855 14.6814L14.4087 12.1774L12.9514 14.0843ZM17.4699 16.7197L23.3787 13.9245L22.3525 11.7549L16.4437 14.5501L17.4699 16.7197ZM14.1271 14.2445L23.3175 10.5549L22.4234 8.32766L13.233 12.0173L14.1271 14.2445ZM23.3173 8.3276L14.1269 4.6396L13.2331 6.86696L22.4235 10.5549L23.3173 8.3276ZM22.2824 10.489L25.564 12.3338L26.74 10.2416L23.4584 8.39683L22.2824 10.489ZM25.6395 10.2026L22.3525 11.7549L23.3787 13.9245L26.6645 12.3728L25.6395 10.2026ZM23.7554 10.2466L27.6898 5.89931L25.9103 4.28884L21.9759 8.63604L23.7554 10.2466ZM27.1808 3.95612L17.3376 0.661724L16.576 2.93763L26.4192 6.23203L27.1808 3.95612ZM16.0338 1.03281L12.749 4.98641L14.5951 6.52014L17.8799 2.56654L16.0338 1.03281ZM4.92853 10.5549L14.1189 6.86696L13.2251 4.6396L4.03471 8.3276L4.92853 10.5549ZM3.89357 8.39523L0.611974 10.24L1.78807 12.3322L5.06967 10.4874L3.89357 8.39523ZM0.68655 12.3707L3.96815 13.9243L4.99509 11.755L1.71349 10.2014L0.68655 12.3707ZM4.03455 10.5549L13.225 14.2445L14.1191 12.0173L4.92869 8.32766L4.03455 10.5549ZM5.3781 8.64358L2.0965 4.95558L0.303542 6.55097L3.58514 10.239L5.3781 8.64358ZM1.67423 6.8556L10.8647 2.902L9.91621 0.697356L0.725814 4.65096L1.67423 6.8556ZM9.46706 2.56609L12.7487 6.51969L14.5954 4.98686L11.3138 1.03326L9.46706 2.56609ZM12.472 13.1325V24.1997H14.872V13.1325H12.472ZM14.1191 23.0861L4.92869 19.3965L4.03455 21.6237L13.225 25.3133L14.1191 23.0861ZM5.68162 20.5101V12.8397H3.28162V20.5101H5.68162ZM12.944 12.177L9.66249 14.681L11.1184 16.5888L14.4 14.0848L12.944 12.177ZM10.9035 14.5501L4.99509 11.755L3.96815 13.9243L9.87727 16.7197L10.9035 14.5501Z"
                    fill="#FF5555"
                  />
                </svg>

                <span className={styles.checkoutOrder__resultItem_span}>
                  {pack.packName} пакет
                  {ExtraServices.length > 0 && <span> + доп.услуги</span>}
                </span>
              </div>

              <div className={styles.checkoutOrder__resultItem}>
                <Deadline deadline={pack.deadline} />
              </div>

              <div className={styles.checkoutOrder__resultItem}>
                <Editions editionsAmount={pack.editionsAmount} />
              </div>
            </div>

            <svg
              className={`${styles.checkoutOrder__resultItems__open} 
              ${!ResultItemsIsOpen ? styles.checkoutOrder__resultItems__open__disactive : ""}`}
              onClick={() => setResultItemsIsOpen(!ResultItemsIsOpen)}
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97918 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z"
                fill="#FF5555"
              />
            </svg>
          </div>
        </div>

        <Button
          className={styles.checkoutOrder__continue}
          type={ButtonTypes.RED}
          text={`Продолжить (${finalPrice} ₽)`}
        />
      </div>
    );
  }
);
