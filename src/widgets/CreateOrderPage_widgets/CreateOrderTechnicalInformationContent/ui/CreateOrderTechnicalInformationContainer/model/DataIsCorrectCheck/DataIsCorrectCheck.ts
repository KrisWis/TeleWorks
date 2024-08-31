import { FormTextAreaIsValid } from "../FormTextAreaIsValid/FormTextAreaIsValid";

export const DataIsCorrectCheck = (
  user_text: string,
  AgreeCheckboxIsActive: boolean
): boolean => {
  if (!FormTextAreaIsValid(user_text) || !AgreeCheckboxIsActive) {
    return false;
  }

  return true;
};
