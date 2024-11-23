import { Flex } from "@/shared/lib/Stack";
import styles from "./CartRecommendedChannels.module.scss";
import { memo, useEffect, useRef, useState } from "react";
import { recommendedChannels } from "../model/data";
import { CatalogItem } from "@/entities/CatalogPage_entities/CatalogItem";
import { useAppDispatch, useAppSelector } from "@/shared/config/store/AppStore";
import {
  getAllChannelsInCart,
  MoveToOpenChannelCart,
  MoveToOpenChannelCartActions,
  UseMoveToOpenChannelCartLocalStorage,
} from "@/shared/ui-kit/MoveToOpenChannelCart";
import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";
import { shallowEqual } from "react-redux";

export const CartRecommendedChannels: React.FC = memo((): React.JSX.Element => {
  // Создание стейта для скрытия/раскрытия блока
  const [isHidden, setIsHidden] = useState<boolean>(false);

  // Функционал добавления предмета в корзину
  const [MoveToOpenChannelCartIsAppear, setMoveToOpenChannelCartIsAppear] =
    useState<boolean>(false);

  const dispatch = useAppDispatch();
  const allChannelsIdsInCartFromLS = UseMoveToOpenChannelCartLocalStorage(
    UseLocalStorageTypes.GET,
  );

  const allChannelsIdsInCartFromLSTimeoutRef = useRef<NodeJS.Timeout>();

  const allChannelsIDsInCart = useAppSelector(
    (state) => getAllChannelsInCart(state.MoveToOpenChannelCartReducer!),
    shallowEqual,
  );

  useEffect(() => {
    if (allChannelsIdsInCartFromLS && allChannelsIdsInCartFromLS.length) {
      allChannelsIdsInCartFromLSTimeoutRef.current = setTimeout(() => {
        dispatch(
          MoveToOpenChannelCartActions.setChannelsForCart({
            channelsIDs: allChannelsIdsInCartFromLS,
          }),
        );

        clearTimeout(allChannelsIdsInCartFromLSTimeoutRef.current);
      }, 0);
    }
  }, [allChannelsIdsInCartFromLS, dispatch]);

  return (
    <Flex max direction="column" gap="10">
      <Flex max align="center" justify="between">
        <h2 className={styles.CartRecommendedChannels__caption}>
          Рекомендуемые каналы
        </h2>

        <span
          onClick={() => setIsHidden(!isHidden)}
          className={styles.CartRecommendedChannels__hidden__text}
        >
          {isHidden ? "Показать" : "Скрыть"}
        </span>
      </Flex>

      <Flex
        className={`${styles.CartRecommendedChannels__wrapper}
          ${isHidden ? styles.CartRecommendedChannels__wrapper__hidden : ""}
          Page__GrayBorderWithWhiteBGWrapper`}
        align="center"
        justify="center"
        max
      >
        <Flex max direction="column" gap="5">
          {recommendedChannels.map((channel) => (
            <CatalogItem
              setMoveToOpenChannelCartIsAppear={
                setMoveToOpenChannelCartIsAppear
              }
              key={channel.id}
              catalogItem={channel}
              selectsType="time|top"
            />
          ))}
        </Flex>

        {allChannelsIDsInCart.length > 0 && (
          <MoveToOpenChannelCart
            MoveToOpenChannelCartIsAppear={MoveToOpenChannelCartIsAppear}
            setMoveToOpenChannelCartIsAppear={setMoveToOpenChannelCartIsAppear}
          />
        )}
      </Flex>
    </Flex>
  );
});
CartRecommendedChannels.displayName = "CartRecommendedChannels";
