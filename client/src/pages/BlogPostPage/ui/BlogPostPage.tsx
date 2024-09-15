import { BlogPageContext } from "@/pages/BlogPage/model/BlogPageContext";
import "./BlogPostPage.scss";
import "@/shared/main.scss";
import { useEffect, useState } from "react";
import { memo } from "react";
import {
  BlogFilter,
  BlogFilterAllCategories,
  blogFilterCategoryTitles,
} from "@/widgets/Global_widgets/BlogFilter";
import { Flex } from "@/shared/ui-kit/Stack";
import { NotFoundContainer } from "@/widgets/NotFound_widgets/NotFoundContainer";
import { isNumber } from "@/shared/utils/IsNumber";
import { useParams } from "react-router-dom";
import { BlogOpenPost } from "@/widgets/BlogPostPage_widgets/BlogOpenPost";

export const BlogPostPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("BlogPostPage");
  }, []);

  // Создание стейта для контекста и филтера
  const [blogFilterSelectedCategory, setBlogFilterSelectedCategory] =
    useState<BlogFilterAllCategories>(
      blogFilterCategoryTitles[0] as keyof typeof blogFilterCategoryTitles
    );

  // Получение id страницы
  const { id } = useParams<{ id: string }>();

  return (
    <BlogPageContext.Provider
      value={{ blogFilterSelectedCategory, setBlogFilterSelectedCategory }}
    >
      <main className="Page BlogPostPage__main">
        <div className="padding">
          {id && isNumber(id) ? (
            <div className="BlogPostPage__container">
              <BlogFilter
                selectedCategory={blogFilterSelectedCategory}
                setSelectedCategory={setBlogFilterSelectedCategory}
                canReturn
              />

              <Flex
                className="BlogPostPage__mainWrapper"
                direction="column"
                gap="20"
              >
                <BlogOpenPost id={Number(id)} />
              </Flex>
            </div>
          ) : (
            <NotFoundContainer />
          )}
        </div>
      </main>
    </BlogPageContext.Provider>
  );
});
