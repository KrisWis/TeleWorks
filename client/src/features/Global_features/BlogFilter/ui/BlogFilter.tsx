import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogFilter.module.scss";
import { memo, useState } from "react";
import { Input } from "@/shared/ui-kit/Input";
import {
  blogFilterCategories,
  blogFilterCategoryTitles,
  BlogFilterProps,
  blogFilterTeleworks,
  blogFilterThemes,
  blogFilterThemesTitles,
} from "../model/BlogFilter_types";
import BackSVG from "@/shared/assets/icons/Global/BackSVG.svg?react";
import { Link } from "react-router-dom";
import { AppRoutes } from "@/shared/const/app";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";
import { tablet_small_mediaQuery } from "@/shared/const/global";
import BlogFilterAdaptiveSVG from "@/shared/assets/icons/BlogPage/BlogFilterAdaptiveSVG.svg?react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";

export const BlogFilter: React.FC<BlogFilterProps> = memo(
  ({ setSelectedCategory, selectedCategory, canReturn }): React.JSX.Element => {
    // Стейт для инпута "Поиск"
    const [SearchInputValue, setSearchInputValue] = useState<string>("");

    // Стейт для открытия фильтра в адаптиве
    const [adaptiveFilterIsOpen, setAdaptiveFilterIsOpen] =
      useState<boolean>(false);

    return (
      <>
        {!tablet_small_mediaQuery.matches ? (
          <Flex direction="column" gap="10">
            {canReturn && (
              <Link to={AppRoutes.BLOG}>
                <IncreaseScaleHover>
                  <Flex align="center" gap="10">
                    <BackSVG />

                    <span className={styles.BlogFilter__back}>Назад</span>
                  </Flex>
                </IncreaseScaleHover>
              </Link>
            )}

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

              {blogFilterThemes.map((theme) => (
                <Flex
                  key={theme.title}
                  onClick={() =>
                    setSelectedCategory(
                      theme.title as keyof typeof blogFilterThemesTitles
                    )
                  }
                  className={`${styles.BlogFilter__subcategory} ${theme.title == selectedCategory ? styles.BlogFilter__category__active : ""}`}
                  align="center"
                  gap="10"
                >
                  {theme.icon}
                  <span>{theme.title}</span>
                </Flex>
              ))}

              <span className={styles.BlogFilter__caption}>TeleWorks</span>

              {blogFilterTeleworks.map((theme) => (
                <Flex
                  key={theme.title}
                  onClick={() =>
                    setSelectedCategory(
                      theme.title as keyof typeof blogFilterTeleworks
                    )
                  }
                  className={`${styles.BlogFilter__subcategory} ${theme.title == selectedCategory ? styles.BlogFilter__category__active : ""}`}
                  align="center"
                  gap="10"
                >
                  {theme.icon}
                  <span>{theme.title}</span>
                </Flex>
              ))}
            </Flex>
          </Flex>
        ) : (
          <Flex
            direction="column"
            align="center"
            className={`${styles.BlogFilter__adaptive}
            ${adaptiveFilterIsOpen ? styles.BlogFilter__adaptive__active : ""}`}
          >
            <Flex
              gap="10"
              align="center"
              justify="center"
              onClick={() => setAdaptiveFilterIsOpen(!adaptiveFilterIsOpen)}
              className={styles.BlogFilter__adaptive__wrapper}
            >
              <BlogFilterAdaptiveSVG />
              <span className={styles.BlogFilter__adaptive__text}>
                Поиск и фильтры
              </span>
            </Flex>

            <Flex
              max
              direction="column"
              gap={`${!tablet_small_mediaQuery.matches ? "10" : "15"}`}
            >
              {canReturn && (
                <Link to={AppRoutes.BLOG}>
                  <IncreaseScaleHover>
                    <Flex align="center" gap="10">
                      <BackSVG />

                      <span className={styles.BlogFilter__back}>Назад</span>
                    </Flex>
                  </IncreaseScaleHover>
                </Link>
              )}

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

              {blogFilterThemes.map((theme) => (
                <Flex
                  key={theme.title}
                  onClick={() =>
                    setSelectedCategory(
                      theme.title as keyof typeof blogFilterThemesTitles
                    )
                  }
                  className={`${styles.BlogFilter__subcategory} ${theme.title == selectedCategory ? styles.BlogFilter__category__active : ""}`}
                  align="center"
                  gap="10"
                >
                  {theme.icon}
                  <span>{theme.title}</span>
                </Flex>
              ))}

              <span className={styles.BlogFilter__caption}>TeleWorks</span>

              {blogFilterTeleworks.map((theme) => (
                <Flex
                  key={theme.title}
                  onClick={() =>
                    setSelectedCategory(
                      theme.title as keyof typeof blogFilterTeleworks
                    )
                  }
                  className={`${styles.BlogFilter__subcategory} ${theme.title == selectedCategory ? styles.BlogFilter__category__active : ""}`}
                  align="center"
                  gap="10"
                >
                  {theme.icon}
                  <span>{theme.title}</span>
                </Flex>
              ))}

              <Button
                className={styles.BlogFilter__adaptive__button}
                text="Применить фильтр"
                type={ButtonTypes.RED}
              />
            </Flex>
          </Flex>
        )}
      </>
    );
  }
);
