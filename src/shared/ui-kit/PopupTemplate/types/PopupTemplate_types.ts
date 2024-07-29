import React from "react";

export interface PopupTemplateProps {
  children: React.ReactNode;
  setPopupOpen: (arg0: boolean) => void;
  CustomSetModalAppear: React.Dispatch<React.SetStateAction<boolean>>;
}
