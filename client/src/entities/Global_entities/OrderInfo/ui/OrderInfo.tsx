import { ProjectActiveServices } from "@/shared/ui-kit/ProjectActiveServices";
import { OrderInfoProps } from "../model/OrderInfo_types";
import styles from "./OrderInfo.module.scss";
import { memo } from "react";
import { OrderStatus } from "@/shared/ui-kit/OrderStatus";

export const OrderInfo: React.FC<OrderInfoProps> = memo(
  ({
    orderImgURL,
    orderTitle,
    orderPackName,
    extra,
    extraServices,
    orderStatus,
    orderDate,
    PerformerUsername,
    multiplier,
    price,
  }): React.JSX.Element => {
    return (
      <div className={`Page__SirineWrapper ${styles.orderInfo}`}>
        <div className={styles.orderInfo__header}>
          <img
            className={styles.orderInfo__img}
            src={orderImgURL}
            alt={orderTitle}
          />

          <div className={styles.orderInfo__header__info}>
            <h6 className={styles.orderInfo__title}>{orderTitle}</h6>

            <span className={styles.orderInfo__packName}>
              {orderPackName} пакет
              {extra.map((extraItem) => (
                <span key={extraItem}> + {extraItem}</span>
              ))}
            </span>
          </div>
        </div>

        <div className={styles.orderInfo__extraServices}>
          <div className={styles.orderInfo__extraServices__items}>
            <ProjectActiveServices ProjectActiveServices={extraServices} />
          </div>

          {extra.map((extraItem) => (
            <div key={extraItem} className={styles.orderInfo__extra}>
              <span className={styles.orderInfo__extra__block}></span>
              <span
                className={`Page__subcaption ${styles.orderInfo__extra__text}`}
              >
                {extraItem}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.orderInfo__info}>
          <div className={styles.orderInfo__info__item}>
            <span className={styles.orderInfo__info__title}>Статус</span>

            <OrderStatus orderStatus={orderStatus} />
          </div>

          <div className={styles.orderInfo__info__item}>
            <span className={styles.orderInfo__info__title}>Исполнитель</span>

            <span className={styles.orderInfo__info__value}>
              {PerformerUsername}
            </span>
          </div>

          <div className={styles.orderInfo__info__item}>
            <span className={styles.orderInfo__info__title}>Дата заказа</span>

            <span className={styles.orderInfo__info__value}>{orderDate}</span>
          </div>

          <div className={styles.orderInfo__info__item}>
            <span className={styles.orderInfo__info__title}>Кол-во</span>

            <span className={styles.orderInfo__info__value}>{multiplier}x</span>
          </div>

          <div className={styles.orderInfo__info__item}>
            <span className={styles.orderInfo__info__title}>Цена</span>

            <span className={styles.orderInfo__info__value}>{price} Р</span>
          </div>
        </div>
      </div>
    );
  },
);
OrderInfo.displayName = "OrderInfo";
