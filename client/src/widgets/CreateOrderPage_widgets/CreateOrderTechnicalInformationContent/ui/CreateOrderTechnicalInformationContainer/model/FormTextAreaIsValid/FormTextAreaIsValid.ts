export const CreateOrderTechnicalInformationFormTextAreaMaxSymbolsAmount = 1200;

export const CreateOrderTechnicalInformationFormTextAreaMinSymbolsAmount = 100;

export const FormTextAreaIsValid = (user_text: string): boolean => {
  if (
    user_text.length >
      CreateOrderTechnicalInformationFormTextAreaMaxSymbolsAmount ||
    user_text.length <
      CreateOrderTechnicalInformationFormTextAreaMinSymbolsAmount
  ) {
    return false;
  }

  return true;
};
