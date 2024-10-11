import styles from "./Input.module.scss";
import { memo } from "react";
import { InputProps } from "../model/Input_types";

export const Input: React.FC<InputProps> = memo(
  ({
    className,
    type,
    placeholder,
    value,
    onChange,
    isWarn,
    refInput,
    "data-testid": dataTestId,
    id,
  }): React.JSX.Element => {
    return (
      <input
        id={id}
        data-tesid={dataTestId}
        className={`${styles.Input} ${className} ${isWarn ? styles.Input__warning : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={refInput}
      />
    );
  }
);
