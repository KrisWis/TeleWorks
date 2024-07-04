import { Platrform_Privileges__itemProps } from "../model/Platform_Privileges__item__types";
import styles from "./Platform_Privileges__item.module.scss";

export const Platform_Privileges__item: React.FC<
  Platrform_Privileges__itemProps
> = ({ index, caption, text }): React.JSX.Element => {
  return (
    <div className={styles.platform_Privileges__item}>
      <span className={styles.platform_Privileges__item__index}>{index}</span>
      <h5 className={styles.platform_Privileges__item__caption}>{caption}</h5>
      <p className={styles.platform_Privileges__item__text}>{text}</p>
    </div>
  );
};
