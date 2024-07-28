import "./ProjectPage.scss";
import "@/shared/main.scss";
import { memo, useEffect } from "react";
import {
  Footer,
  Header,
  ItemsSlider,
  ProjectInfo,
  ProjectReviews,
} from "@/widgets";
import {
  channelReviewsProps,
  OtherProjectsItems,
  ProjectInfoData,
  ProjectReviews_items,
  SimilarProjectsItems,
} from "../model/ProjectPage_data";
import { ProjectItem } from "@/entities";

export const ProjectPage: React.FC = memo((): React.JSX.Element => {
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
            channelReviewsProps={channelReviewsProps}
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
});
