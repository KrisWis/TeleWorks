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
} from "../model/BlogCreatePageContext";

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

  return (
    <BlogCreatePageContext.Provider
      value={{ selectedPostType, setSelectedPostType }}
    >
      <main className="Page BlogCreatePage__main">
        <div className="padding">
          <div className="BlogCreatePage__container">
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
        </div>
      </main>
    </BlogCreatePageContext.Provider>
  );
});
