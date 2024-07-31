import styles from "./UserAbout.module.scss";
import { memo } from "react";
import { UserAboutProps } from "../model/UserAbout_types";
import { UserCard } from "@/entities/UserPage_entities/UserAbout_entities/UserCard";

export const UserAbout: React.FC<UserAboutProps> = memo(
  ({
    HeaderImgURL,
    userName,
    userProfession,
    authorResponseTime,
    authorAbout,
    authorSkills,
    authorName,
    TeleWorksChoice,
    reputation,
    ordersAmount,
    positiveReviews,
    negativeReviews,
    authorImgURL,
    online,
  }): React.JSX.Element => {
    return (
      <section className={styles.userAbout}>
        <img
          alt={authorName}
          src={HeaderImgURL}
          className={styles.userAbout__header}
        ></img>

        <div className={styles.userAbout__wrapper}>
          <UserCard
            userName={userName}
            userProfession={userProfession}
            authorResponseTime={authorResponseTime}
            TeleWorksChoice={TeleWorksChoice}
            reputation={reputation}
            ordersAmount={ordersAmount}
            positiveReviews={positiveReviews}
            negativeReviews={negativeReviews}
            authorImgURL={authorImgURL}
            online={online}
            authorName={authorName}
            className={styles.userAbout__userCard}
          />

          <div className={styles.userAbout__about}>
            <h5 className="UserPage__subcaption">Обо мне</h5>

            <pre className={styles.userAbout__about__text}>{authorAbout}</pre>

            <h5 className="UserPage__subcaption">Навыки</h5>

            <div className={styles.userAbout__about__skills}>
              {authorSkills.map((authorSkill) => (
                <div
                  key={authorSkill}
                  className={styles.userAbout__about__skill}
                >
                  <span className={styles.userAbout__about__skill__text}>
                    {authorSkill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);
