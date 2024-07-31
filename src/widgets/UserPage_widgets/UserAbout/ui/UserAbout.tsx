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
        </div>
      </section>
    );
  }
);
