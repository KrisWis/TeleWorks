import { useEffect } from "react";
import "./CatalogPage.scss";
import "@/shared/main.scss";
import { Catalog } from "@/widgets/CatalogPage_widgets/Catalog";
import { ReceiveNotifications } from "@/widgets/Global_widgets/ReceiveNotifications";

export const CatalogPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CatalogPage");
  }, []);

  return (
    <>
      <main className="CatalogPage__main">
        <div className="padding">
          <Catalog />
        </div>
      </main>

      <ReceiveNotifications />
    </>
  );
};
