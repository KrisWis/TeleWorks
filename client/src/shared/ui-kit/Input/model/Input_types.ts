import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  className?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isWarn?: boolean;
  refInput?: React.LegacyRef<HTMLInputElement> | undefined;
  "data-testid"?: string;
  id?: string;
}
