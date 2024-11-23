import { Flex } from "@/shared/lib/Stack";
import styles from "./BlogCreatePagePostTypes.module.scss";
import { memo, useContext } from "react";
import { mobile_mediaQuery } from "@/shared/const/global";
import {
  BlogCreatePageContext,
  blogCreatePagePostTypes,
} from "@/app/layouts/BaseLayout/ui/pageWrappers/BlogCreatePageMain";
import ChangeSVG from "@/shared/assets/icons/Global/ChangeSVG.svg?react";

export const BlogCreatePagePostTypes: React.FC = memo((): React.JSX.Element => {
  // Функционал переключения типа поста
  const { setSelectedPostType, selectedPostType } = useContext(
    BlogCreatePageContext,
  );

  return (
    <Flex align="center" gap={mobile_mediaQuery ? "5" : "10"}>
      {blogCreatePagePostTypes.map((type) => (
        <Flex
          id="BlogCreatePageContainer__blogCreatePagePostTypes"
          key={type}
          className={`${styles.BlogCreatePagePostTypes__postType}
            ${selectedPostType == type ? styles.BlogCreatePagePostTypes__postType__active : ""} `}
          align="center"
          gap="5"
          onClick={() => setSelectedPostType(type)}
        >
          <ChangeSVG
            className={`${styles.BlogCreatePagePostTypes__postType__svg}
            ${selectedPostType == type ? styles.BlogCreatePagePostTypes__postType__svg__active : ""} `}
          />

          <span
            className={`${styles.BlogCreatePagePostTypes__postType__text}
            ${selectedPostType == type ? styles.BlogCreatePagePostTypes__postType__text__active : ""} `}
          >
            {type}
          </span>
        </Flex>
      ))}
    </Flex>
  );
});
BlogCreatePagePostTypes.displayName = "BlogCreatePagePostTypes";
