import { memo, useEffect } from "react";
import "./MyProjectsPage.scss";
import "@/shared/main.scss";
import { Header } from "@/widgets/Global_widgets/Header";
import { ReceiveNotifications } from "@/widgets/Global_widgets/ReceiveNotifications";
import { MyProjects } from "@/widgets/MyProjects_widgets/MyProjects";
import { Footer } from "@/widgets/Global_widgets/Footer";
import { myProjectsStats } from "../model/MyProjectPage_data";

export const MyProjectsPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("MyProjectsPage");
  }, []);

  return (
    <>
      <Header />
      <main className="MyProjectsPage__main">
        <div className="padding">
          <MyProjects myProjectsStats={myProjectsStats} />
        </div>
      </main>

      <ReceiveNotifications />
      <Footer />
    </>
  );
});
