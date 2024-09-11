import { MarkdownTextareaProps } from "../model/MarkdownTextarea_types";
import styles from "./MarkdownTextarea.module.scss";
import { memo, useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "./MarkdownTextarea.scss";

const modules = {
  toolbar: [["bold", "italic"], [{ list: "ordered" }]],
};

const formats = ["bold", "italic", "list"];

export const MarkdownTextarea: React.FC<MarkdownTextareaProps> = memo(
  ({
    TextareaValue,
    setTextareaValue,
    maxSymbolsAmount,
    minSymbolsAmount,
  }): React.JSX.Element => {
    // Валидация и управление формой
    const [MarkDownTextAreaHtmlData, setMarkDownTextAreaHtmlData] =
      useState<string>("");

    const [TextareaValuePast, setTextareaValuePast] = useState<string>("");

    const OnChangeMarkdownTextarea = (html: string, value: string): void => {
      if (value.length <= maxSymbolsAmount) {
        setTextareaValue(value);
        setMarkDownTextAreaHtmlData(html);
        setTextareaValuePast(value);
      } else {
        setMarkDownTextAreaHtmlData(TextareaValuePast);
        setTextareaValue(TextareaValuePast);
      }
    };

    useEffect(() => {
      if (
        TextareaValue ==
        `
`
      ) {
        setTextareaValue("");
      }
    }, [TextareaValue, setTextareaValue]);

    useEffect(() => {
      if (TextareaValue) {
        setMarkDownTextAreaHtmlData(TextareaValue);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div className={styles.markdownTextareaWrapper}>
        <ReactQuill
          className={`${styles.markdownTextarea__textarea} ${TextareaValue.length >= maxSymbolsAmount ? styles.markdownTextarea__textarea__warn : ""}`}
          theme="snow"
          value={MarkDownTextAreaHtmlData}
          onChange={(value, _2, _3, editor) =>
            OnChangeMarkdownTextarea(value, editor.getText())
          }
          formats={formats}
          modules={modules}
        />
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
