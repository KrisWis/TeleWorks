import "./NotFoundPage.scss";
import "@/shared/main.scss";
import { NotFoundContainer } from "@/shared/ui-kit/NotFoundContainer";
import { useEffect } from "react";
import { memo } from "react";

export const NotFoundPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("NotFoundPage");
    document.title = `TeleWorks | Не найдено`;
  }, []);

  return (
    <main data-testid="NotFoundPage" className="Page NotFoundPage__main">
      <div className="padding">
        <NotFoundContainer />
      </div>
    </main>
  );
});
