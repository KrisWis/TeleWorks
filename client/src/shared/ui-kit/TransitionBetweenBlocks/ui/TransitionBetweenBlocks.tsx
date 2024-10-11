import styles from "./TransitionBetweenBlocks.module.scss";
import { useEffect, useRef, useState } from "react";
import {
  TransitionBetweenBlock,
  TransitionBetweenBlocksProps,
} from "../model/TransitionBetweenBlocks_types";

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
            setPastVisibleBlock(null);

            VisibleBlockTimeOutRef.current = null;

            isMounted.current = false;

            const timeoutForIsMounted = setTimeout(() => {
              isMounted.current = true;

              setVisibleBlock(block);

              clearTimeout(timeoutForIsMounted);
            }, 0);

            clearTimeout(VisibleBlockTimeOutRef.current!);
          }, transitionDuration);
        }
      }
    } else {
      isMounted.current = true;
    }
  }, [blocks, transitionDuration, visibleBlock]);

  return (
    <div className={className}>
      {pastVisibleBlock && (
        <div
          data-testid={
            pastVisibleBlock["data-testid"] ||
            "TransitionBetweenBlocks.PastVisibleBlock"
          }
          className={styles.TransitionBetweenBlocks__disappear}
          style={{ animationDuration: `${transitionDuration}ms` }}
        >
          {pastVisibleBlock.component}
        </div>
      )}
      {isMounted.current ? (
        visibleBlock && (
          <div
            data-testid={
              visibleBlock["data-testid"] ||
              "TransitionBetweenBlocks.VisibleBlock"
            }
            style={{ animationDuration: `${transitionDuration}ms` }}
            className={styles.TransitionBetweenBlocks__appear}
          >
            {visibleBlock.component}
          </div>
        )
      ) : (
        <>
          {visibleBlock && (
            <div
              data-testid={
                visibleBlock["data-testid"] ||
                "TransitionBetweenBlocks.VisibleBlock"
              }
            >
              {visibleBlock.component}
            </div>
          )}
        </>
      )}
    </div>
  );
};
