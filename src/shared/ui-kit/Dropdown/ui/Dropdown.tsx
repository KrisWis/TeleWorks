import styles from "./Dropdown.module.scss";
import { memo } from "react";
import { DropdownProps } from "../model/Dropdown_types";
import SelectDropdownIndicatorRedSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorRedSVG.svg?react";

// TODO: Сделать доступность для дропдауна, мб юзнуть headless ui.

export const Dropdown: React.FC<DropdownProps> = memo(
  ({
    DropdownIsOpen,
    setDropdownIsOpen,
    trigger,
    withArrow = true,
    children,
    className,
  }): React.JSX.Element => {
    return (
      <div
        className={`${styles.Dropdown} ${!DropdownIsOpen ? styles.Dropdown__disactive : ""}`}
        onClick={() => setDropdownIsOpen(!DropdownIsOpen)}
      >
        <div className={styles.Dropdown__dropdownSetActive}>
          {trigger}

          {withArrow && (
            <SelectDropdownIndicatorRedSVG
              className={styles.Dropdown__dropdownSVG}
            />
          )}
        </div>

        <div
          className={`${styles.Dropdown__dropdown} Page__BoxShadowWrapper ${className}`}
        >
          {children}
        </div>
      </div>
    );
  }
);
