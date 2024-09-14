import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogForReaders.module.scss";
import { memo } from "react";
import { blogForReadersItems } from "../model/BlogForReaders_data";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";
import { Link } from "react-router-dom";

export const BlogForReaders: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex
      direction="column"
      className={`${styles.BlogForReaders} Page__GrayBorderWrapper`}
    >
      <Flex
        className={styles.BlogForReaders__header}
        justify="between"
        align="center"
      >
        <h6 className="BlogPage__minicaption">От ТeleWorks для читателей</h6>

        <IncreaseScaleHover>
          <a className={styles.BlogForReaders__more} href="#">
            Больше от TeleWorks
          </a>
        </IncreaseScaleHover>
      </Flex>

      <div className={styles.BlogForReaders__items}>
        {blogForReadersItems.map((item) => (
          <Link
            className={styles.BlogForReaders__item}
            key={item.id}
            to={`${item.id}`}
          >
            <Flex direction="column" gap="10">
              <img
                className={styles.BlogForReaders__item__img}
                src={item.imgURL}
                alt="Изображение поста для читателей"
              />

              <span className={styles.BlogForReaders__item__title}>
                {item.title}
              </span>
            </Flex>
          </Link>
        ))}
      </div>
    </Flex>
  );
});
