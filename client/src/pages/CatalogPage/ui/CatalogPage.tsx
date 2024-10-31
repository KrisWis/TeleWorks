import { useEffect } from "react";
import "./CatalogPage.scss";
import "@/shared/main.scss";
import { Catalog } from "@/widgets/CatalogPage_widgets/Catalog";
import { ReceiveNotifications } from "@/widgets/Global_widgets/ReceiveNotifications";
import { DynamicModuleLoader } from "@/shared/ui-kit/DynamicModuleLoader/ui/DynamicModuleLoader";
import { MoveToOpenChannelCartReducer } from "@/entities/Global_entities/MoveToOpenChannelCart";

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
