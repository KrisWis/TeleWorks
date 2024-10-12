import "./UserPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import { UserAbout } from "@/widgets/UserPage_widgets/UserAbout";
import {
  userAbout,
  UserPortfolioCases,
  UserPortfolioCategories,
  UserProjectsItems,
  userReviews_items,
  userReviewsProps,
} from "../model/UserPage_data";
import { UserPortfolio } from "@/widgets/UserPage_widgets/UserPortfolio";
import { UserProjects } from "@/widgets/UserPage_widgets/UserProjects";
import { UserReviews } from "@/widgets/UserPage_widgets/UserReviews";

export const UserPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("UserPage");
    document.title = `TeleWorks | Имя пользователя`;
  }, []);

  return (
    <main className="UserPage__main">
      <div className="padding">
        <UserAbout {...userAbout} />

        <UserPortfolio
          categories={UserPortfolioCategories}
          cases={UserPortfolioCases}
        />

        <UserProjects projects={UserProjectsItems} />

        <UserReviews
          reviewsItems={userReviews_items}
          ReviewsPanelProps={userReviewsProps}
        />
      </div>
    </main>
  );
};
