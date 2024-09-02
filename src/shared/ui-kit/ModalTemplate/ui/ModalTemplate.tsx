import { ModalTemplateProps } from "../types/ModalTemplate_types";
import styles from "./ModalTemplate.module.scss";
import { memo, MouseEventHandler, useCallback, useEffect, useRef } from "react";
import Close from "@/shared/assets/icons/Shared/ModalTemplate/close.svg?react";
import Back from "@/shared/assets/icons/Shared/ModalTemplate/back.svg?react";
import { transitionDuration } from "@/app/layouts/model/BaseLayout__data";

export const ModalTemplate: React.FC<ModalTemplateProps> = memo(
  ({
    children,
    setModalOpen,
    CustomSetModalAppear,
    className,
    redirectToBack,
  }): React.JSX.Element => {
    // Закрытие модалки
    const ModalOnOpenTimeOutRef = useRef<NodeJS.Timeout>();

    const CloseModal: MouseEventHandler<SVGSVGElement> = useCallback(() => {
      CustomSetModalAppear(false);

      ModalOnOpenTimeOutRef.current = setTimeout(() => {
        setModalOpen(false);
      }, transitionDuration);
    }, [CustomSetModalAppear, setModalOpen]);

    useEffect(() => {
      return () => {
        clearTimeout(ModalOnOpenTimeOutRef.current);
      };
    }, []);

    return (
      <div className={`${styles.ModalTemplate} ${className}`}>
        <div className={styles.ModalTemplate__header}>
          <Close className={styles.ModalTemplate__close} onClick={CloseModal} />
          {redirectToBack && (
            <Back
              className={styles.ModalTemplate__back}
              onClick={redirectToBack}
            />
          )}
        </div>

        <div className={styles.ModalTemplate__wrapper}>{children}</div>
      </div>
    );
  }
);
