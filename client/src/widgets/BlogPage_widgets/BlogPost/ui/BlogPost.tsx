import styles from "./BlogPost.module.scss";
import { memo } from "react";
import { BlogPostProps } from "../model/BlogPost_types";
import { Flex } from "@/shared/ui-kit/Stack";
import { TransformDateToString } from "@/shared/utils/TransformDateToString/TransformDateToString";
import LikeSVG from "@/shared/assets/icons/Global/LikeSVG.svg?react";
import PostCommentsSVG from "@/shared/assets/icons/Global/PostCommentsSVG.svg?react";
import BookmarkSVG from "@/shared/assets/icons/Global/BookmarkSVG.svg?react";
import { Share, ShareTypes } from "@/shared/ui-kit/Share";

export const BlogPost: React.FC<BlogPostProps> = memo(
  ({
    imgURL,
    category,
    dateOfCreation,
    title,
    likesAmount,
    bookmarksAmount,
    commentsAmount,
  }): React.JSX.Element => {
    return (
      <Flex direction="column" className={styles.BlogPost}>
        <img
          className={styles.BlogPost__img}
          src={imgURL}
          alt="Изображение поста"
        />

        <Flex className={styles.BlogPost__footer} direction="column">
          <Flex
            className={styles.BlogPost__header}
            align="center"
            justify="between"
          >
            <span className={styles.BlogPost__category}>{category}</span>
            <span className={styles.BlogPost__dateOfCreation}>
              {TransformDateToString(dateOfCreation, false)}
            </span>
          </Flex>

          <h6 className={styles.BlogPost__title}>{title}</h6>

          <Flex
            className={styles.BlogPost__info}
            align="center"
            justify="between"
          >
            <Flex className={styles.BlogPost__icons} align="center" gap="15">
              <Flex align="center" gap="3">
                <LikeSVG />

                <span className={styles.BlogPost__amount}>{likesAmount}</span>
              </Flex>

              <Flex align="center" gap="3">
                <PostCommentsSVG />

                <span className={styles.BlogPost__amount}>
                  {commentsAmount}
                </span>
              </Flex>

              <Flex align="center" gap="3">
                <BookmarkSVG />

                <span className={styles.BlogPost__amount}>
                  {bookmarksAmount}
                </span>
              </Flex>
            </Flex>

            <Share type={ShareTypes.RED} />
          </Flex>
        </Flex>
      </Flex>
    );
  }
);
