import { OrderSecurityGuarantee } from "@/shared/ui-kit/OrderSecurityGuarantee";
import { Flex } from "@/shared/lib/Stack";
import { CartContainer } from "@/widgets/CatalogCartPage_widgets/CartContainer";
import { CartRecommendedChannels } from "@/widgets/CatalogCartPage_widgets/CartRecommendedChannels";
import { CartStats } from "@/widgets/CatalogCartPage_widgets/CartStats";
import styles from "./CatalogCartPageContainer.module.scss";
import { memo } from "react";
import { cartItems } from "..";
import { CatalogCartSliceReducer } from "../model/slice/CatalogCartSlice";
import { DynamicModuleLoader } from "@/shared/lib/DynamicModuleLoader";
import { MoveToOpenChannelCartReducer } from "@/shared/ui-kit/MoveToOpenChannelCart";

export const CatalogCartPageContainer: React.FC = memo(
  (): React.JSX.Element => {
    return (
      <DynamicModuleLoader
        reducers={{ CatalogCartSliceReducer, MoveToOpenChannelCartReducer }}
      >
        <div className={styles.CatalogCartPageContainer}>
          <Flex max gap="30" direction="column">
            <CartContainer cartItems={cartItems} />
            <CartRecommendedChannels />
          </Flex>

          <Flex max gap="20" direction="column">
            <CartStats cartItems={cartItems} />
            <OrderSecurityGuarantee />
          </Flex>
        </div>
      </DynamicModuleLoader>
    );
  },
);
CatalogCartPageContainer.displayName = "CatalogCartPageContainer";
