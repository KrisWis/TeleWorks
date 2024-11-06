import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Функция, которая совершает скролл к верху страницы
 */

export const ScrollToTop: React.FC = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
