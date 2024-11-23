import styles from "./Textarea.module.scss";
import { memo } from "react";
import { TextareaProps } from "../model/types";

export const Textarea: React.FC<TextareaProps> = memo(
  ({
    className,
    placeholder,
    value,
    onChange,
    isWarn,
    refTextarea,
    "data-testid": dataTestId,
    id,
  }): React.JSX.Element => {
    return (
      <textarea
        id={id}
        data-tesid={dataTestId}
        className={`${styles.Textarea} ${className} ${isWarn ? styles.Textarea__warning : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={refTextarea}
      />
    );
  },
);
Textarea.displayName = "Textarea";
