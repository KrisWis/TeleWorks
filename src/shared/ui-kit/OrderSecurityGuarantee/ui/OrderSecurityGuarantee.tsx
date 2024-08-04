import styles from "./OrderSecurityGuarantee.module.scss";
import { memo } from "react";
import GuaranteeSVG from "@/shared/assets/icons/Shared/OrderSecurityGuarantee/GuaranteeSVG.svg?react";

export const OrderSecurityGuarantee: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={`${styles.orderSecurityGuarantee} Page__SirineWrapper`}>
      <div className={styles.orderSecurityGuarantee__header}>
        <GuaranteeSVG className={styles.orderSecurityGuarantee__svg} />

        <h6 className={styles.orderSecurityGuarantee__title}>
          Гарантия безопасности заказа
        </h6>
      </div>

      <p className={styles.orderSecurityGuarantee__text}>
        Ваши средства под защитой TeleWorks на время выполнения заказа. Продавец
        получает оплату после того, как вы проверите и примите заказ. Гарантия
        возврата 100% в случае просрочки или невыполнения заказа.
      </p>
    </div>
  );
});
