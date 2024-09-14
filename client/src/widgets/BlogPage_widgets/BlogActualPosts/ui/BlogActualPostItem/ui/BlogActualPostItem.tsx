import styles from "./BlogActualPostItem.module.scss";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { BlogActualPostItemProps } from "../model/BlogActualPostItem_types";
import { Flex } from "@/shared/ui-kit/Stack";
import { TransformDateToString } from "@/shared/utils/TransformDateToString/TransformDateToString";
import LikeSVG from "@/shared/assets/icons/Global/LikeSVG.svg?react";
import PostCommentsSVG from "@/shared/assets/icons/Global/PostCommentsSVG.svg?react";
import BookmarkSVG from "@/shared/assets/icons/Global/BookmarkSVG.svg?react";
import { useNavigate } from "react-router-dom";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";

export const BlogActualPostItem: React.FC<BlogActualPostItemProps> = memo(
  ({
    userImgURL,
    username,
    postDate,
    postTitle,
    likesAmount,
    commentsAmount,
    id,
  }): React.JSX.Element => {
    // Стейт для того, чтобы пост в закладки добавлять
    const [postIsAddedToBookmark, setPostIsAddedToBookmark] =
      useState<boolean>(false);

    // Навешивание ховера и редирект на страницу поста
    const actualPostRef = useRef<HTMLDivElement>(null);
    const bookmarkIconRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const redirectToPostPage = useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        const eTarget: HTMLDivElement = e.target as HTMLDivElement;

        if (
          bookmarkIconRef.current != eTarget.parentElement?.parentElement &&
          bookmarkIconRef.current !=
            eTarget.parentElement?.parentElement?.parentElement
        ) {
          navigate(`${id}`);
        }
      },
      [id, navigate]
    );

    const postMouseoverEvent = useCallback((e: MouseEvent): void => {
      const eTarget: HTMLDivElement = e.target as HTMLDivElement;

      if (
        bookmarkIconRef.current == eTarget.parentElement?.parentElement ||
        bookmarkIconRef.current ==
          eTarget.parentElement?.parentElement?.parentElement
      ) {
        actualPostRef.current!.classList.remove(
          styles.BlogActualPostItem__hover
        );
        return;
      }

      actualPostRef.current!.classList.add(styles.BlogActualPostItem__hover);
    }, []);

    const postMouseoutEvent = useCallback((): void => {
      if (actualPostRef.current)
        actualPostRef.current.classList.remove(
          styles.BlogActualPostItem__hover
        );
    }, []);

    useEffect(() => {
      const postRefCurrent = actualPostRef.current!;

      postRefCurrent.addEventListener("mouseover", postMouseoverEvent);

      postRefCurrent.addEventListener("mouseout", postMouseoutEvent);

      return () => {
        postRefCurrent.removeEventListener("mouseover", postMouseoverEvent);

        postRefCurrent.removeEventListener("mouseout", postMouseoutEvent);
      };
    }, [postMouseoutEvent, postMouseoverEvent]);

    return (
      <div
        onClick={redirectToPostPage}
        className={styles.BlogActualPostItem}
        ref={actualPostRef}
      >
        <Flex direction="column" justify="between">
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

            <div
              ref={bookmarkIconRef}
              onClick={() => setPostIsAddedToBookmark(!postIsAddedToBookmark)}
            >
              <IncreaseScaleHover>
                <BookmarkSVG
                  className={`${styles.BlogActualPostItem__bookmark} ${postIsAddedToBookmark ? styles.BlogActualPostItem__bookmark__active : ""}`}
                />
              </IncreaseScaleHover>
            </div>
          </Flex>
        </Flex>
      </div>
    );
  }
);
