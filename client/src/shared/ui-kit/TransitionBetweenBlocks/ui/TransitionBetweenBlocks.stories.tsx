import type { Meta, StoryObj } from "@storybook/react";
import { TransitionBetweenBlocks } from "./TransitionBetweenBlocks";
import {
  BlogFilter,
  BlogFilterAllCategories,
  blogFilterCategoryTitles,
} from "@/widgets/Global_widgets/BlogFilter";
import { BlogCreatePageContainer } from "@/widgets/BlogCreatePage_widgets/BlogCreatePageContainer";
import { BlogPostIsCreated } from "@/widgets/BlogCreatePage_widgets/BlogPostIsCreated";
import { Flex } from "../../Stack";
import { transitionDurationMedium } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import { CreatePostProgressSteps } from "@/pages/BlogCreatePage";
import { useState } from "react";

const TransitionBetweenBlocksComponent: React.FC = (): JSX.Element => {
  const [blogFilterSelectedCategory, setBlogFilterSelectedCategory] =
    useState<BlogFilterAllCategories>(
      blogFilterCategoryTitles[0] as keyof typeof blogFilterCategoryTitles
    );

  const CreatePostActiveStep =
    useState<CreatePostProgressSteps>("Создание поста")[0];

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

const meta = {
  title: "Shared/TransitionBetweenBlocks",
  component: TransitionBetweenBlocksComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TransitionBetweenBlocks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
