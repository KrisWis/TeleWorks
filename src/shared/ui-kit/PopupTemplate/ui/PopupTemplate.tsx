import { PopupTemplateProps } from "../types/PopupTemplate_types";
import styles from "./PopupTemplate.module.scss";
import { memo, MouseEventHandler } from "react";

export const PopupTemplate: React.FC<PopupTemplateProps> = memo(
  ({ children, setPopupOpen, CustomSetModalAppear }): React.JSX.Element => {
    const CloseModal: MouseEventHandler<SVGSVGElement> = () => {
      CustomSetModalAppear(false);

      setTimeout(() => {
        setPopupOpen(false);
      }, 500);
    };

    return (
      <div className={styles.popupTemplate}>
        <svg
          className={styles.popupTemplate__close}
          onClick={CloseModal}
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.3991 2.11839C18.6268 1.88264 18.7528 1.56688 18.75 1.23914C18.7471 0.911392 18.6156 0.597877 18.3839 0.366117C18.1521 0.134357 17.8386 0.00289528 17.5109 4.72531e-05C17.1831 -0.00280077 16.8674 0.123193 16.6316 0.35089L9.39036 7.59214L2.14911 0.35089C1.91336 0.123193 1.5976 -0.00280077 1.26986 4.72531e-05C0.942113 0.00289528 0.628597 0.134357 0.396837 0.366117C0.165077 0.597877 0.0336155 0.911392 0.0307674 1.23914C0.0279194 1.56688 0.153913 1.88264 0.38161 2.11839L7.62286 9.35964L0.38161 16.6009C0.262223 16.7162 0.166995 16.8541 0.101484 17.0066C0.0359723 17.1591 0.00148947 17.3232 4.71963e-05 17.4891C-0.00139507 17.6551 0.0302318 17.8197 0.0930829 17.9733C0.155934 18.1269 0.24875 18.2665 0.366116 18.3839C0.483482 18.5012 0.623047 18.5941 0.776668 18.6569C0.930288 18.7198 1.09489 18.7514 1.26086 18.75C1.42684 18.7485 1.59086 18.714 1.74337 18.6485C1.89587 18.583 2.0338 18.4878 2.14911 18.3684L9.39036 11.1271L16.6316 18.3684C16.8674 18.5961 17.1831 18.7221 17.5109 18.7192C17.8386 18.7164 18.1521 18.5849 18.3839 18.3532C18.6156 18.1214 18.7471 17.8079 18.75 17.4801C18.7528 17.1524 18.6268 16.8366 18.3991 16.6009L11.1579 9.35964L18.3991 2.11839Z"
            fill="#FF5555"
          />
        </svg>

        <div className={styles.popupTemplate__wrapper}>{children}</div>
      </div>
    );
  }
);
