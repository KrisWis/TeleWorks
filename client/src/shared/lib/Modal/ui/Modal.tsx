import { MouseEventHandler, useEffect, useRef, useState } from "react";
import styles from "./Modal.module.scss";
import { ModalProps } from "../model/Modal_types";
import { PortalElement } from "@/shared/utils/PortalElement";
import { transitionDuration } from "@/shared/const/global";

export const Modal: React.FC<ModalProps> = ({
  children,
  setModalIsOpen,
  className,
  CustomModalAppear,
  CustomSetModalAppear,
  id,
  onClose,
}): React.JSX.Element => {
  const [ModalAppear, setModalAppear] = useState<boolean>(false);

  const ParentRef = useRef<HTMLDivElement>(null);

  const ModalTimeOutRef = useRef<NodeJS.Timeout>();

  const ModalOnCloseTimeOutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ModalTimeOutRef.current = setTimeout(() => {
      if (!CustomSetModalAppear) {
        setModalAppear(true);
      } else {
        CustomSetModalAppear(true);
      }
    }, 0);

    return () => {
      if (!CustomSetModalAppear) {
        setModalAppear(false);
      } else {
        CustomSetModalAppear(false);
      }
    };
  }, [CustomSetModalAppear]);

  const modalOnClose: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target == ParentRef.current) {
      if (!CustomSetModalAppear) {
        setModalAppear(false);
      } else {
        CustomSetModalAppear(false);
      }

      if (setModalIsOpen)
        ModalOnCloseTimeOutRef.current = setTimeout(() => {
          setModalIsOpen(false);
          onClose && onClose();
        }, transitionDuration);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(ModalTimeOutRef.current);
      clearTimeout(ModalOnCloseTimeOutRef.current);
    };
  }, []);

  return PortalElement({
    children: (
      <div
        id={id}
        ref={ParentRef}
        onClick={modalOnClose}
        className={`${styles.modal} 
        ${
          CustomModalAppear
            ? styles.modal__appear
            : ModalAppear
              ? styles.modal__appear
              : styles.modal__disappear
        } ${className}`}
      >
        {children}
      </div>
    ),
  });
};
Modal.displayName = "Modal";
