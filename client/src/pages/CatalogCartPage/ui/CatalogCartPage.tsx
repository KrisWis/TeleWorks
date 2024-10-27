import "./CatalogCartPage.scss";
import "@/shared/main.scss";
import { Flex } from "@/shared/ui-kit/Stack";
import { CartContainer } from "@/widgets/CatalogCartPage/CartContainer";
import { useEffect } from "react";
import { memo } from "react";

export const CatalogCartPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CatalogCartPage");
    document.title = "TeleWorks | Корзина";
  }, []);

  return (
    <main className="Page CatalogCartPage__main">
      <div className="padding">
        <div className="CatalogCartPage__container">
          <Flex max gap="20" direction="column">
            <CartContainer />
          </Flex>
        </div>
      </div>
    </main>
  );
});
