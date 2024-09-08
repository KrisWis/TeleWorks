import styles from "./Search.module.scss";
import { memo } from "react";
import { SearchProps } from "../model/Search_types";
import { Button } from "@/shared/ui-kit/Button";

export const Search: React.FC<SearchProps> = memo(
  ({ placeholder, ButtonType, ButtonText }): React.JSX.Element => {
    return (
      <div className={styles.search}>
        <input
          className={styles.search_input}
          placeholder={placeholder}
          type="text"
        />

        <Button
          className={styles.search_button}
          text={ButtonText}
          type={ButtonType}
        />
      </div>
    );
  }
);
