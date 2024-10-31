import { transitionDuration } from "@/shared/const/global";

export const closeModal = (
  setModalAppear: React.Dispatch<React.SetStateAction<boolean>>,
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setModalAppear(false);

  const ModalOnOpenTimeOut = setTimeout(() => {
    setModalIsOpen(false);
    clearTimeout(ModalOnOpenTimeOut);
  }, transitionDuration);
};
