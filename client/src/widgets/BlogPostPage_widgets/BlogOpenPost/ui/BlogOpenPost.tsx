import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogOpenPost.module.scss";
import { memo } from "react";
import { BlogOpenPostProps } from "../model/BlogOpenPost_types";

export const BlogOpenPost: React.FC<BlogOpenPostProps> = memo(({id}): React.JSX.Element => {
  return (
    <Flex direction="column" gap="20">
      <Flex
        direction="column"
        gap="10"
        className={`${styles.BlogOpenPost} Page__GrayBorderWithWhiteBGWrapper`}
      ></Flex>
    </Flex>
  );
});
