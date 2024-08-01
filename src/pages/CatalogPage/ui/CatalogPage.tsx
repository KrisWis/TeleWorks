import { useEffect } from "react";
import "./CatalogPage.scss";
import "@/shared/main.scss";
import { Catalog } from "@/widgets/CatalogPage_widgets/Catalog";
import { Header } from "@/widgets/Global_widgets/Header";
import { ReceiveNotifications } from "@/widgets/Global_widgets/ReceiveNotifications";
import { Footer } from "@/widgets/Global_widgets/Footer";

export const CatalogPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CatalogPage");
  }, []);

  return (
    <>
      <Header />
      <main className="CatalogPage__main">
        <div className="padding">
          <Catalog />
        </div>
      </main>

      <ReceiveNotifications />
      <Footer />
    </>
  );
};
