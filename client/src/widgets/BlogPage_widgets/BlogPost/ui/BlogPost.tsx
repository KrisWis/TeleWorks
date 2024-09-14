import styles from "./BlogPost.module.scss";
import { memo, useCallback, useEffect, useRef } from "react";
import { BlogPostProps } from "../model/BlogPost_types";
import { Flex } from "@/shared/ui-kit/Stack";
import { TransformDateToString } from "@/shared/utils/TransformDateToString/TransformDateToString";
import LikeSVG from "@/shared/assets/icons/Global/LikeSVG.svg?react";
import PostCommentsSVG from "@/shared/assets/icons/Global/PostCommentsSVG.svg?react";
import BookmarkSVG from "@/shared/assets/icons/Global/BookmarkSVG.svg?react";
import { Share, ShareTypes } from "@/shared/ui-kit/Share";
import { useNavigate } from "react-router-dom";

export const BlogPost: React.FC<BlogPostProps> = memo(
  ({
    imgURL,
    category,
    dateOfCreation,
    title,
    likesAmount,
    bookmarksAmount,
    commentsAmount,
    id,
  }): React.JSX.Element => {
    // Редирект на страницу поста и ховер на посте
    const navigate = useNavigate();
    const shareRef = useRef<HTMLDivElement>(null);
    const postRef = useRef<HTMLDivElement>(null);

    const redirectToPostPage = useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        if (shareRef.current!.parentElement == e.target) {
          navigate(`${id}`);
        }
      },
      [id, navigate]
    );

    const postMouseoverEvent = useCallback((e: MouseEvent): void => {
      const eTarget: HTMLDivElement = e.target as HTMLDivElement;

      if (shareRef.current == eTarget.parentElement!.parentElement) {
        postRef.current!.classList.remove(styles.BlogPost__hover);
        return;
      }

      postRef.current!.classList.add(styles.BlogPost__hover);
    }, []);

    const postMouseoutEvent = useCallback((): void => {
      postRef.current!.classList.remove(styles.BlogPost__hover);
    }, []);

    useEffect(() => {
      const postRefCurrent = postRef.current!;

      postRefCurrent.addEventListener("mouseover", postMouseoverEvent);

      postRefCurrent.addEventListener("mouseout", postMouseoutEvent);

      return () => {
        postRefCurrent.removeEventListener("mouseover", postMouseoverEvent);

        postRefCurrent.removeEventListener("mouseout", postMouseoutEvent);
      };
    }, [postMouseoutEvent, postMouseoverEvent]);

    return (
      <Flex
        onClick={(e) => redirectToPostPage(e)}
        direction="column"
        className={styles.BlogPost}
        innerRef={postRef}
      >
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

            <div ref={shareRef}>
              <Share
                url={`${window.location.href}/${id}`}
                type={ShareTypes.RED}
              />
            </div>
          </Flex>
        </Flex>
      </Flex>
    );
  }
);
