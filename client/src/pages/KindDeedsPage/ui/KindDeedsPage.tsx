import { URL_PART } from "@/app";
import "./KindDeedsPage.scss";
import "@/shared/main.scss";
import { KindDeedsMainSection } from "@/widgets/KindDeeds_widgets/KindDeedsMainSection";
import { KindDeedsTip } from "@/widgets/KindDeeds_widgets/KindDeedsTip";
import { useEffect } from "react";
import { memo } from "react";
import { Flex } from "@/shared/ui-kit/Stack";
import { KindDeedsStats } from "@/widgets/KindDeeds_widgets/KindDeedsStats";
import { KindDeedsHaveSignificance } from "@/widgets/KindDeeds_widgets/KindDeedsHaveSignificance";
import { KindDeedsSlider } from "@/widgets/KindDeeds_widgets/KindDeedsSlider";
import { KindDeedsAlreadyHelpedItems } from "../model/data";
import { KindDeedsAlreadyHelpedItem } from "@/widgets/KindDeeds_widgets/KindDeedsAlreadyHelpedItem";

export const KindDeedsPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("KindDeedsPage");
  }, []);

  return (
    <main className="Page KindDeedsPage__main">
      <Flex direction="column" gap="40" className="padding">
        <KindDeedsMainSection />

        <KindDeedsTip
          title={"Делаем добро вместе!"}
          text={
            "Мы рады сообщить, что часть нашего дохода от TeleWorks будет направлена на благотворительность. Каждая ваша покупка помогает тем, кто в этом нуждается."
          }
          imgURL={`${URL_PART}/KindDeeds/madeKindnessTogether_img.png`}
          imgURLAlt={"Мужчина складывает деньги в мешочек"}
        />

        <KindDeedsStats />

        <KindDeedsHaveSignificance />

        <KindDeedsSlider
          prevArrowId="KindDeedsAlreadyHelped__slider__prev"
          nextArrowId="KindDeedsAlreadyHelped__slider__next"
          title={"Уже помогли:"}
          items={KindDeedsAlreadyHelpedItems.map((item) => (
            <KindDeedsAlreadyHelpedItem {...item} />
          ))}
        />
      </Flex>
    </main>
  );
});
