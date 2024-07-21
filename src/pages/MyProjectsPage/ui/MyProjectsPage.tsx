import { useEffect } from "react";
import "./MyProjectsPage.scss";
import { Footer, Header, MyProjects, ReceiveNotifications } from "@/widgets";
import "@/shared/main.scss";

export const MyProjectsPage: React.FC = (): React.JSX.Element => {
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
};
