import { useEffect } from "react";
import "./MyProjectsPage.scss";
import "@/shared/main.scss";
import { ReceiveNotifications } from "@/widgets/Global_widgets/ReceiveNotifications";
import { MyProjects } from "@/widgets/MyProjects_widgets/MyProjects";
import { myProjectsStats } from "../model/MyProjectPage_data";

export const MyProjectsPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("MyProjectsPage");
  }, []);

  return (
    <>
      <main className="Page MyProjectsPage__main">
        <div className="padding">
          <MyProjects myProjectsStats={myProjectsStats} />
        </div>
      </main>

      <ReceiveNotifications />
    </>
  );
};
