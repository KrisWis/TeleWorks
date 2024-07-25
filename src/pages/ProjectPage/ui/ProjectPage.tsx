import "./ProjectPage.scss";
import "@/shared/main.scss";
import { memo, useEffect } from "react";
import { Footer, Header, ProjectInfo } from "@/widgets";

export const ProjectPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("ProjectPage");
  }, []);

  return (
    <>
      <Header />
      <main className="ProjectPage__main">
        <div className="padding">
          <ProjectInfo />
        </div>
      </main>
      <Footer />
    </>
  );
});
