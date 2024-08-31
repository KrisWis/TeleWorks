import styles from "./Share.module.scss";
import { memo } from "react";
import ShareSVG from "@/shared/assets/icons/Global/shareSVG.svg?react";

export const Share: React.FC = memo((): React.JSX.Element => {
  return <ShareSVG className={styles.Share} />;
});
