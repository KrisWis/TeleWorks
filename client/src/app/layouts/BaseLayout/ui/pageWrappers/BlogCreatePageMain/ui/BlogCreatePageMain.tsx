import {
  tabletHeight_mediaQuery,
  transitionDurationMedium,
} from "@/shared/const/global";
import { Flex } from "@/shared/lib/Stack";
import {
  BlogFilterAllCategories,
  blogFilterCategoryTitles,
  BlogFilter,
} from "@/features/Global_features/BlogFilter";
import { BlogCreatePageContainer } from "@/widgets/BlogCreatePage_widgets/BlogCreatePageContainer";
import { BlogPostIsCreated } from "@/widgets/BlogCreatePage_widgets/BlogPostIsCreated";
import {
  BlogCreatePagePostTypes,
  CreatePostProgressSteps,
  BlogCreatePageContext,
} from "../model/BlogCreatePageContext";
import styles from "./BlogCreatePageMain.module.scss";
import { memo, useState } from "react";
import { TransitionBetweenBlocks } from "@/shared/lib/TransitionBetweenBlocks";

export const BlogCreatePageMain: React.FC = memo((): React.JSX.Element => {
  // Создание стейта для фильтра
  const [blogFilterSelectedCategory, setBlogFilterSelectedCategory] =
    useState<BlogFilterAllCategories>(
      blogFilterCategoryTitles[0] as keyof typeof blogFilterCategoryTitles,
    );

  // Создание стейта для выбора типа поста
  const [selectedPostType, setSelectedPostType] =
    useState<BlogCreatePagePostTypes>("Пост");

  // Функционал переключения с блока создания заказа и на блок, когда заказ уже создан
  const [CreatePostActiveStep, setCreatePostActiveStep] =
    useState<CreatePostProgressSteps>("Создание поста");

  return (
    <BlogCreatePageContext.Provider
      value={{
        selectedPostType,
        setSelectedPostType,
        CreatePostActiveStep,
        setCreatePostActiveStep,
      }}
    >
      <main className="Page BlogCreatePage__main">
        <div className="padding">
          <div
            style={{
              opacity: 0,
              position: "absolute",
              top: tabletHeight_mediaQuery.matches ? "50vh" : "0",
            }}
            id="BlogPostIsCreated"
          ></div>

          <Flex max className={styles.BlogCreatePageMain__contentWrapper}>
            <TransitionBetweenBlocks
              className={styles.BlogCreatePageMain__contentWrapper}
              defaultIsMounted
              blocks={[
                {
                  component: (
                    <div className={styles.BlogCreatePageMain__container}>
                      <BlogFilter
                        selectedCategory={blogFilterSelectedCategory}
                        setSelectedCategory={setBlogFilterSelectedCategory}
                        canReturn
                      />

                      <Flex
                        className={styles.BlogCreatePageMain__mainWrapper}
                        direction="column"
                        gap="20"
                      >
                        <BlogCreatePageContainer />
                      </Flex>
                    </div>
                  ),
                  condition: CreatePostActiveStep == "Создание поста",
                  id: 0,
                },
                {
                  component: <BlogPostIsCreated />,
                  condition: CreatePostActiveStep == "Пост создан",
                  id: 1,
                },
              ]}
              transitionDuration={transitionDurationMedium}
              defaultIndex={0}
            />
          </Flex>
        </div>
      </main>
    </BlogCreatePageContext.Provider>
  );
});
BlogCreatePageMain.displayName = "BlogCreatePageMain";
