import {
  Buy_ads,
  ReviewsPanel,
  Channel_stats,
  Reviews,
  ItemsSlider,
  Stats,
} from "@/widgets";
import "./ProfilePage.scss";
import "@/shared/main.scss";
import { memo, useEffect } from "react";
import { Profile, Similar_channels__item } from "@/entities";
import {
  channelReviews,
  Reviews_items,
  Similar_channels__items,
} from "../model/ProfilePage_data";

export const ProfilePage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("profilePage");
  }, []);

  return (
    <main className="ProfilePage__main">
      <div className="padding">
        <Profile />
        <Stats />
        <Buy_ads />
        <Channel_stats />

        <h2 className="ProfilePage__caption">Отзывы канала</h2>

        <ReviewsPanel {...channelReviews} />
        <Reviews reviewsItems={Reviews_items} />
        <ItemsSlider
          ItemsSlider__headerProps={{
            title: "Похожие каналы",
            prevArrowId: "Similar_channels__items__prev",
            nextArrowId: "Similar_channels__items__next",
          }}
          ItemsSlider__sliderProps={{
            componentProps: Similar_channels__items,
            Component: Similar_channels__item,
            visibleItems: 3,
            prevArrowId: "Similar_channels__items__prev",
            nextArrowId: "Similar_channels__items__next",
          }}
        />
      </div>
    </main>
  );
});
