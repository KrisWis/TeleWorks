import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  setModalIsOpen?: (arg0: boolean) => void;
  className?: string;
  CustomModalAppear?: boolean;
  CustomSetModalAppear?: React.Dispatch<React.SetStateAction<boolean>>;
}
