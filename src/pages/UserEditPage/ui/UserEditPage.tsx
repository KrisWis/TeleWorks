import "./UserEditPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import { Header } from "@/widgets/Global_widgets/Header";
import { Footer } from "@/widgets/Global_widgets/Footer";
import { memo } from "react";
import { UserEditPageWrapper } from "@/widgets/UserEditPage_widgets/UserEditPageWrapper";

export const UserEditPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("UserEditPage");
  }, []);

  return (
    <>
      <Header />
      <main className="UserEditPage__main">
        <div className="padding">
          <UserEditPageWrapper />
        </div>
      </main>
      <Footer />
    </>
  );
});
