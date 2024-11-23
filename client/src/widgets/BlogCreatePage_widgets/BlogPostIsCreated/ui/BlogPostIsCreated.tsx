import { Flex } from "@/shared/lib/Stack";
import styles from "./BlogPostIsCreated.module.scss";
import { memo } from "react";
import { mobile_mediaQuery } from "@/shared/const/global";
import { URL_PART } from "@/shared/const/app";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { AppRoutes } from "@/shared/const/app";

export const BlogPostIsCreated: React.FC = memo((): React.JSX.Element => {
  return (
    <>
      <Flex
        max
        gap="20"
        align="center"
        justify="center"
        direction="column"
        className={`${styles.BlogPostIsCreated} Page__GrayBorderWithWhiteBGWrapper`}
      >
        <img
          className={styles.BlogPostIsCreated__img}
          src={`${URL_PART}/BlogPage/PostIsPublished_img.jpg`}
          alt="Пост опубликован"
        />

        <h1 className={styles.BlogPostIsCreated__caption}>Пост опубликован!</h1>

        <p className={styles.BlogPostIsCreated__desc}>
          Пост будет отображаться в вашем профиле, прочая дополнительная,
          полезная информация или какое-то предупреждение
        </p>

        <Flex align="center" gap={mobile_mediaQuery.matches ? "10" : "15"}>
          <Button
            className={styles.BlogPostIsCreated__button}
            to={AppRoutes.BLOG()}
            type={ButtonTypes.BLUE}
            text="На главную"
          />

          <Button
            className={styles.BlogPostIsCreated__button}
            to={AppRoutes.USER()}
            type={ButtonTypes.RED}
            text="В профиль"
          />
        </Flex>
      </Flex>
    </>
  );
});
BlogPostIsCreated.displayName = "BlogPostIsCreated";
