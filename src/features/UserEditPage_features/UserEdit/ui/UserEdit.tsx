import styles from "./UserEdit.module.scss";
import { memo } from "react";
import { UserEditGeneral } from "./UserEditGeneral";
import { UserEditAbout } from "./UserEditAbout";

export const UserEdit: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.userEdit}>
      <UserEditGeneral />
      <UserEditAbout />
    </div>
  );
});
