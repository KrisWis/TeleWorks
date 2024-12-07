import { ErrorContainer } from "@/shared/ui-kit/ErrorContainer";
import "./ErrorPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import { memo } from "react";

export const ErrorPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("ErrorPage");
    document.title = `TeleWorks | Технические неполадки`;
  }, []);

  return (
    <main data-testid="ErrorPage" className="Page ErrorPage__main">
      <div className="padding">
        <ErrorContainer />
      </div>
    </main>
  );
});
ErrorPage.displayName = "ErrorPage";
