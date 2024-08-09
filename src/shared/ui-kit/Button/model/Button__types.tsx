export enum ButtonTypes {
  RED = "Button__red",
  BLUE = "Button__blue",
  GRAY = "Button__gray",
  WHITE = "Button__white",
  BLACK = "Button__black",
  CYAN = "Button__cyan",
  BLACK_WITHOUT_OUTLINE = "Button__black__withoutOuline",
}

export interface ButtonProps {
  to?: string;
  text: string;
  className?: string;
  type: ButtonTypes;
  canSelected?: boolean;
  onClick?: () => void;
  ariaDisabled?: boolean;
}
