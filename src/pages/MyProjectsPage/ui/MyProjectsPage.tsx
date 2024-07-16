import { useEffect } from "react";
import "./MyProjectsPage.scss";
import { MyProjects } from "@/widgets";
import "@/shared/main.scss";

export const MyProjectsPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("MyProjectsPage");
  }, []);

  return (
    <main className="MyProjectsPage__main">
      <div className="padding">
        <MyProjects />
      </div>
    </main>
  );
};
