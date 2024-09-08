import styles from "./Profile.module.scss";
import { memo } from "react";
import { Profile__body } from "./Profile__body/ui/Profile__body";
import { Profile__header } from "./Profile__header/ui/Profile__header";
import { Profile__footer } from "./Profile__footer/ui/Profile__footer";

export const Profile: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.profile}>
      <Profile__header />
      <Profile__body />
      <Profile__footer />
    </section>
  );
});
