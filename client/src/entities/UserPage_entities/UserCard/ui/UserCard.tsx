import styles from "./UserCard.module.scss";
import { memo, useState } from "react";
import { UserCardProps } from "../model/UserCard_types";
import { Favourite } from "@/shared/ui-kit/Favourite";
import { Share } from "@/shared/ui-kit/Share";
import { Avatar, AvatarSizes } from "@/shared/ui-kit/Avatar";
import { CustomItemBadge } from "@/shared/ui-kit/CustomItemBadge";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { AuthorStats } from "@/shared/ui-kit/AuthorStats";
import { ReportBug } from "@/shared/ui-kit/ReportBug";

export const UserCard: React.FC<UserCardProps> = memo(
  ({
    className,
    authorImgURL,
    online,
    authorName,
    userName,
    userProfession,
    TeleWorksChoice,
    authorResponseTime,
    reputation,
    ordersAmount,
    positiveReviews,
    negativeReviews,
  }): React.JSX.Element => {
    const [IsFavourite, setIsFavourite] = useState<boolean>(false);

    return (
      <div className={`${styles.userCard} ${className}`}>
        <div className={styles.userCard__header}>
          <Favourite
            IsFavourite={IsFavourite}
            setIsFavourite={setIsFavourite}
          />

          <Share url="/" />
        </div>

        <div className={styles.userCard__user}>
          <div
            className={`${styles.userCard__authorAvatar} ${online ? styles.userCard__authorAvatar__online : styles.userCard__authorAvatar__offline}`}
          >
            <Avatar imgURL={authorImgURL} imgSize={AvatarSizes.MEDIUM} />
          </div>

          <address rel="author" className={styles.userCard__authorName}>
            {authorName}
          </address>

          <address rel="author" className={styles.userCard__userName}>
            {userName}
          </address>

          <span className={styles.userCard__userProfession}>
            {userProfession}
          </span>

          {TeleWorksChoice && (
            <CustomItemBadge
              className={styles.userCard__TeleWorksChoice}
              firstTitle="Выбор"
              secondTitle="TeleWorks"
            />
          )}

          <Button
            className={styles.userCard__order}
            type={ButtonTypes.RED}
            text="Заказать услугу"
          />

          <span className={styles.userCard__authorResponseTime}>
            Среднее время ответа: {authorResponseTime}
          </span>

          <AuthorStats
            reputation={reputation}
            ordersAmount={ordersAmount}
            positiveReviewsAmount={positiveReviews}
            negativeReviewsAmount={negativeReviews}
            className={styles.userCard__authorStats}
          />

          <ReportBug className={styles.userCard__reportBug} />
        </div>
      </div>
    );
  },
);
UserCard.displayName = "UserCard";
