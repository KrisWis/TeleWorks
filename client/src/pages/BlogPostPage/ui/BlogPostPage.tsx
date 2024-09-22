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
import { BlogOpenPostComments } from "@/widgets/BlogPostPage_widgets/BlogOpenPostComments";
import { blogCommentsExample } from "../model/BlogPostPage_data";
import {
  BlogPostComment,
  BlogPostCommentInterface,
} from "@/widgets/BlogPostPage_widgets/BlogOpenPostComments/ui/BlogPostComment";
import { LoadMore } from "@/shared/ui-kit/LoadMore";
import { ButtonTypes } from "@/shared/ui-kit/Button";
import { BlogPostPageContext } from "../model/BlogPostPageContext";
import { BlogPopularPosts } from "@/widgets/BlogPage_widgets/BlogPopularPosts";
import { blogPopularPosts } from "@/pages/BlogPage/model/BlogPage_data";
import { PortNow } from "@/app/layouts/BaseLayout/model/BaseLayout__data";

export const BlogPostPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("BlogPostPage");
  }, []);

  // Создание стейта для контекста, фильтра и отвечаемого комментария
  const [blogFilterSelectedCategory, setBlogFilterSelectedCategory] =
    useState<BlogFilterAllCategories>(
      blogFilterCategoryTitles[0] as keyof typeof blogFilterCategoryTitles
    );

  // Получение id страницы
  const { id } = useParams<{ id: string }>();

  const [answeredComment, setAnsweredComment] =
    useState<BlogPostCommentInterface | null>(null);

  return (
    <BlogPostPageContext.Provider
      value={{
        answeredComment: answeredComment,
        setAnsweredComment: setAnsweredComment,
      }}
    >
      <main className="Page BlogPostPage__main">
        <div className="padding">
          {(id && isNumber(id)) || PortNow == "6007" ? (
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

                <BlogOpenPostComments />

                <Flex gap="10" direction="column">
                  {blogCommentsExample.map((comment) => {
                    return (
                      <BlogPostComment
                        key={comment.commentInfo.id}
                        {...comment}
                        isAnswer={false}
                      />
                    );
                  })}

                  <LoadMore
                    className="BlogPostPage__LoadmoreComments"
                    type={ButtonTypes.RED}
                  />
                </Flex>

                <BlogPopularPosts blogPopularPosts={blogPopularPosts} />
              </Flex>
            </div>
          ) : (
            <NotFoundContainer />
          )}
        </div>
      </main>
    </BlogPostPageContext.Provider>
  );
});
