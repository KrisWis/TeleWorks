import { MouseEventHandler, useEffect, useRef, useState } from "react";
import styles from "./Modal.module.scss";
import { ModalProps } from "../model/Modal_types";
import { PortalElement } from "@/shared/utils/PortalElement";

export const Modal: React.FC<ModalProps> = ({
  children,
  setModalIsOpen,
  className,
  CustomModalAppear,
  CustomSetModalAppear,
}): React.JSX.Element => {
  const [ModalAppear, setModalAppear] = useState<boolean>(false);

  const ParentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
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
        setTimeout(() => {
          setModalIsOpen(false);
        }, 500);
    }
  };

  return PortalElement({
    children: (
      <div
        ref={ParentRef}
        onClick={modalOnClose}
        className={`${styles.modal} ${CustomModalAppear ? styles.modal__appear : ModalAppear ? styles.modal__appear : styles.modal__disappear} ${className}`}
      >
        {children}
      </div>
    ),
  });
};
