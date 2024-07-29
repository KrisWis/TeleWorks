import { memo, useEffect } from "react";
import "./MyProjectsPage.scss";
import "@/shared/main.scss";
import { Header } from "@/widgets/Global_widgets/Header";
import { ReceiveNotifications } from "@/widgets/Global_widgets/ReceiveNotifications";
import { MyProjects } from "@/widgets/MyProjects_widgets/MyProjects";
import { Footer } from "@/widgets/Global_widgets/Footer";

export const MyProjectsPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("MyProjectsPage");
  }, []);

  return (
    <>
      <Header />
      <main className="MyProjectsPage__main">
        <div className="padding">
          <MyProjects />
        </div>
      </main>

      <ReceiveNotifications />
      <Footer />
    </>
  );
});
