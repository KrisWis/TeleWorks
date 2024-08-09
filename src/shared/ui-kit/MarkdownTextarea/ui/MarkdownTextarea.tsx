import {
  MarkdownTextareaProps,
  MarkdownTextareaTabsEnum,
} from "../model/MarkdownTextarea_types";
import styles from "./MarkdownTextarea.module.scss";
import { memo, useCallback, useState } from "react";
import { markdownTextareaTabs } from "../model/MarkdownTextarea_data";

export const MarkdownTextarea: React.FC<MarkdownTextareaProps> = memo(
  ({
    TextareaValue,
    setTextareaValue,
    maxSymbolsAmount,
    minSymbolsAmount,
  }): React.JSX.Element => {
    // TODO: Сделать функционал табов
    // Функционал табов
    const [MarkdownTextareaTabs, setMarkdownTextareaTabs] = useState<
      MarkdownTextareaTabsEnum[]
    >([]);

    const MarkdownTextareaTabOnClick = useCallback(
      (tab: MarkdownTextareaTabsEnum) => {
        if (MarkdownTextareaTabs.includes(tab)) {
          setMarkdownTextareaTabs(
            MarkdownTextareaTabs.filter((tabItem) => tabItem != tab)
          );
        } else {
          setMarkdownTextareaTabs([...MarkdownTextareaTabs, tab]);
        }
      },
      [MarkdownTextareaTabs]
    );

    // Валидация формы
    const [MarkdownTextAreaIsWarn, setMarkdownTextAreaIsWarn] =
      useState<boolean>(false);

    const OnChangeMarkdownTextarea = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
      const user_text = e.target.value;

      if (user_text.length <= maxSymbolsAmount) {
        setTextareaValue(user_text);
        setMarkdownTextAreaIsWarn(false);
      } else {
        setMarkdownTextAreaIsWarn(true);
      }
    };

    return (
      <div className={styles.markdownTextareaWrapper}>
        <div className={styles.markdownTextarea}>
          <div className={styles.markdownTextarea__tabs}>
            {(
              Object.keys(markdownTextareaTabs) as Array<
                keyof typeof markdownTextareaTabs
              >
            ).map((tab) => (
              <div
                key={tab}
                className={`${styles.markdownTextarea__tab} 
              ${MarkdownTextareaTabs.includes(tab) ? styles.markdownTextarea__tab__active : ""}
              ${tab == MarkdownTextareaTabsEnum.BOLD ? styles.markdownTextarea__tab__bold : ""}`}
                onClick={() => MarkdownTextareaTabOnClick(tab)}
              >
                {tab == MarkdownTextareaTabsEnum.ORDERED_LIST ? (
                  <>{markdownTextareaTabs[tab]}</>
                ) : (
                  <span className={styles.markdownTextarea__tab__title}>
                    {markdownTextareaTabs[tab]}
                  </span>
                )}
              </div>
            ))}
          </div>

          <textarea
            className={`${styles.markdownTextarea__textarea} ${MarkdownTextAreaIsWarn ? styles.markdownTextarea__textarea__warn : ""}`}
            name="MarkdownTextarea"
            value={TextareaValue}
            onChange={OnChangeMarkdownTextarea}
          ></textarea>
        </div>

        <span
          className={`UserEditPage__desc ${styles.markdownTextarea__symbols}`}
        >
          {TextareaValue.length} из {maxSymbolsAmount} символов (минимум{" "}
          {minSymbolsAmount})
        </span>
      </div>
    );
  }
);
