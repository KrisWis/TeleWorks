import { PortNow } from "@/shared/const/app";
import { blogCommentsExample, blogPopularPosts } from "@/shared/mockData";
import { ButtonTypes } from "@/shared/ui-kit/Button";
import { LoadMore } from "@/shared/ui-kit/LoadMore";
import { Flex } from "@/shared/lib/Stack";
import { BlogPopularPosts } from "@/widgets/BlogPage_widgets/BlogPopularPosts";
import {
  BlogFilterAllCategories,
  blogFilterCategoryTitles,
  BlogFilter,
} from "@/features/Global_features/BlogFilter";
import { NotFoundContainer } from "@/shared/ui-kit/NotFoundContainer";
import { useParams } from "react-router-dom";
import {
  BlogOpenPostComments,
  BlogPostComment,
} from "@/widgets/BlogPostPage_widgets/BlogOpenPostComments";
import { BlogPostPageContext } from "../model/BlogPostPageContext";
import styles from "./BlogOpenPostPageContainer.module.scss";
import { memo, useState } from "react";
import { isNumber } from "@/shared/utils/IsNumber";
import { BlogPostCommentInterface } from "@/shared/types/blog";
import { BlogOpenPost } from "@/widgets/BlogPostPage_widgets/BlogOpenPost";

export const BlogOpenPostPageContainer: React.FC = memo(
  (): React.JSX.Element => {
    // Создание стейта для контекста, фильтра и отвечаемого комментария
    const [blogFilterSelectedCategory, setBlogFilterSelectedCategory] =
      useState<BlogFilterAllCategories>(
        blogFilterCategoryTitles[0] as keyof typeof blogFilterCategoryTitles,
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
              <div className={styles.BlogOpenPostPageContainer__container}>
                <BlogFilter
                  selectedCategory={blogFilterSelectedCategory}
                  setSelectedCategory={setBlogFilterSelectedCategory}
                  canReturn
                />

                <Flex
                  className={styles.BlogOpenPostPageContainer__mainWrapper}
                  direction="column"
                  gap="20"
                >
                  <BlogOpenPost id={Number(id)} />

                  <BlogOpenPostComments id={id!} />

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
                      className={
                        styles.BlogOpenPostPageContainer__LoadmoreComments
                      }
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
  },
);
BlogOpenPostPageContainer.displayName = "BlogOpenPostPageContainer";
