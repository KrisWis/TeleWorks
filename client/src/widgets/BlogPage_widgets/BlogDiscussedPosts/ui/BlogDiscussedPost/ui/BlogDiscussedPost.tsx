import styles from "./BlogDiscussedPost.module.scss";
import { memo } from "react";
import { BlogDiscussedPostProps } from "../model/BlogDiscussedPost_types";
import { Flex } from "@/shared/ui-kit/Stack";
import DiscussedWhiteElipseSVG from "@/shared/assets/icons/BlogPage/DiscussedWhiteElipseSVG.svg?react";
import DiscussedGrayElipseSVG from "@/shared/assets/icons/BlogPage/DiscussedGrayElipseSVG.svg?react";
import DiscussedBlackElipseSVG from "@/shared/assets/icons/BlogPage/DiscussedBlackElipseSVG.svg?react";
import PostCommentsSVG from "@/shared/assets/icons/Global/PostCommentsSVG.svg?react";
import { Link } from "react-router-dom";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";

export const BlogDiscussedPost: React.FC<BlogDiscussedPostProps> = memo(
  ({ title, commentsAmount, id }): React.JSX.Element => {
    return (
      <IncreaseScaleHover>
        <Link to={`${id}`}>
          <Flex direction="column" gap="5" className={styles.BlogDiscussedPost}>
            <span className={styles.BlogDiscussedPost__title}>{title}</span>

            <Flex align="center">
              <Flex align="center">
                <DiscussedWhiteElipseSVG />

                <DiscussedGrayElipseSVG
                  className={styles.BlogDiscussedPost__elipse}
                />

                <DiscussedBlackElipseSVG
                  className={styles.BlogDiscussedPost__elipse__third}
                />
              </Flex>

              <Flex align="center" gap="3">
                <PostCommentsSVG
                  className={styles.BlogDiscussedPost__commentsSvg}
                />

                <span className={styles.BlogDiscussedPost__commentsAmount}>
                  {commentsAmount}
                </span>
              </Flex>
            </Flex>
          </Flex>
        </Link>
      </IncreaseScaleHover>
    );
  }
);
