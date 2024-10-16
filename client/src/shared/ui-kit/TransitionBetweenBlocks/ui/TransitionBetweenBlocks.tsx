import styles from "./TransitionBetweenBlocks.module.scss";
import { useEffect, useRef, useState } from "react";
import {
  TransitionBetweenBlock,
  TransitionBetweenBlocksProps,
} from "../model/TransitionBetweenBlocks_types";
import { Flex } from "../../Stack";

export const TransitionBetweenBlocks: React.FC<
  TransitionBetweenBlocksProps
> = ({
  className,
  blocks,
  transitionDuration,
  defaultIndex,
}): React.JSX.Element => {
  // Реализация переключения блоков
  const [visibleBlock, setVisibleBlock] =
    useState<TransitionBetweenBlock | null>(blocks[defaultIndex]);

  const [pastVisibleBlock, setPastVisibleBlock] =
    useState<TransitionBetweenBlock | null>(null);

  const VisibleBlockTimeOutRef = useRef<NodeJS.Timeout | null>();

  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    if (isMounted.current && !VisibleBlockTimeOutRef.current) {
      for (const block of blocks) {
        if (block.condition && block.id !== visibleBlock?.id) {
          setPastVisibleBlock(visibleBlock);

          setVisibleBlock(null);

          VisibleBlockTimeOutRef.current = setTimeout(() => {
            VisibleBlockTimeOutRef.current = null;

            // const timeoutForIsMounted = setTimeout(() => {
            //   isMounted.current = true;

            //   setVisibleBlock(block);

            //   clearTimeout(timeoutForIsMounted);
            // }, 0);

            isMounted.current = true;

            setVisibleBlock(block);

            const timeoutVisiblePastBlock = setTimeout(() => {
              setPastVisibleBlock(null);
              clearTimeout(timeoutVisiblePastBlock);
            }, 90);

            clearTimeout(VisibleBlockTimeOutRef.current!);
          }, transitionDuration);
        }
      }
    } else {
      isMounted.current = true;
    }
  }, [blocks, transitionDuration, visibleBlock]);

  return (
    <Flex max align="center" justify="center" className={className}>
      {pastVisibleBlock && (
        <Flex
          max
          data-testid={
            pastVisibleBlock["data-testid"] ||
            "TransitionBetweenBlocks.PastVisibleBlock"
          }
          className={styles.TransitionBetweenBlocks__disappear}
          style={{ animationDuration: `${transitionDuration + 100}ms` }}
        >
          {pastVisibleBlock.component}
        </Flex>
      )}
      {isMounted.current ? (
        visibleBlock && (
          <Flex
            max
            data-testid={
              visibleBlock["data-testid"] ||
              "TransitionBetweenBlocks.VisibleBlock"
            }
            style={{ animationDuration: `${transitionDuration}ms` }}
            className={styles.TransitionBetweenBlocks__appear}
          >
            {visibleBlock.component}
          </Flex>
        )
      ) : (
        <>
          {visibleBlock && (
            <Flex
              max
              data-testid={
                visibleBlock["data-testid"] ||
                "TransitionBetweenBlocks.VisibleBlock"
              }
            >
              {visibleBlock.component}
            </Flex>
          )}
        </>
      )}
    </Flex>
  );
};
