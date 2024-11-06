import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  className?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * Условие, при котором инпут будет выделятся красным цветом
   */
  isWarn?: boolean;
  refInput?: React.LegacyRef<HTMLInputElement> | undefined;
  "data-testid"?: string;
  id?: string;
}
