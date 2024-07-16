import { useEffect } from "react";
import "./CatalogPage.scss";
import { Catalog } from "@/widgets";
import "@/shared/main.scss";

export const CatalogPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CatalogPage");
  }, []);

  return (
    <main className="Catalog__main">
      <div className="padding">
        <Catalog />
      </div>
    </main>
  );
};
