import { renderWithRouter } from "@/shared/utils/renderWithRouter";
import { TransitionBetweenBlocks } from "./TransitionBetweenBlocks";
import { transitionDurationMedium } from "@/shared/const/global";
import { useState } from "react";
import { waitFor } from "@testing-library/react";

describe("TransitionBetweenBlocks", () => {
  test("check transition between two blocks", () => {
    const TransitionBetweenBlocksComponent: React.FC = (): JSX.Element => {
      const [blockIndex, setBlockIndex] = useState<number>(0);

      setTimeout(() => {
        setBlockIndex(1);
      }, 100);

      return (
        <TransitionBetweenBlocks
          blocks={[
            {
              component: <>0</>,
              condition: blockIndex == 0,
              id: 0,
            },
            {
              component: <>1</>,
              condition: blockIndex == 1,
              id: 1,
            },
          ]}
          transitionDuration={transitionDurationMedium}
          defaultIndex={0}
        />
      );
    };

    const { getByTestId, queryByTestId } = renderWithRouter(
      <TransitionBetweenBlocksComponent />,
    );

    expect(
      getByTestId("TransitionBetweenBlocks.VisibleBlock"),
    ).toBeInTheDocument();

    setTimeout(async () => {
      await waitFor(() => {
        expect(
          queryByTestId("TransitionBetweenBlocks.PastVisibleBlock"),
        ).toBeInTheDocument();

        expect(
          queryByTestId("TransitionBetweenBlocks.VisibleBlock"),
        ).toBeInTheDocument();
      });
    }, 100);
  });
});
