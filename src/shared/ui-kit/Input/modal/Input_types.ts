import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  className?: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
