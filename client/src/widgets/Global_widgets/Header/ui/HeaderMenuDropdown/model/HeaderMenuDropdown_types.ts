import { DropdownProps } from "@/shared/ui-kit/Dropdown/model/Dropdown_types";

export interface HeaderMenuDropdownProps
  extends Omit<DropdownProps, "trigger" | "children"> {
  setLoginIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
