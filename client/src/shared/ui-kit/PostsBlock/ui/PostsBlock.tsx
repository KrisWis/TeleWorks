import styles from "./PostsBlock.module.scss";
import { memo } from "react";
import { PostsBlockProps } from "../model/PostsBlock_types";
import { URL_PART } from "@/shared/const/app";

export const PostsBlock: React.FC<PostsBlockProps> = memo(
  ({ postsAmount }): React.JSX.Element => {
    return (
      <div className={styles.PostsBlock}>
        <img
          className={styles.PostsBlock__img}
          src={`${URL_PART}/TelegramChannelPage/icons/TelegramChannel__footer/posts.png`}
          alt="Иконка постов"
        />
        <h3 className={styles.PostsBlock__caption}>Постов</h3>
        <span className={styles.PostsBlock__desc}>{postsAmount}</span>
      </div>
    );
  },
);
PostsBlock.displayName = "PostsBlock";
