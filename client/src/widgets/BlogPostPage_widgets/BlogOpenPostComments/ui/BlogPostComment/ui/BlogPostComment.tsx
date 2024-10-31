import styles from "./BlogPostComment.module.scss";
import { memo, useCallback, useContext, useState } from "react";
import { BlogPostCommentProps } from "@/shared/types/blog";
import { Flex } from "@/shared/ui-kit/Stack";
import { Avatar, AvatarSizes } from "@/shared/ui-kit/Avatar";
import { TransformDateToString } from "@/shared/utils/TransformDateToString/TransformDateToString";
import { TextUnderlineHover } from "@/shared/ui-kit/TextUnderlineHover";
import LikeSecondarySVG from "@/shared/assets/icons/Global/LikeSecondarySVG.svg?react";
import DislikeSVG from "@/shared/assets/icons/Global/DislikeSVG.svg?react";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";
import { mobile_mediaQuery } from "@/shared/const/global";
import { BlogPostPageContext } from "@/widgets/BlogPostPage_widgets/BlogOpenPostPageContainer";

export const BlogPostComment: React.FC<BlogPostCommentProps> = memo(
  ({ answers, commentInfo, isAnswer }): React.JSX.Element => {
    // Функционал рендера ответов на комментарий
    const nestedComments = (answers || []).map((answer) => {
      return (
        <BlogPostComment
          key={answer.commentInfo.id}
          {...answer}
          isAnswer={true}
        />
      );
    });

    // Функционал нажатия на лайк и дизлайк
    const [commentIsLiked, setCommentIsLiked] = useState<boolean>(false);

    const [commentIsDisliked, setCommentIsDisliked] = useState<boolean>(false);

    // Функционал нажатия на кнопку "Ответить"
    const { setAnsweredComment } = useContext(BlogPostPageContext);

    const clickOnAnswerButton = useCallback(() => {
      setAnsweredComment(commentInfo);
      document
        .getElementById("BlogOpenPostComments")
        ?.scrollIntoView({ behavior: "smooth" });
    }, [commentInfo, setAnsweredComment]);

    return (
      <Flex
        max
        direction="column"
        className={`${styles.BlogPostComment} ${isAnswer ? styles.BlogPostComment__answer : ""}`}
      >
        <Flex max justify="between" align="center">
          <Flex gap={mobile_mediaQuery.matches ? "5" : "10"} align="center">
            <Avatar
              imgURL={commentInfo.authorImgURL}
              imgSize={AvatarSizes.SMALLER}
            />

            <span className={styles.BlogPostComment__authorName}>
              {commentInfo.authorName}
            </span>
          </Flex>

          <span className={styles.BlogPostComment__createdDate}>
            {TransformDateToString(commentInfo.createdDate)}
          </span>
        </Flex>

        <Flex
          className={styles.BlogPostComment__block}
          direction="column"
          gap={mobile_mediaQuery.matches ? "0" : "15"}
        >
          <p className={styles.BlogPostComment__text}>{commentInfo.text}</p>

          <Flex gap={mobile_mediaQuery.matches ? "5" : "15"} align="center">
            <TextUnderlineHover
              className={styles.BlogPostComment__answerButton}
            >
              <span onClick={clickOnAnswerButton}>Ответить</span>
            </TextUnderlineHover>

            <Flex align="center" gap="3">
              <IncreaseScaleHover
                onClick={() => setCommentIsLiked(!commentIsLiked)}
                className={`${styles.BlogPostComment__amount__icon} ${commentIsLiked ? styles.BlogPostComment__amount__icon__active : ""}`}
              >
                <LikeSecondarySVG />
              </IncreaseScaleHover>

              <span className={styles.BlogPostComment__amount}>
                {commentInfo.likesAmount}
              </span>
            </Flex>

            <Flex
              align="center"
              className={styles.BlogPostComment__dislike}
              gap="3"
            >
              <IncreaseScaleHover
                onClick={() => setCommentIsDisliked(!commentIsDisliked)}
                className={`${styles.BlogPostComment__amount__icon} ${commentIsDisliked ? styles.BlogPostComment__amount__icon__active : ""}`}
              >
                <DislikeSVG />
              </IncreaseScaleHover>

              <span className={styles.BlogPostComment__amount}>
                {commentInfo.dislikesAmount}
              </span>
            </Flex>
          </Flex>
        </Flex>

        {nestedComments}
      </Flex>
    );
  }
);
