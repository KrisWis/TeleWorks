import "./KindDeedsCreateRequestPage.scss";
import "@/shared/main.scss";
import { KindDeedsCreateRequestContainer } from "@/widgets/KindDeedsCreateRequestPage_widgets/KindDeedsCreateRequestContainer";
import { useEffect } from "react";
import { memo } from "react";

export const KindDeedsCreateRequestPage: React.FC = memo(
  (): React.JSX.Element => {
    useEffect(() => {
      document
        .querySelector("html")!
        .classList.add("KindDeedsCreateRequestPage");
      document.title = `${document.title} | Создание запроса средств`;
    }, []);

    return (
      <main className="Page KindDeedsCreateRequestPage__main">
        <div className="padding">
          <KindDeedsCreateRequestContainer />
        </div>
      </main>
    );
  }
);
