import styles from "./BlogActualPostItem.module.scss";
import { memo, useState } from "react";
import { BlogActualPostItemProps } from "../model/BlogActualPostItem_types";
import { Flex } from "@/shared/ui-kit/Stack";
import { TransformDateToString } from "@/shared/utils/TransformDateToString/TransformDateToString";
import LikeSVG from "@/shared/assets/icons/Global/LikeSVG.svg?react";
import PostCommentsSVG from "@/shared/assets/icons/Global/PostCommentsSVG.svg?react";
import BookmarkSVG from "@/shared/assets/icons/Global/BookmarkSVG.svg?react";

export const BlogActualPostItem: React.FC<BlogActualPostItemProps> = memo(
  ({
    userImgURL,
    username,
    postDate,
    postTitle,
    likesAmount,
    commentsAmount,
  }): React.JSX.Element => {
    // Стейт для того, чтобы пост в закладки добавлять
    const [postIsAddedToBookmark, setPostIsAddedToBookmark] =
      useState<boolean>(false);

    return (
      <Flex
        direction="column"
        justify="between"
        className={styles.BlogActualPostItem}
      >
        <Flex
          className={styles.BlogActualPostItem__header}
          justify="between"
          align="center"
        >
          <Flex align="center" gap="10">
            <img
              className={styles.BlogActualPostItem__userImgURL}
              src={userImgURL}
              alt={username}
            />

            <span className={styles.BlogActualPostItem__username}>
              {username}
            </span>
          </Flex>

          <span className={styles.BlogActualPostItem__postDate}>
            {TransformDateToString(postDate, false)}
          </span>
        </Flex>

        <span className={styles.BlogActualPostItem__postTitle}>
          {postTitle}
        </span>

        <Flex
          className={styles.BlogActualPostItem__footer}
          align="center"
          justify="between"
        >
          <Flex align="center" gap="20">
            <Flex gap="3" align="center">
              <LikeSVG />
              <span className={styles.BlogActualPostItem__amount}>
                {likesAmount}
              </span>
            </Flex>

            <Flex gap="3" align="center">
              <PostCommentsSVG />
              <span className={styles.BlogActualPostItem__amount}>
                {commentsAmount}
              </span>
            </Flex>
          </Flex>

          <div onClick={() => setPostIsAddedToBookmark(!postIsAddedToBookmark)}>
            <BookmarkSVG
              className={`${styles.BlogActualPostItem__bookmark} ${postIsAddedToBookmark ? styles.BlogActualPostItem__bookmark__active : ""}`}
            />
          </div>
        </Flex>
      </Flex>
    );
  }
);
