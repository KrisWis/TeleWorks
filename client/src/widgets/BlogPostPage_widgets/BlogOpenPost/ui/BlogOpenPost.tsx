import { Flex } from "@/shared/lib/Stack";
import styles from "./BlogOpenPost.module.scss";
import { memo, useState } from "react";
import { BlogOpenPostProps } from "../model/BlogOpenPost_types";
import { blogOpenPostExample } from "../model/BlogOpenPost_data";
import { TransformDateToString } from "@/shared/utils/TransformDateToString/TransformDateToString";
import BookmarkSVG from "@/shared/assets/icons/Global/BookmarkSVG.svg?react";
import LikeSVG from "@/shared/assets/icons/Global/LikeSVG.svg?react";
import LikeSecondarySVG from "@/shared/assets/icons/Global/LikeSecondarySVG.svg?react";
import ViewsSVG from "@/shared/assets/icons/Global/ViewsSVG.svg?react";
import PostCommentsSVG from "@/shared/assets/icons/Global/PostCommentsSVG.svg?react";
import { Share, ShareTypes } from "@/shared/ui-kit/Share";
import { Avatar, AvatarSizes } from "@/shared/ui-kit/Avatar";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import parse from "html-react-parser";
import { IncreaseScaleHover } from "@/shared/lib/IncreaseScaleHover";
import { mobile_mediaQuery } from "@/shared/const/global";
import { PortNow } from "@/shared/const/app";

export const BlogOpenPost: React.FC<BlogOpenPostProps> = memo(
  (): React.JSX.Element => {
    /* Функционал добавления в закладки */
    const [isAddedToBookmarks, setIsAddedToBookmarks] =
      useState<boolean>(false);

    /* Функционал добавления автора в подписки */
    const [userIsSubscribed, setUserIsSubscribed] = useState<boolean>(false);

    // Функционал нажатия на лайк на посте
    const [postIsLiked, setPostIsLiked] = useState<boolean>(false);

    return (
      <Flex
        max
        direction="column"
        gap={`${mobile_mediaQuery.matches ? "10" : "15"}`}
      >
        <Flex
          direction="column"
          gap={`${mobile_mediaQuery.matches ? "5" : "10"}`}
          max
          className={`${styles.BlogOpenPost} Page__GrayBorderWithWhiteBGWrapper`}
        >
          <Flex max align="center" justify="between">
            <span className={styles.BlogOpenPost__theme}>
              {blogOpenPostExample.theme}
            </span>

            <Flex
              align="center"
              gap={`${mobile_mediaQuery.matches ? "5" : "15"}`}
            >
              <span className={styles.BlogOpenPost__date}>
                {TransformDateToString(blogOpenPostExample.date, false)}
              </span>

              <div onClick={() => setIsAddedToBookmarks(!isAddedToBookmarks)}>
                <BookmarkSVG
                  className={`${styles.BlogOpenPost__bookmark} ${isAddedToBookmarks ? styles.BlogOpenPost__bookmark__active : ""}`}
                />
              </div>

              <Share
                IconClassName={styles.BlogOpenPost__share}
                url={`${window.location.href}`}
                type={ShareTypes.RED}
              />
            </Flex>
          </Flex>

          <h3 className={styles.BlogOpenPost__title}>
            <pre>{blogOpenPostExample.title}</pre>
          </h3>

          <Flex
            align="center"
            gap={`${mobile_mediaQuery.matches ? "5" : "15"}`}
          >
            <Flex gap={`${mobile_mediaQuery.matches ? "0" : "3"}`}>
              <ViewsSVG
                className={`${styles.BlogOpenPost__amount__svg} ${styles.BlogOpenPost__amount__svg__gray}`}
              />
              <span className={styles.BlogOpenPost__amount}>
                {blogOpenPostExample.viewsAmount}
              </span>
            </Flex>

            <Flex gap={`${mobile_mediaQuery.matches ? "0" : "3"}`}>
              <LikeSVG
                className={`${styles.BlogOpenPost__amount__svg} ${styles.BlogOpenPost__amount__svg__stroke}`}
              />
              <span className={styles.BlogOpenPost__amount}>
                {blogOpenPostExample.likesAmount}
              </span>
            </Flex>

            <Flex gap={`${mobile_mediaQuery.matches ? "0" : "3"}`}>
              <PostCommentsSVG
                className={`${styles.BlogOpenPost__amount__svg} ${styles.BlogOpenPost__amount__svg__stroke}`}
              />
              <span className={styles.BlogOpenPost__amount}>
                {blogOpenPostExample.commentsAmount}
              </span>
            </Flex>
          </Flex>

          <img
            className={`${styles.BlogOpenPost__postImgURL} 
            ${PortNow == "6007" ? styles.BlogOpenPost__postImgURL__storybook : ""}`}
            src={blogOpenPostExample.postImgURL}
            alt="Изображение поста"
          />

          <Flex max justify="between" align="center">
            <Flex
              align="center"
              gap={`${mobile_mediaQuery.matches ? "5" : "10"}`}
            >
              <Avatar
                imgURL={blogOpenPostExample.authorImgURL}
                imgSize={AvatarSizes.SMALL}
              />

              <Flex direction="column" gap="3">
                <span className={styles.BlogOpenPost__authorName}>
                  {blogOpenPostExample.authorName}
                </span>

                <span className={styles.BlogOpenPost__authorCategory}>
                  {blogOpenPostExample.authorCategory}
                </span>
              </Flex>
            </Flex>

            <Button
              onClick={() => setUserIsSubscribed(!userIsSubscribed)}
              className={styles.BlogOpenPost__subscribeButton}
              text={!userIsSubscribed ? "Подписаться" : "Подписан"}
              type={!userIsSubscribed ? ButtonTypes.CYAN : ButtonTypes.BLACK}
            />
          </Flex>

          <p className={styles.BlogOpenPost__text}>
            {parse(blogOpenPostExample.text)}
          </p>
        </Flex>

        <Flex max align="center" justify="between">
          <Flex
            className={styles.BlogOpenPost__tags}
            align="center"
            gap={`${mobile_mediaQuery.matches ? "5" : "15"}`}
          >
            {blogOpenPostExample.tags.map((tag) => (
              <Flex
                key={tag}
                className={`${styles.BlogOpenPost__tag} Page__SirineWrapper`}
                align="center"
                justify="center"
              >
                {tag}
              </Flex>
            ))}
          </Flex>

          <Flex
            align="center"
            gap={`${mobile_mediaQuery.matches ? "5" : "20"}`}
          >
            <Flex gap={`${mobile_mediaQuery.matches ? "0" : "3"}`}>
              <IncreaseScaleHover
                onClick={() => setPostIsLiked(!postIsLiked)}
                className={`${styles.BlogOpenPost__footer__amount__svg} 
                ${postIsLiked ? styles.BlogOpenPost__footer__amount__svg__active : ""}`}
              >
                <LikeSecondarySVG />
              </IncreaseScaleHover>
              <span className={styles.BlogOpenPost__footer__amount}>
                {blogOpenPostExample.likesAmount}
              </span>
            </Flex>

            <Flex gap={`${mobile_mediaQuery.matches ? "0" : "3"}`}>
              <PostCommentsSVG
                className={`${styles.BlogOpenPost__footer__amount__svg} ${styles.BlogOpenPost__amount__svg__stroke}`}
              />
              <span className={styles.BlogOpenPost__footer__amount}>
                {blogOpenPostExample.commentsAmount}
              </span>
            </Flex>

            <Share url={`${window.location.href}`} type={ShareTypes.RED} />
          </Flex>
        </Flex>
      </Flex>
    );
  }
);
