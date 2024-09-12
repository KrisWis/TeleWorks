import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogFilter.module.scss";
import { memo, useState } from "react";
import { Input } from "@/shared/ui-kit/Input";
import {
  blogFilterCategories,
  blogFilterCategoryTitles,
  BlogFilterProps,
  BlogFilterTeleworks,
  BlogFilterThemes,
} from "../model/BlogFilter_types";

export const BlogFilter: React.FC<BlogFilterProps> = memo(
  ({ setSelectedCategory, selectedCategory }): React.JSX.Element => {
    // Стейт для инпута "Поиск"
    const [SearchInputValue, setSearchInputValue] = useState<string>("");

    return (
      <Flex
        direction="column"
        gap="20"
        className={`${styles.BlogFilter} Page__SirineWrapper`}
      >
        <div className={styles.BlogFilter__SearchInputWrapper}>
          <Input
            className={styles.BlogFilter__SearchInput}
            type={"text"}
            placeholder="Поиск..."
            value={SearchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
          />
        </div>

        {blogFilterCategories.map((category) => (
          <Flex
            key={category.title}
            onClick={() =>
              setSelectedCategory(
                category.title as keyof typeof blogFilterCategoryTitles
              )
            }
            className={`${styles.BlogFilter__category} ${selectedCategory == category.title ? styles.BlogFilter__category__active : ""}`}
            align="center"
            gap="10"
          >
            {category.icon}
            <span className={styles.BlogFilter__category__title}>
              {category.title}
            </span>
          </Flex>
        ))}

        <span className={styles.BlogFilter__caption}>Темы</span>

        {BlogFilterThemes.map((theme) => (
          <span
            key={theme}
            onClick={() =>
              setSelectedCategory(theme as keyof typeof BlogFilterThemes)
            }
            className={`${styles.BlogFilter__subcategory} ${theme == selectedCategory ? styles.BlogFilter__subcategory__active : ""}`}
          >
            {theme}
          </span>
        ))}

        <span className={styles.BlogFilter__caption}>TeleWorks</span>

        {BlogFilterTeleworks.map((tab) => (
          <span
            key={tab}
            onClick={() =>
              setSelectedCategory(tab as keyof typeof BlogFilterTeleworks)
            }
            className={`${styles.BlogFilter__subcategory} ${tab == selectedCategory ? styles.BlogFilter__subcategory__active : ""}`}
          >
            {tab}
          </span>
        ))}
      </Flex>
    );
  }
);
