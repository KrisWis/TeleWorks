import { Link } from "react-router-dom";
import styles from "./MainPage_button_red.module.scss";
import { MainPage_button_redProps } from "../model/MainPage_button_red__types";

export const MainPage_button_red: React.FC<MainPage_button_redProps> = ({
  to,
  text,
  className,
}): React.JSX.Element => {
  return (
    <Link to={to} className={`${styles.MainPage_button_red} ${className}`}>
      {text}
    </Link>
  );
};
