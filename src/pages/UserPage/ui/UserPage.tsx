import { Footer } from "@/widgets/Global_widgets/Footer";
import "./UserPage.scss";
import "@/shared/main.scss";
import { Header } from "@/widgets/Global_widgets/Header";
import { useEffect } from "react";
import { memo } from "react";
import { UserAbout } from "@/widgets/UserPage_widgets/UserAbout";
import { userAbout } from "../model/UserPage_data";

export const UserPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("UserPage");
  }, []);

  return (
    <>
      <Header />
      <main className="UserPage__main">
        <div className="padding">
          <UserAbout {...userAbout} />
        </div>
      </main>
      <Footer />
    </>
  );
});
