import "./CreateCardPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import { memo } from "react";
import { CreateCard } from "@/widgets/CreateCardPage_widgets/CreateCard";

export const CreateCardPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CreateCardPage");
  }, []);

  return (
    <main className="CreateCardPage__main">
      <div className="padding">
        <CreateCard />
      </div>
    </main>
  );
});
