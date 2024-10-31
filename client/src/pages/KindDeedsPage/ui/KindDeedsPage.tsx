import { mobile_mediaQuery, tablet_mediaQuery } from "@/shared/const/global";
import { URL_PART } from "@/shared/const/app";
import "./KindDeedsPage.scss";
import "@/shared/main.scss";
import { KindDeedsMainSection } from "@/widgets/KindDeedsPage_widgets/KindDeedsMainSection";
import { KindDeedsTip } from "@/widgets/KindDeedsPage_widgets/KindDeedsTip";
import { useEffect } from "react";
import { memo } from "react";
import { Flex } from "@/shared/ui-kit/Stack";
import { KindDeedsStats } from "@/widgets/KindDeedsPage_widgets/KindDeedsStats";
import { KindDeedsHaveSignificance } from "@/widgets/KindDeedsPage_widgets/KindDeedsHaveSignificance";
import { KindDeedsSlider } from "@/widgets/KindDeedsPage_widgets/KindDeedsSlider";
import {
  KindDeedsAlreadyHelpedItems,
  KindDeedsFAQItems,
  KindDeedsNeedHelpItems,
} from "../model/data";
import { KindDeedsAlreadyHelpedItem } from "@/widgets/KindDeedsPage_widgets/KindDeedsAlreadyHelpedItem";
import { KindDeedsChangeLives } from "@/widgets/KindDeedsPage_widgets/KindDeedsChangeLives";
import { KindDeedsAllegations } from "@/widgets/KindDeedsPage_widgets/KindDeedsAllegations";
import { KindDeedsNeedHelpItem } from "@/widgets/KindDeedsPage_widgets/KindDeedsNeedHelpItem";
import { KindDeedsLetterOfKindness } from "@/widgets/KindDeedsPage_widgets/KindDeedsLetterOfKindness";
import { AskQuestion } from "@/shared/ui-kit/AskQuestion";
import { FAQ_accordion } from "@/shared/ui-kit/FAQ_accordion";

export const KindDeedsPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("KindDeedsPage");
    document.title = `TeleWorks | Добрые дела`;
  }, []);

  return (
    <main className="Page KindDeedsPage__main">
      <Flex
        direction="column"
        gap={mobile_mediaQuery.matches ? "20" : "40"}
        className="padding"
      >
        <KindDeedsMainSection />

        <KindDeedsTip
          title={"Делаем добро вместе!"}
          text={
            "Мы рады сообщить, что часть нашего дохода от TeleWorks будет направлена на благотворительность. Каждая ваша покупка помогает тем, кто в этом нуждается."
          }
          imgURL={`${URL_PART}/KindDeeds${mobile_mediaQuery.matches ? "/Adaptive" : ""}/madeKindnessTogether_img.png`}
          imgURLAlt={"Мужчина складывает деньги в мешочек"}
          textWrapperWidth="50%"
          padding={`${tablet_mediaQuery.matches ? 10 : 0}px ${tablet_mediaQuery.matches ? 15 : 50}px`}
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

        <KindDeedsChangeLives />

        <KindDeedsTip
          title={"Щедрость приносит радость!"}
          text={
            "Мы верим, что успех нашего проекта должен служить благу других. Поэтому мы решили направлять часть дохода от TeleWorks на благотворительность. Каждая ваша покупка или взаимодействие с нашим сайтом вносит вклад в добрые дела, которые меняют жизни к лучшему!"
          }
          imgURL={`${URL_PART}/KindDeeds${mobile_mediaQuery.matches ? "/Adaptive" : ""}/GenerosityBringsJoy_img.png`}
          imgURLAlt={"Монеты на фоне сердца"}
          textWrapperWidth="100%"
          padding={`${tablet_mediaQuery.matches ? 15 : 0}px ${tablet_mediaQuery.matches ? 15 : 35}px`}
        />

        <KindDeedsAllegations />

        <KindDeedsSlider
          prevArrowId="KindDeedNeedHelpItem__slider__prev"
          nextArrowId="KindDeedNeedHelpItem__slider__next"
          title={"Нуждаются в "}
          titleRed={"помощи:"}
          items={KindDeedsNeedHelpItems.map((item) => (
            <KindDeedsNeedHelpItem {...item} />
          ))}
        />

        <KindDeedsLetterOfKindness />

        <h2 className="KindDeedsPage__FAQCaption">Часто задаваемые вопросы:</h2>

        <FAQ_accordion FAQ_accordion_items={KindDeedsFAQItems} />

        <AskQuestion />
      </Flex>
    </main>
  );
});
