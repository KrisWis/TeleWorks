import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import { ButtonProps } from "../model/Button__types";

export const Button: React.FC<ButtonProps> = ({
  to,
  text,
  className,
  type,
}): React.JSX.Element => {
  return (
    <>
      {to ? (
        <Link
          to={to}
          className={`${styles.Button} ${styles[type]} ${className}`}
        >
          {text}
        </Link>
      ) : (
        <div className={`${styles.Button} ${styles[type]} ${className}`}>
          {text}
        </div>
      )}
    </>
  );
};
