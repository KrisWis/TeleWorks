import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogActualPosts.module.scss";
import { memo } from "react";

export const BlogActualPosts: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex direction="column" gap="10" className={styles.BlogActualPosts}>
      <h6 className={styles.BlogActualPosts__caption}>Актуальное</h6>
    </Flex>
  );
});
