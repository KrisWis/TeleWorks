import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import { ButtonProps } from "../model/Button__types";
import { useState } from "react";

export const Button: React.FC<ButtonProps> = ({
  to,
  text,
  className,
  type,
  canSelected = false,
}): React.JSX.Element => {
  const [ButtonIsSelected, setButtonIsSelected] = useState<boolean>(false);

  return (
    <>
      {to ? (
        to.startsWith("http") ? (
          <a
            href={to}
            onClick={
              canSelected
                ? () => setButtonIsSelected((prev) => !prev)
                : () => {
                    return;
                  }
            }
            className={`${styles.Button} ${styles[type]} ${className} ${canSelected && styles.catalog__category__canSelected} ${ButtonIsSelected ? styles.catalog__category__selected : ""}`}
          >
            {text}
          </a>
        ) : (
          <Link
            onClick={
              canSelected
                ? () => setButtonIsSelected((prev) => !prev)
                : () => {
                    return;
                  }
            }
            to={to}
            className={`${styles.Button} ${styles[type]} ${className} ${canSelected && styles.catalog__category__canSelected} ${ButtonIsSelected ? styles.catalog__category__selected : ""}`}
          >
            {text}
          </Link>
        )
      ) : (
        <div
          onClick={
            canSelected
              ? () => setButtonIsSelected((prev) => !prev)
              : () => {
                  return;
                }
          }
          className={`${styles.Button} ${styles[type]} ${className} ${canSelected && styles.catalog__category__canSelected} ${ButtonIsSelected ? styles.catalog__category__selected : ""}`}
        >
          {text}
        </div>
      )}
    </>
  );
};
