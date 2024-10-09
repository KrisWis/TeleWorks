import "./KindDeedsPage.scss";
import "@/shared/main.scss";
import { KindDeedsMainSection } from "@/widgets/KindDeeds_widgets/KindDeedsMainSection";
import { useEffect } from "react";
import { memo } from "react";

export const KindDeedsPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("KindDeedsPage");
  }, []);

  return (
    <main className="Page KindDeedsPage__main">
      <div className="padding">
        <KindDeedsMainSection />
      </div>
    </main>
  );
});
