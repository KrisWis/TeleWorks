export enum ButtonTypes {
  RED = "Button__red",
  RED_WITHOUT_OUTLINE = "Button__red__withoutOutline",
  BLUE = "Button__blue",
  GRAY = "Button__gray",
  WHITE = "Button__white",
  BLACK = "Button__black",
  CYAN = "Button__cyan",
  BLACK_WITHOUT_OUTLINE = "Button__black__withoutOutline",
}

export interface ButtonProps {
  /**
   * Ссылка, на которую будет редиректить кнопка при нажатии
   */
  to?: string;

  /**
   * Текст кнопки
   */
  text?: string;
  className?: string;
  type: ButtonTypes;

  /**
   * Может ли кнопка быть зажата
   */
  canSelected?: boolean;

  onClick?: () => void;

  /**
   * Неактивна ли кнопка
   */
  ariaDisabled?: boolean;

  /**
   * Отображаемые в кнопке элементы
   */
  children?: React.ReactNode;
}
