import {
  Buy_ads,
  Channel_reviews,
  Channel_stats,
  Profile,
  Reviews,
  Similar_channels,
  Stats,
} from "@/widgets";
import "./ProfilePage.scss";
import { useEffect } from "react";

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
        <Channel_reviews />
        <Reviews />
        <Similar_channels />
      </div>
    </main>
  );
};
