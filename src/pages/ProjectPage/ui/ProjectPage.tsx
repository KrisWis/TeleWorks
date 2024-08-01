import "./ProjectPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import {
  reviewsPanelProps,
  OtherProjectsItems,
  ProjectInfoData,
  ProjectReviews_items,
  SimilarProjectsItems,
} from "../model/ProjectPage_data";
import { Header } from "@/widgets/Global_widgets/Header";
import { ItemsSlider } from "@/widgets/Global_widgets/ItemsSlider";
import { ProjectInfo } from "@/widgets/ProjectPage_widgets/ProjectInfo";
import { ProjectReviews } from "@/widgets/ProjectPage_widgets/ProjectReviews";
import { Footer } from "@/widgets/Global_widgets/Footer";
import { ProjectItem } from "@/entities/Global_entities/ProjectItem";

export const ProjectPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("ProjectPage");
  }, []);

  return (
    <>
      <Header />
      <main className="ProjectPage__main">
        <div className="padding">
          <ProjectInfo {...ProjectInfoData} />

          <ProjectReviews
            reviewsItems={ProjectReviews_items}
            ReviewsPanelProps={reviewsPanelProps}
          />

          <ItemsSlider
            ItemsSlider__headerProps={{
              title: "Другие проекты продавца",
              prevArrowId: "OtherProjectsItems__prev",
              nextArrowId: "OtherProjectsItems__next",
            }}
            ItemsSlider__sliderProps={{
              componentProps: OtherProjectsItems,
              Component: ProjectItem,
              visibleItems: 4,
              prevArrowId: "OtherProjectsItems__prev",
              nextArrowId: "OtherProjectsItems__next",
            }}
          />

          <ItemsSlider
            ItemsSlider__headerProps={{
              title: "Похожие проекты",
              prevArrowId: "SimilarProjectsItems__prev",
              nextArrowId: "SimilarProjectsItems__next",
            }}
            ItemsSlider__sliderProps={{
              componentProps: SimilarProjectsItems,
              Component: ProjectItem,
              visibleItems: 4,
              prevArrowId: "SimilarProjectsItems__prev",
              nextArrowId: "SimilarProjectsItems__next",
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};
