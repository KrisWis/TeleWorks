import { ModalTemplateProps } from "../types/ModalTemplate_types";
import styles from "./ModalTemplate.module.scss";
import { memo, useCallback } from "react";
import Close from "@/shared/assets/icons/Shared/ModalTemplate/close.svg?react";
import Back from "@/shared/assets/icons/Shared/ModalTemplate/back.svg?react";
import { closeModal } from "@/shared/utils/CloseModal";
import { transitionDuration } from "@/shared/const/global";

export const ModalTemplate: React.FC<ModalTemplateProps> = memo(
  ({
    children,
    setModalOpen,
    CustomSetModalAppear,
    className,
    redirectToBack,
    withoutHeader = false,
    onClose,
  }): React.JSX.Element => {
    // Вызывание функции при закрытии
    const closeModalTemplate = useCallback(() => {
      closeModal(CustomSetModalAppear, setModalOpen);

      const closeModalTimeout = setTimeout(() => {
        onClose && onClose();
        clearTimeout(closeModalTimeout);
      }, transitionDuration);
    }, [CustomSetModalAppear, onClose, setModalOpen]);

    return (
      <div className={`${styles.ModalTemplate} ${className}`}>
        {!withoutHeader && (
          <div className={styles.ModalTemplate__header}>
            <Close
              className={styles.ModalTemplate__close}
              onClick={closeModalTemplate}
            />
            {redirectToBack && (
              <Back
                className={styles.ModalTemplate__back}
                onClick={redirectToBack}
              />
            )}
          </div>
        )}

        <div className={styles.ModalTemplate__wrapper}>{children}</div>
      </div>
    );
  },
);
ModalTemplate.displayName = "ModalTemplate";
