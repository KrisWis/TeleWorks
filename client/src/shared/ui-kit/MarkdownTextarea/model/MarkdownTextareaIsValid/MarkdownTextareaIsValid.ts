export const MarkdownTextAreaIsValid = (
  user_text: string,
  maxSymbolsAmount: number,
  minSymbolsAmount: number,
): boolean => {
  if (
    user_text.length > maxSymbolsAmount ||
    user_text.length < minSymbolsAmount
  ) {
    return false;
  }

  return true;
};
