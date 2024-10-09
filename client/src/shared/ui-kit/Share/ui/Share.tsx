import styles from "./Share.module.scss";
import { memo, useState } from "react";
import ShareSVG from "@/shared/assets/icons/Global/shareSVG.svg?react";
import { ShareProps, ShareTypes } from "../model/Share_types";
import { IncreaseScaleHover } from "../../IncreaseScaleHover";
import { ShareSocial } from "react-share-social";
import { Modal } from "../../Modal";
import { ModalTemplate } from "../../ModalTemplate";

const mobile_mediaQuery: MediaQueryList =
  window.matchMedia("(max-width: 700px)");

const shareSocialStyles = {
  root: {
    borderRadius: 5,
    boxShadow: "0 3px 10px 2px rgba(255, 105, 135, .3)",
    minWidth: "100%",
    padding: mobile_mediaQuery.matches ? 10 : 30,
  },
  copyContainer: {
    border: "1px solid rgba(255, 105, 135, .5)",
    background: "white",
    color: "#f55",
  },
  copyUrl: {
    color: "var(--black-color)",
    fontSize: mobile_mediaQuery.matches ? 10 : 16,
  },
  copyIcon: {
    color: "var(--main-color)",
  },
};

export const Share: React.FC<ShareProps> = memo(
  ({ type = ShareTypes.DEFAULT, url, IconClassName }): React.JSX.Element => {
    // Нажатие на кнопку "Поделиться"
    const [shareModalAppearIsOpen, setShareModalAppearIsOpen] =
      useState<boolean>(false);

    const [shareModalIsOpen, setShareModalIsOpen] = useState<boolean>(false);

    return (
      <>
        <IncreaseScaleHover>
          <div
            className={styles.Share}
            onClick={() => setShareModalIsOpen(true)}
          >
            <ShareSVG
              className={`${type == ShareTypes.RED ? styles.Share__red : ""}
              ${IconClassName} ${styles.Share__svg}`}
            />
          </div>
        </IncreaseScaleHover>

        {shareModalIsOpen && (
          <Modal
            id="shareModal"
            setModalIsOpen={setShareModalIsOpen}
            CustomSetModalAppear={setShareModalAppearIsOpen}
            CustomModalAppear={shareModalAppearIsOpen}
          >
            <ModalTemplate
              className={styles.Share__modal}
              setModalOpen={setShareModalIsOpen}
              CustomSetModalAppear={setShareModalAppearIsOpen}
            >
              <ShareSocial
                url={url}
                socialTypes={["whatsapp", "telegram", "email", "ok", "mailru"]}
                style={shareSocialStyles}
              />
            </ModalTemplate>
          </Modal>
        )}
      </>
    );
  }
);
