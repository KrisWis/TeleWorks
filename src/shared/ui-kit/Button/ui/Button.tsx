import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import { ButtonProps } from "../model/Button__types";
import { memo, useState } from "react";

export const Button: React.FC<ButtonProps> = memo(
  ({
    to,
    text,
    className,
    type,
    canSelected = false,
    onClick,
    ariaDisabled,
  }): React.JSX.Element => {
    const [ButtonIsSelected, setButtonIsSelected] = useState<boolean>(false);

    const ButtonOnClick = (): void => {
      canSelected
        ? setButtonIsSelected(() => !ButtonIsSelected)
        : () => {
            return;
          };

      if (onClick) {
        onClick();
      }
    };

    return (
      <>
        {to ? (
          to.startsWith("http") ? (
            <a
              aria-disabled={ariaDisabled}
              target="_blank"
              href={to}
              onClick={ButtonOnClick}
              className={`${styles.Button} ${styles.Button_a} ${styles[type]} ${canSelected ? styles.catalog__category__canSelected : ""} ${ButtonIsSelected ? styles.catalog__category__selected : ""} ${className}`}
            >
              {text}
            </a>
          ) : (
            <Link
              aria-disabled={ariaDisabled}
              onClick={ButtonOnClick}
              to={to}
              className={`${styles.Button} ${styles[type]} ${canSelected ? styles.catalog__category__canSelected : ""} ${ButtonIsSelected ? styles.catalog__category__selected : ""} ${className}`}
            >
              {text}
            </Link>
          )
        ) : (
          <button
            aria-disabled={ariaDisabled}
            onClick={ButtonOnClick}
            className={`${styles.Button} ${styles[type]} ${canSelected ? styles.catalog__category__canSelected : ""} ${ButtonIsSelected ? styles.catalog__category__selected : ""} ${className}`}
          >
            {text}
          </button>
        )}
      </>
    );
  }
);
