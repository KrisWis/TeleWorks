import { Footer } from "@/widgets/Global_widgets/Footer";
import "./UserPage.scss";
import "@/shared/main.scss";
import { Header } from "@/widgets/Global_widgets/Header";
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
  }, []);

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};
