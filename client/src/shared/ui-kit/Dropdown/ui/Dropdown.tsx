import styles from "./Dropdown.module.scss";
import { memo } from "react";
import { DropdownProps } from "../model/Dropdown_types";
import SelectDropdownIndicatorRedSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorRedSVG.svg?react";

export const Dropdown: React.FC<DropdownProps> = memo(
  ({
    DropdownIsOpen,
    setDropdownIsOpen,
    trigger,
    withArrow = true,
    children,
    className,
    style,
    dropdownClassname,
    "data-testid": dataTestId = "dropdown",
  }): React.JSX.Element => {
    return (
      <div
        data-testid={dataTestId}
        className={`${styles.Dropdown} ${!DropdownIsOpen ? styles.Dropdown__disactive + " Dropdown__disactive" : ""} ${dropdownClassname}`}
      >
        <div className={styles.Dropdown__dropdownSetActive}>
          <div onClick={() => setDropdownIsOpen(!DropdownIsOpen)}>
            {trigger}
          </div>

          {withArrow && (
            <SelectDropdownIndicatorRedSVG
              className={styles.Dropdown__dropdownSVG}
            />
          )}
        </div>

        <div
          className={`${styles.Dropdown__dropdown} Page__BoxShadowWrapper ${className}`}
          style={style}
        >
          {children}
        </div>
      </div>
    );
  }
);
