import React from "react";

export interface DropdownProps {
  DropdownIsOpen: boolean;
  setDropdownIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  trigger: React.ReactNode;
  withArrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
  dropdownClassname?: string;
}
