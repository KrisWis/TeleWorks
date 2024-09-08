import React from "react";

export interface ModalTemplateProps {
  children: React.ReactNode;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  CustomSetModalAppear: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  redirectToBack?: () => void;
}
