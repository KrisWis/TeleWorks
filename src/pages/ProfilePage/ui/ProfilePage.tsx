import "./ProfilePage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import {
  channelReviews,
  Reviews_items,
  Similar_channels__items,
} from "../model/ProfilePage_data";
import { ItemsSlider } from "@/widgets/Global_widgets/ItemsSlider";
import { ReviewsPanel } from "@/widgets/Global_widgets/ReviewsPanel";
import { Buy_ads } from "@/widgets/ProfilePage_widgets/Buy_ads";
import { Channel_stats } from "@/widgets/ProfilePage_widgets/Channel_stats";
import { Reviews } from "@/widgets/ProfilePage_widgets/Reviews";
import { Stats } from "@/widgets/ProfilePage_widgets/Stats";
import { Profile } from "@/entities/ProfilePage_entities/Profile";
import { Similar_channels__item } from "@/entities/ProfilePage_entities/Similar_channels__item";

export const ProfilePage: React.FC = (): React.JSX.Element => {
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
};
