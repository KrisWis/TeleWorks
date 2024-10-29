import "./CatalogCartPage.scss";
import "@/shared/main.scss";
import { Flex } from "@/shared/ui-kit/Stack";
import { CartContainer } from "@/widgets/CatalogCartPage_widgets/CartContainer";
import { useEffect } from "react";
import { memo } from "react";
import { cartItems } from "../model/data";
import { CartStats } from "@/widgets/CatalogCartPage_widgets/CartStats";
import { DynamicModuleLoader } from "@/shared/ui-kit/DynamicModuleLoader/DynamicModuleLoader";
import { CatalogCartSliceReducer } from "../model/slice/CatalogCartSlice";
import { OrderSecurityGuarantee } from "@/shared/ui-kit/OrderSecurityGuarantee";
import { CartRecommendedChannels } from "@/widgets/CatalogCartPage_widgets/CartRecommendedChannels";

export const CatalogCartPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CatalogCartPage");
    document.title = "TeleWorks | Корзина";
  }, []);

  return (
    <DynamicModuleLoader reducers={{ CatalogCartSliceReducer }}>
      <main className="Page CatalogCartPage__main">
        <div className="padding">
          <div className="CatalogCartPage__container">
            <Flex max gap="30" direction="column">
              <CartContainer cartItems={cartItems} />
              <CartRecommendedChannels />
            </Flex>

            <Flex max gap="20" direction="column">
              <CartStats cartItems={cartItems} />
              <OrderSecurityGuarantee />
            </Flex>
          </div>
        </div>
      </main>
    </DynamicModuleLoader>
  );
});
