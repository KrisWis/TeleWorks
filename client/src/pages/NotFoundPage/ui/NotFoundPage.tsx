import "./NotFoundPage.scss";
import "@/shared/main.scss";
import { NotFoundContainer } from "@/widgets/NotFound_widgets/NotFoundContainer";
import { useEffect } from "react";
import { memo } from "react";

export const NotFoundPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("NotFoundPage");
    document.title = `TeleWorks | Не найдено`;
  }, []);

  return (
    <main className="Page NotFoundPage__main">
      <div className="padding">
        <NotFoundContainer />
      </div>
    </main>
  );
});
