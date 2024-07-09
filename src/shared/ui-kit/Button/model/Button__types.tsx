export enum ButtonTypes {
  RED = "Button__red",
  BLUE = "Button__blue",
  GRAY = "Button__gray",
  WHITE = "Button__white",
  BLACK = "Button__black",
}

export interface ButtonProps {
  to?: string;
  text: string;
  className?: string;
  type: ButtonTypes;
}
