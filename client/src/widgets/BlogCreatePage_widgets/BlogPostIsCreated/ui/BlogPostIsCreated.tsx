import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogPostIsCreated.module.scss";
import { memo, useContext, useEffect, useState } from "react";
import {
  mobile_mediaQuery,
  URL_PART,
} from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import { BlogCreatePageContext } from "@/pages/BlogCreatePage";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { AppRoutes } from "@/app/routes/AppRoutes";

export const BlogPostIsCreated: React.FC = memo((): React.JSX.Element => {
  const { CreatePostActiveStep } = useContext(BlogCreatePageContext);

  const [IsVisible, setIsVisible] = useState<boolean>(false);

  const [IsAppear, setIsAppear] = useState<boolean>(false);

  useEffect(() => {
    if (CreatePostActiveStep == "Заказ создан") {
      setIsVisible(true);

      setTimeout(() => {
        setIsAppear(true);
      }, 700);
    }
  }, [CreatePostActiveStep]);

  return (
    <>
      {IsVisible && (
        <Flex
          max
          gap="20"
          align="center"
          justify="center"
          direction="column"
          className={`${styles.BlogPostIsCreated} Page__GrayBorderWithWhiteBGWrapper
          ${IsAppear ? styles.BlogPostIsCreated__appear : ""}`}
        >
          <img
            className={styles.BlogPostIsCreated__img}
            src={`${URL_PART}/BlogPage/PostIsPublished_img.jpg`}
            alt="Пост опубликован"
          />

          <h1 className={styles.BlogPostIsCreated__caption}>
            Пост опубликован!
          </h1>

          <p className={styles.BlogPostIsCreated__desc}>
            Пост будет отображаться в вашем профиле, прочая дополнительная,
            полезная информация или какое-то предупреждение
          </p>

          <Flex align="center" gap={mobile_mediaQuery.matches ? "10" : "15"}>
            <Button
              className={styles.BlogPostIsCreated__button}
              to={AppRoutes.BLOG}
              type={ButtonTypes.BLUE}
              text="На главную"
            />

            <Button
              className={styles.BlogPostIsCreated__button}
              to={AppRoutes.USER}
              type={ButtonTypes.RED}
              text="В профиль"
            />
          </Flex>
        </Flex>
      )}
    </>
  );
});
