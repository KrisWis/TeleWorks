import styles from "./BlogPopularPost.module.scss";
import { memo } from "react";
import { BlogPopularPostProps } from "../model/BlogPopularPost_types";
import { Flex } from "@/shared/ui-kit/Stack";
import { Link } from "react-router-dom";
import LikeSVG from "@/shared/assets/icons/Global/LikeSVG.svg?react";
import PostCommentsSVG from "@/shared/assets/icons/Global/PostCommentsSVG.svg?react";
import BookmarkSVG from "@/shared/assets/icons/Global/BookmarkSVG.svg?react";

export const BlogPopularPost: React.FC<BlogPopularPostProps> = memo(
  ({
    id,
    imgURL,
    commentsAmount,
    likesAmount,
    bookmarksAmount,
    title,
  }): React.JSX.Element => {
    return (
      <Link to={`/blog/${id}`}>
        <Flex direction="column" gap="10" className={styles.BlogPopularPost}>
          <img
            className={styles.BlogPopularPost__img}
            src={imgURL}
            alt="Изображения поста"
          />

          <span className={styles.BlogPopularPost__title}>{title}</span>

          <Flex
            className={styles.BlogPopularPost__footer}
            align="center"
            gap="10"
          >
            <Flex align="center">
              <LikeSVG />

              <span className={styles.BlogPopularPost__amount}>
                {likesAmount}
              </span>
            </Flex>

            <Flex align="center">
              <PostCommentsSVG />

              <span className={styles.BlogPopularPost__amount}>
                {commentsAmount}
              </span>
            </Flex>

            <Flex align="center">
              <BookmarkSVG />

              <span className={styles.BlogPopularPost__amount}>
                {bookmarksAmount}
              </span>
            </Flex>
          </Flex>
        </Flex>
      </Link>
    );
  }
);
