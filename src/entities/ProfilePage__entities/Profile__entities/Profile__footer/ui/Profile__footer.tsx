import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./Profile__footer.module.scss";

export const Profile__footer: React.FC = (): React.JSX.Element => {
  return (
    <div className={styles.profile__footer}>
      <div className={styles.profile__footer__item}>
        <img
          className={styles.profile__footer__item__img}
          src={`${URL_PART}/ProfilePage/icons/profile__footer/geo.png`}
          alt="Иконка гео"
        />
        <h3 className={styles.profile__footer__item__caption}>Гео / Язык</h3>
        <span className={styles.profile__footer__item__desc}>
          Россия / Русский
        </span>
      </div>

      <div className={styles.profile__footer__item}>
        <img
          className={styles.profile__footer__item__img}
          src={`${URL_PART}/ProfilePage/icons/profile__footer/age.png`}
          alt="Иконка гео"
        />
        <h3 className={styles.profile__footer__item__caption}>Возраст</h3>
        <span className={styles.profile__footer__item__desc}>1 год.</span>
      </div>

      <div className={styles.profile__footer__item}>
        <img
          className={styles.profile__footer__item__img}
          src={`${URL_PART}/ProfilePage/icons/profile__footer/posts.png`}
          alt="Иконка гео"
        />
        <h3 className={styles.profile__footer__item__caption}>Постов</h3>
        <span className={styles.profile__footer__item__desc}>1 573</span>
      </div>
    </div>
  );
};
