import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogPostIsCreated.module.scss";
import { memo, useContext, useEffect, useState } from "react";
import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import { BlogCreatePageContext } from "@/pages/BlogCreatePage";

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
          align="center"
          justify="center"
          className={`${styles.BlogPostIsCreated} Page__GrayBorderWithWhiteBGWrapper
          ${IsAppear ? styles.BlogPostIsCreated__appear : ""}`}
        >
          <img
            className={styles.BlogPostIsCreated__img}
            src={`${URL_PART}/BlogPage/PostIsPublished_img.jpg`}
            alt="Пост опубликован"
          />
        </Flex>
      )}
    </>
  );
});
