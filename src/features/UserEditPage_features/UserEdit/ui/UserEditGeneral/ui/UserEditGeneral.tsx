import styles from "./UserEditGeneral.module.scss";
import { memo } from "react";
import {
  LoadImageBlock,
  LoadImageBlockSizes,
} from "@/shared/ui-kit/LoadImageBlock";

export const UserEditGeneral: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.userEditGeneral}>
      <h4 className="UserEditPage__caption">Основная информация:</h4>

      <LoadImageBlock
        size={LoadImageBlockSizes.BIG}
        title="Загрузить шапку профиля"
      />
    </div>
  );
});
