import styles from "./Profile__footer.module.scss";
import { memo } from "react";
import { GeoLanguageBlock } from "@/shared/ui-kit/GeoLanguageBlock";
import { GeoLanguageTypes } from "@/shared/ui-kit/GeoLanguageBlock/model/GeoLanguageBlock_types";
import { AgeBlock } from "@/shared/ui-kit/AgeBlock";
import { PostsBlock } from "@/shared/ui-kit/PostsBlock";

export const Profile__footer: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.profile__footer}>
      <GeoLanguageBlock geoLanguage={GeoLanguageTypes.RUSSIAN} />

      <AgeBlock age={"1 год."} />

      <PostsBlock postsAmount={1573} />
    </div>
  );
});
Profile__footer.displayName = "Profile__footer";
