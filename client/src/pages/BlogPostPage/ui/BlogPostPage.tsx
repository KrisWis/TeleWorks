import "./BlogPostPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import { memo } from "react";
import { BlogOpenPostPageContainer } from "@/app/layouts/BaseLayout/ui/pageWrappers/BlogOpenPostPageContainer";

export const BlogPostPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("BlogPostPage");
    document.title = `TeleWorks | Название поста`;
  }, []);

  return <BlogOpenPostPageContainer />;
});
BlogPostPage.displayName = "BlogPostPage";
