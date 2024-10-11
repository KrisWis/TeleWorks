import "./BlogCreatePage.scss";
import "@/shared/main.scss";
import { useEffect, useState } from "react";
import { memo } from "react";
import {
  BlogFilter,
  BlogFilterAllCategories,
  blogFilterCategoryTitles,
} from "@/widgets/Global_widgets/BlogFilter";
import { Flex } from "@/shared/ui-kit/Stack";
import { BlogCreatePageContainer } from "@/widgets/BlogCreatePage_widgets/BlogCreatePageContainer";
import {
  BlogCreatePageContext,
  BlogCreatePagePostTypes,
  CreatePostProgressSteps,
} from "../model/BlogCreatePageContext";
import { BlogPostIsCreated } from "@/widgets/BlogCreatePage_widgets/BlogPostIsCreated";
import { mobile_mediaQuery } from "@/app";
import { TransitionBetweenBlocks } from "@/shared/ui-kit/TransitionBetweenBlocks";
import { transitionDurationMedium } from "@/app/layouts/BaseLayout/model/BaseLayout__data";

export const BlogCreatePage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("BlogCreatePage");
  }, []);

  // Создание стейта для фильтра
  const [blogFilterSelectedCategory, setBlogFilterSelectedCategory] =
    useState<BlogFilterAllCategories>(
      blogFilterCategoryTitles[0] as keyof typeof blogFilterCategoryTitles
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
              top: mobile_mediaQuery.matches ? 25 : 30,
            }}
            id="BlogPostIsCreated"
          ></div>

          <Flex max className="BlogCreatePage__contentWrapper">
            <TransitionBetweenBlocks
              blocks={[
                {
                  component: (
                    <div className={"BlogCreatePage__container"}>
                      <BlogFilter
                        selectedCategory={blogFilterSelectedCategory}
                        setSelectedCategory={setBlogFilterSelectedCategory}
                        canReturn
                      />

                      <Flex
                        className="BlogCreatePage__mainWrapper"
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
