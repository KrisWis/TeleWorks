import { Footer } from "@/widgets/Global_widgets/Footer";
import "./CreateCardPage.scss";
import "@/shared/main.scss";
import { Header } from "@/widgets/Global_widgets/Header";
import { useEffect } from "react";
import { memo } from "react";
import { CreateCard } from "@/widgets/CreateCardPage_widgets/CreateCard";

export const CreateCardPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CreateCardPage");
  }, []);

  return (
    <>
      <Header />
      <main className="CreateCardPage__main">
        <div className="padding">
          <CreateCard />
        </div>
      </main>
      <Footer />
    </>
  );
});
