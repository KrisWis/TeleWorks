export interface RegModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  CustomSetModalAppear: React.Dispatch<React.SetStateAction<boolean>>;
}

export enum RegModalCheckBoxes {
  MAILING = "Я хочу получать Email-рассылку от TeleWorks",
  AGREEMENT = "Даю свое согласие на обработку персональных данных с политикой обработки персональных данных и пользовательским соглашением ознакомлен",
}

export const RegModalCheckBoxesItems: RegModalCheckBoxes[] = [
  RegModalCheckBoxes.MAILING,
  RegModalCheckBoxes.AGREEMENT,
];
