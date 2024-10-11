import { renderWithRouter } from "@/shared/utils/renderWithRouter";
import { TransitionBetweenBlocks } from "./TransitionBetweenBlocks";
import { transitionDurationMedium } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import { BlogCreatePageContainer } from "@/widgets/BlogCreatePage_widgets/BlogCreatePageContainer";
import { BlogPostIsCreated } from "@/widgets/BlogCreatePage_widgets/BlogPostIsCreated";
import {
  BlogFilterAllCategories,
  blogFilterCategoryTitles,
  BlogFilter,
} from "@/widgets/Global_widgets/BlogFilter";
import { useState } from "react";
import { Flex } from "../../Stack";
import { waitFor } from "@testing-library/react";
import { CreatePostProgressSteps } from "@/pages/BlogCreatePage";

describe("TransitionBetweenBlocks", () => {
  test("check transition between two blocks", () => {
    const TransitionBetweenBlocksComponent: React.FC = (): JSX.Element => {
      const [blogFilterSelectedCategory, setBlogFilterSelectedCategory] =
        useState<BlogFilterAllCategories>(
          blogFilterCategoryTitles[0] as keyof typeof blogFilterCategoryTitles
        );

      const [CreatePostActiveStep, setCreatePostActiveStep] =
        useState<CreatePostProgressSteps>("Создание поста");

      setTimeout(() => {
        setCreatePostActiveStep("Пост создан");
      }, 100);

      return (
        <TransitionBetweenBlocks
          blocks={[
            {
              component: (
                <div className={"BlogCreatePage__container"}>
                  <BlogFilter
                    selectedCategory={blogFilterSelectedCategory}
                    setSelectedCategory={setBlogFilterSelectedCategory}
                    canReturn
                  />

                  <Flex
                    className="BlogCreatePage__mainWrapper"
                    direction="column"
                    gap="20"
                  >
                    <BlogCreatePageContainer />
                  </Flex>
                </div>
              ),
              condition: CreatePostActiveStep == "Создание поста",
              id: 0,
            },
            {
              component: <BlogPostIsCreated />,
              condition: CreatePostActiveStep == "Пост создан",
              id: 1,
            },
          ]}
          transitionDuration={transitionDurationMedium}
          defaultIndex={0}
        />
      );
    };

    const { getByTestId, queryByTestId } = renderWithRouter(
      <TransitionBetweenBlocksComponent />
    );

    expect(
      getByTestId("TransitionBetweenBlocks.VisibleBlock")
    ).toBeInTheDocument();

    setTimeout(async () => {
      await waitFor(() => {
        expect(
          queryByTestId("TransitionBetweenBlocks.PastVisibleBlock")
        ).toBeInTheDocument();

        expect(
          queryByTestId("TransitionBetweenBlocks.VisibleBlock")
        ).toBeInTheDocument();
      });
    }, 100);
  });
});
