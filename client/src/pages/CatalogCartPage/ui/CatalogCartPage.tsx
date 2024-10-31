import "./CatalogCartPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import { memo } from "react";
import { CatalogCartPageContainer } from "@/entities/CatalogPage_entities/CatalogCartPageContainer";

export const CatalogCartPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CatalogCartPage");
    document.title = "TeleWorks | Корзина";
  }, []);

  return (
    <main className="Page CatalogCartPage__main">
      <div className="padding">
        <CatalogCartPageContainer />
      </div>
    </main>
  );
});
