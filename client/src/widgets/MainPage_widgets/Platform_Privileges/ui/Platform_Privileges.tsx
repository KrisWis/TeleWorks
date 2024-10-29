import { Platform_Privileges__items } from "../model/Platform_Priveleges__data";
import styles from "./Platform_Privileges.module.scss";
import { memo } from "react";
import { Platform_Privileges__item } from "./Platform_Privileges__item/ui/Platform_Privileges__item";
import { Platrform_Privileges__itemProps } from "./Platform_Privileges__item/model/Platform_Privileges__item__types";

export const Platform_Privileges: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.platform_Privileges}>
      <svg
        className={styles.platform_Privileges__svg}
        width="480"
        height="645"
        viewBox="0 0 480 645"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M644.41 303.104C639.213 217.12 600.861 138.3 536.399 81.1584C471.918 24.0264 389.003 -4.61807 303.097 0.607061C217.112 5.78299 138.282 44.1398 81.1519 108.613C24.0221 173.085 -4.5871 255.94 0.599362 341.913C5.78582 427.887 44.1381 506.706 108.61 563.848C168.101 616.562 243.231 645 322.032 645C328.636 645 335.269 644.793 341.912 644.39C519.403 633.713 655.097 480.61 644.41 303.104ZM333.015 497.063C286.416 499.907 241.48 484.379 206.523 453.392C171.566 422.415 150.761 379.67 147.946 333.037C145.131 286.415 160.651 241.475 191.623 206.522C222.594 171.56 265.335 150.768 311.974 147.963C315.576 147.747 319.168 147.639 322.751 147.639C365.472 147.639 406.216 163.048 438.467 191.644C473.424 222.621 494.238 265.376 497.053 312.009C502.84 408.236 429.265 491.267 333.015 497.063Z"
          fill="#FF0000"
        />
      </svg>

      <div className={styles.platform_Privileges__wrapper}>
        <h2
          className={`${styles.platform_Privileges__caption} mainPage__caption`}
        >
          <span>Привилегии</span> нашей площадки
        </h2>

        <div className={styles.platform_Privileges__items}>
          <div className={styles.platform_Privileges__items__col}>
            {Platform_Privileges__items.slice(0, 4).map(
              (item: Platrform_Privileges__itemProps) => (
                <Platform_Privileges__item key={item.index} {...item} />
              )
            )}
          </div>

          <div className={styles.platform_Privileges__items__col}>
            {Platform_Privileges__items.slice(4, 8).map(
              (item: Platrform_Privileges__itemProps) => (
                <Platform_Privileges__item key={item.index} {...item} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
