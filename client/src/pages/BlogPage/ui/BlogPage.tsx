import "./BlogPage.scss";
import "@/shared/main.scss";
import {
  BlogFilter,
  BlogFilterAllCategories,
  blogFilterCategoryTitles,
} from "@/widgets/Global_widgets/BlogFilter";
import { useEffect, useState } from "react";
import { memo } from "react";
import { BlogPageContext } from "../model/BlogPageContext";
import { Flex } from "@/shared/ui-kit/Stack";
import { BlogActualPosts } from "@/widgets/BlogPage_widgets/BlogActualPosts";
import { blogPopularPosts, blogPostItems } from "../model/BlogPage_data";
import { BlogPost } from "@/widgets/BlogPage_widgets/BlogPost";
import { BlogForReaders } from "@/widgets/BlogPage_widgets/BlogForReaders";
import { BlogADSBlock } from "@/widgets/BlogPage_widgets/BlogADSBlock";
import { BlogDiscussedPosts } from "@/widgets/BlogPage_widgets/BlogDiscussedPosts";
import { BlogPopularPosts } from "@/widgets/BlogPage_widgets/BlogPopularPosts";

export const BlogPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("BlogPage");
  }, []);

  // Создание стейта для контекста и филтера
  const [blogFilterSelectedCategory, setBlogFilterSelectedCategory] =
    useState<BlogFilterAllCategories>(
      blogFilterCategoryTitles[0] as keyof typeof blogFilterCategoryTitles
    );

  return (
    <BlogPageContext.Provider
      value={{ blogFilterSelectedCategory, setBlogFilterSelectedCategory }}
    >
      <main className="Page BlogPage__main">
        <div className="padding">
          <div className="BlogPage__container">
            <BlogFilter
              selectedCategory={blogFilterSelectedCategory}
              setSelectedCategory={setBlogFilterSelectedCategory}
            />

            <Flex className="BlogPage__mainWrapper" direction="column" gap="20">
              <BlogActualPosts />

              <div className="BlogPage__items">
                {blogPostItems.slice(0, 4).map((post) => (
                  <BlogPost key={post.id} {...post} />
                ))}
              </div>

              <BlogForReaders />

              <div className="BlogPage__items">
                {blogPostItems.slice(4, 8).map((post) => (
                  <BlogPost key={post.id} {...post} />
                ))}
              </div>

              <BlogADSBlock />

              <BlogDiscussedPosts />

              <BlogPopularPosts blogPopularPosts={blogPopularPosts} />
            </Flex>
          </div>
        </div>
      </main>
    </BlogPageContext.Provider>
  );
});