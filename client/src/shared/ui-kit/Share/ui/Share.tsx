import styles from "./Share.module.scss";
import { memo, useState } from "react";
import ShareSVG from "@/shared/assets/icons/Global/shareSVG.svg?react";
import { ShareProps, ShareTypes } from "../model/Share_types";
import { IncreaseScaleHover } from "../../../lib/IncreaseScaleHover";
import { Modal } from "../../../lib/Modal";
import { ModalTemplate } from "../../ModalTemplate";
import { ShareSocialProvider, useShareSocialLib } from "./ShareSocialProvider";
import { PageLoadingComponent } from "../../../lib/PageLoading/PageLoadingComponent/PageLoadingComponent";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

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

// eslint-disable-next-line react/display-name
const ShareContent: React.FC<ShareProps> = memo(
  ({ type = ShareTypes.DEFAULT, url, IconClassName }): React.JSX.Element => {
    // Нажатие на кнопку "Поделиться"
    const [shareModalAppearIsOpen, setShareModalAppearIsOpen] =
      useState<boolean>(false);

    const [shareModalIsOpen, setShareModalIsOpen] = useState<boolean>(false);

    // Асинхронная подгрузка модуля shareSocial
    const { ShareSocial } = useShareSocialLib();

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
  },
);

// eslint-disable-next-line react/display-name
const ShareWithoutProvider: React.FC<ShareProps> = memo((props: ShareProps) => {
  const { isLoaded } = useShareSocialLib();

  if (!isLoaded) {
    return <PageLoadingComponent />;
  }

  return <ShareContent {...props} />;
});

export const Share: React.FC<ShareProps> = memo((props: ShareProps) => {
  return (
    <ShareSocialProvider>
      <ShareWithoutProvider {...props} />
    </ShareSocialProvider>
  );
});
Share.displayName = "Share";
