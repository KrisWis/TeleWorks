import styles from "./UserEdit.module.scss";
import { memo } from "react";
import { UserEditGeneral } from "./UserEditGeneral";
import { UserEditAbout } from "./UserEditAbout";
import { UserEditPortfolio } from "./UserEditPortfolio";

export const UserEdit: React.FC = memo((): React.JSX.Element => {
  // TODO: сделать скроллинг и добавление в локал сторагу, прогнать все прекоммит хуки
  return (
    <div className={styles.userEdit}>
      <UserEditGeneral />
      <UserEditAbout />
      <UserEditPortfolio />
    </div>
  );
});
