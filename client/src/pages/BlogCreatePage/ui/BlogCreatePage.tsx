import "./BlogCreatePage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import { memo } from "react";
import { BlogCreatePageMain } from "@/app/layouts/BaseLayout/ui/pageWrappers/BlogCreatePageMain";

export const BlogCreatePage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("BlogCreatePage");
    document.title = `TeleWorks | Создание поста`;
  }, []);

  return <BlogCreatePageMain />;
});
BlogCreatePage.displayName = "BlogCreatePage";
