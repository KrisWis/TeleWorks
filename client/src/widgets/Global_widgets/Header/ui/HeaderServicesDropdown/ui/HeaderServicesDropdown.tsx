import styles from "./HeaderServicesDropdown.module.scss";
import { memo } from "react";
import { Dropdown } from "@/shared/ui-kit/Dropdown";
import { URLIsAbsolute } from "@/shared/utils/URLIsAbsolute";
import { Link } from "react-router-dom";
import { headerServicesItems } from "../../../model/Header__data";
import { DropdownProps } from "@/shared/ui-kit/Dropdown/model/Dropdown_types";

export const HeaderServicesDropdown: React.FC<
  Omit<DropdownProps, "trigger" | "children">
> = memo(({ DropdownIsOpen, setDropdownIsOpen }): React.JSX.Element => {
  return (
    <Dropdown
      DropdownIsOpen={DropdownIsOpen}
      setDropdownIsOpen={setDropdownIsOpen}
      trigger={
        <span className={styles.header__services__caption}>Сервисы</span>
      }
      className={styles.header__services__dropdown}
    >
      {(
        Object.keys(headerServicesItems) as Array<
          keyof typeof headerServicesItems
        >
      ).map((category) => (
        <div
          onClick={() => setDropdownIsOpen(false)}
          key={category}
          className={styles.header__services__dropdown__category}
        >
          <span className={styles.header__services__dropdown__category__title}>
            {category}
          </span>

          <div className={styles.header__services__dropdown__category__wrapper}>
            {headerServicesItems[category].map((item) => (
              <div key={item.title}>
                {URLIsAbsolute(item.link) ? (
                  <a
                    href={item.link}
                    className={
                      styles.header__services__dropdown__category__value
                    }
                  >
                    <div
                      className={
                        styles.header__services__dropdown__category__value__svg
                      }
                    >
                      {item.icon}
                    </div>

                    <span
                      className={
                        styles.header__services__dropdown__category__value__text
                      }
                    >
                      {item.title}
                    </span>
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    className={
                      styles.header__services__dropdown__category__value
                    }
                  >
                    <div
                      className={
                        styles.header__services__dropdown__category__value__svg
                      }
                    >
                      {item.icon}
                    </div>

                    <span
                      className={
                        styles.header__services__dropdown__category__value__text
                      }
                    >
                      {item.title}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Dropdown>
  );
});
