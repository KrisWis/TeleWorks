import { TransitionBetweenBlocks } from "@/shared/ui-kit/TransitionBetweenBlocks";
import "./KindDeedsCreateRequestPage.scss";
import "@/shared/main.scss";
import { KindDeedsCreateRequestContainer } from "@/widgets/KindDeedsCreateRequestPage_widgets/KindDeedsCreateRequestContainer";
import { useEffect, useState } from "react";
import { memo } from "react";
import { KindDeedsRequestCreated } from "@/widgets/KindDeedsCreateRequestPage_widgets/KindDeedsRequestCreated";
import {
  tabletHeight_mediaQuery,
  transitionDurationMedium,
} from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import { Flex } from "@/shared/ui-kit/Stack";

export const KindDeedsCreateRequestPage: React.FC = memo(
  (): React.JSX.Element => {
    useEffect(() => {
      document
        .querySelector("html")!
        .classList.add("KindDeedsCreateRequestPage");
      document.title = `${document.title} | Создание запроса средств`;
    }, []);

    // Стейт для перелистывания блоков
    const [requestIsCreated, setRequestIsCreated] = useState<boolean>(false);

    // TODO: добавить добавление в localStorage (мб и для других страниц добавить добавление изображение в localstorage)

    return (
      <main className="Page KindDeedsCreateRequestPage__main">
        <div className="padding">
          <Flex
            max
            align="center"
            justify="center"
            className="KindDeedsCreateRequestPage__contentWrapper"
          >
            <div
              id="KindDeedsRequestCreated"
              style={{
                position: "absolute",
                top: tabletHeight_mediaQuery.matches ? "70vh" : "5vh",
              }}
            ></div>

            <TransitionBetweenBlocks
              blocks={[
                {
                  component: (
                    <KindDeedsCreateRequestContainer
                      setRequestIsCreated={setRequestIsCreated}
                    />
                  ),
                  condition: !requestIsCreated,
                  id: 0,
                },

                {
                  component: <KindDeedsRequestCreated />,
                  condition: requestIsCreated,
                  id: 1,
                },
              ]}
              transitionDuration={transitionDurationMedium}
              defaultIndex={0}
            />
          </Flex>
        </div>
      </main>
    );
  }
);
