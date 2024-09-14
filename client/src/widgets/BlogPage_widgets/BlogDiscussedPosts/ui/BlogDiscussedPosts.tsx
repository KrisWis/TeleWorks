import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogDiscussedPosts.module.scss";
import { memo } from "react";
import { blogDiscussedPosts } from "../model/BlogDiscussedPosts_data";
import { BlogDiscussedPost } from "./BlogDiscussedPost/ui/BlogDiscussedPost";

export const BlogDiscussedPosts: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex direction="column" className={styles.BlogDiscussedPosts}>
      <h6 className="BlogPage__minicaption">Обсуждаемое</h6>

      <div className={styles.BlogDiscussedPosts__items}>
        {blogDiscussedPosts.map((post) => (
          <BlogDiscussedPost key={post.id} {...post} />
        ))}
      </div>
    </Flex>
  );
});
