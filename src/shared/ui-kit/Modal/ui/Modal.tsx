import { MouseEventHandler, useEffect, useRef, useState } from "react";
import styles from "./Modal.module.scss";
import { PortalElement } from "@/shared/utils/PortalElement/PortalElement";
import { ModalProps } from "../model/Modal_types";

export const Modal: React.FC<ModalProps> = ({
  children,
  setModalIsOpen,
}): React.JSX.Element => {
  const [ModalAppear, setModalAppear] = useState<boolean>(false);

  const ParentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setModalAppear(true);
    }, 0);

    return () => {
      setModalAppear(false);
    };
  }, []);

  const modalOnClose: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target == ParentRef.current) {
      setModalAppear(false);

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
        className={`${styles.modal} ${ModalAppear ? styles.modal__appear : styles.modal__disappear}`}
      >
        {children}
      </div>
    ),
  });
};
