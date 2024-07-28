import {
  Buy_ads,
  Channel_reviews,
  Channel_stats,
  Reviews,
  Similar_channels,
  Stats,
} from "@/widgets";
import "./ProfilePage.scss";
import "@/shared/main.scss";
import { memo, useEffect } from "react";
import { Profile } from "@/entities";
import { channelReviews, Reviews_items } from "../model/ProfilePage_data";

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

        <Channel_reviews {...channelReviews} />
        <Reviews reviewsItems={Reviews_items} />
        <Similar_channels />
      </div>
    </main>
  );
});
