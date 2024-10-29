import styles from "./UserEditTabs.module.scss";
import { memo, useContext } from "react";
import BackSVG from "@/shared/assets/icons/UserEditPage/UserEditTabs/BackSVG.svg?react";
import { redirectToAbsolutePath } from "@/shared/utils/redirectToAbsolutePath";
import { UserEditTabsEnum } from "../model/UserEditTabs_types";
import { UserEditPageContext } from "@/pages/UserEditPage";

export const UserEditTabs: React.FC = memo((): React.JSX.Element => {
  // Переключение табов
  const { ActiveUserEditTab, setActiveUserEditTab } =
    useContext(UserEditPageContext);

  return (
    <div className={styles.userEditTabs}>
      <div
        className={styles.userEditTabs__backWrapper}
        onClick={() => redirectToAbsolutePath("/user", 2)}
      >
        <div className={styles.userEditTabs__back}>
          <BackSVG />

          <span className={styles.userEditTabs__back__caption}>В профиль</span>
        </div>
      </div>

      {(
        Object.keys(UserEditTabsEnum) as Array<keyof typeof UserEditTabsEnum>
      ).map((tab) => (
        <span
          key={tab}
          className={`${styles.userEditTabs__tab} 
          ${ActiveUserEditTab == UserEditTabsEnum[tab] ? styles.userEditTabs__tab__active : ""}`}
          onClick={() => setActiveUserEditTab(UserEditTabsEnum[tab])}
        >
          {UserEditTabsEnum[tab]}
        </span>
      ))}
    </div>
  );
});
