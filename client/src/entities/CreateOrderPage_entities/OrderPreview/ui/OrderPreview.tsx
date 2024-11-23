import styles from "./OrderPreview.module.scss";
import { memo } from "react";
import { OrderPreviewProps } from "../model/OrderPreview_types";
import { orderData } from "../model/OrderPreview_data";
import { ProjectActiveServices } from "@/shared/ui-kit/ProjectActiveServices";
import { ProjectDeadline } from "@/shared/ui-kit/ProjectDeadline";
import { ProjectEditions } from "@/shared/ui-kit/ProjectEditions/ui/ProjectEditions";

export const OrderPreview: React.FC<OrderPreviewProps> = memo(
  ({ FinalPrice }): React.JSX.Element => {
    return (
      <div className={`Page__SirineWrapper ${styles.orderPreview}`}>
        <div className={styles.orderPreview__header}>
          <div className={styles.orderPreview__headerWrapper}>
            <span className="CreateOrderPage__caption">Итого</span>

            <span className={styles.orderPreview__finalPrice}>
              {FinalPrice} ₽
            </span>
          </div>

          <span className={styles.orderPreview__desc}>
            {orderData.packName} пакет
            {orderData.extra.map((extraItem) => (
              <span key={extraItem.title}> + {extraItem.title}</span>
            ))}
          </span>
        </div>

        <div className={styles.orderPreview__project}>
          <img
            className={styles.orderPreview__project__img}
            src={orderData.projectImgURL}
            alt={orderData.projectTitle}
          />

          <div className={styles.orderPreview__project__info}>
            <h6 className={styles.orderPreview__project__title}>
              {orderData.projectTitle}
            </h6>

            <div className={styles.orderPreview__project__info__footer}>
              <span className={styles.orderPreview__project__multiplier}>
                {orderData.multiplier}x
              </span>

              <span className={styles.orderPreview__project__price}>
                {orderData.projectPrice} ₽
              </span>
            </div>
          </div>
        </div>

        <div className={styles.orderPreview__wrapper}>
          <div className={styles.orderPreview__wrapper_padding}>
            <ProjectActiveServices
              ProjectActiveServices={orderData.extraServices}
            />

            <ProjectDeadline deadline={orderData.deadline} />

            <ProjectEditions editionsAmount={orderData.editionsAmount} />
          </div>
        </div>

        <div className={styles.orderPreview__extraWrapper}>
          {orderData.extra.map((extraService) => (
            <div
              key={extraService.title}
              className={styles.orderPreview__extra}
            >
              <div className={styles.orderPreview__extra__titleWrapper}>
                <div className={styles.orderPreview__extra__title__block}></div>

                <span className={styles.orderPreview__extra__title}>
                  {extraService.title}
                </span>
              </div>

              <span className={styles.orderPreview__extra__price}>
                {extraService.price} ₽
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
);
OrderPreview.displayName = "OrderPreview";
