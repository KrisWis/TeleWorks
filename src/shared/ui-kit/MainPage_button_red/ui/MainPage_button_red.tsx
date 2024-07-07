import { Link } from "react-router-dom";
import styles from "./MainPage_button_red.module.scss";
import { MainPage_button_redProps } from "../model/MainPage_button_red__types";

export const MainPage_button_red: React.FC<MainPage_button_redProps> = ({
  to,
  text,
  className,
  hover = false,
}): React.JSX.Element => {
  return (
    <Link
      to={to}
      className={`${styles.MainPage_button_red} ${className} ${hover && styles.MainPage_button_red__hover}`}
    >
      {text}
    </Link>
  );
};
