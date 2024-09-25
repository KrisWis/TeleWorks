import "./BlogCreatePage.scss";
import "@/shared/main.scss";
import { useEffect, useRef, useState } from "react";
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
    useState<CreatePostProgressSteps>("Создание заказа");

  const [IsVisible, setIsVisible] = useState<boolean>(true);

  const isVisibleTimeOutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (CreatePostActiveStep == "Заказ создан") {
      isVisibleTimeOutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 700);
    }
  }, [CreatePostActiveStep]);

  useEffect(() => {
    return () => {
      clearTimeout(isVisibleTimeOutRef.current);
    };
  }, []);

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
          <div className="Page__contentWrapper">
            <>
              {IsVisible && (
                <div
                  className={`${"BlogCreatePage__container"} 
      ${CreatePostActiveStep == "Заказ создан" ? "BlogCreatePage__container__disappear" : ""}`}
                >
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
              )}
            </>

            <BlogPostIsCreated />
          </div>
        </div>
      </main>
    </BlogCreatePageContext.Provider>
  );
});
