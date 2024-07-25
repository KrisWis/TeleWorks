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
        <Channel_reviews />
        <Reviews />
        <Similar_channels />
      </div>
    </main>
  );
});
