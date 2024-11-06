import { useEffect } from "react";
import "./CatalogPage.scss";
import "@/shared/main.scss";
import { Catalog } from "@/widgets/CatalogPage_widgets/Catalog";
import { ReceiveNotifications } from "@/shared/ui-kit/ReceiveNotifications";
import { DynamicModuleLoader } from "@/shared/lib/DynamicModuleLoader/ui/DynamicModuleLoader";
import { MoveToOpenChannelCartReducer } from "@/shared/lib/MoveToOpenChannelCart";

export const CatalogPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CatalogPage");
    document.title = `TeleWorks | Каталог`;
  }, []);

  return (
    <>
      <main className="Page CatalogPage__main">
        <div className="padding">
          <DynamicModuleLoader reducers={{ MoveToOpenChannelCartReducer }}>
            <Catalog />
          </DynamicModuleLoader>
        </div>
      </main>

      <ReceiveNotifications />
    </>
  );
};
