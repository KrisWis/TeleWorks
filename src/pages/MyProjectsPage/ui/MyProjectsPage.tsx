import { useEffect } from "react";
import "./MyProjectsPage.scss";

export const MyProjectsPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("MyProjectsPage");
  }, []);

  return (
    <main className="MainPage__main">
      <div className="padding"></div>
    </main>
  );
};
