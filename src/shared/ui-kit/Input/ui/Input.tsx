import styles from "./Input.module.scss";
import { memo } from "react";
import { InputProps } from "../modal/Input_types";

export const Input: React.FC<InputProps> = memo(
  ({ className, type, placeholder, value, onChange }): React.JSX.Element => {
    return (
      <input
        className={`${styles.Input} ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
);
