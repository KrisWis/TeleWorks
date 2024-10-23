export enum ButtonTypes {
  RED = "Button__red",
  RED_WITHOUT_OUTLINE = "Button__red__withoutOutline",
  BLUE = "Button__blue",
  GRAY = "Button__gray",
  WHITE = "Button__white",
  BLACK = "Button__black",
  CYAN = "Button__cyan",
  BLACK_WITHOUT_OUTLINE = "Button__black__withoutOutline",
}

export interface ButtonProps {
  to?: string;
  text?: string;
  className?: string;
  type: ButtonTypes;
  canSelected?: boolean;
  onClick?: () => void;
  ariaDisabled?: boolean;
  children?: React.ReactNode;
}
