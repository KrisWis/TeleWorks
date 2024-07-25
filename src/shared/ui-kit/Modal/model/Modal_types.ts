import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  setModalIsOpen: (arg0: boolean) => void;
}
