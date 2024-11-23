import Calendar from "react-calendar";
import "../ui/Buy_ads_calendar.scss";
import { memo, useEffect, useState } from "react";

export const Buy_ads_calendar: React.FC = memo((): React.JSX.Element => {
  /* Стилилизация кнопок навигации */

  useEffect(() => {
    const calendar_prevButton: HTMLElement | null = document.querySelector(
      ".react-calendar__navigation__prev-button",
    );
    const calendar_nextButton: HTMLElement | null = document.querySelector(
      ".react-calendar__navigation__next-button",
    );

    if (calendar_prevButton) {
      calendar_prevButton.innerHTML = `<svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.11816 10.0154C0.644487 9.5417 0.644487 8.77373 1.11816 8.30005L8.83712 0.581094C9.31079 0.107421 10.0788 0.107421 10.5524 0.581094C11.0261 1.05477 11.0261 1.82274 10.5524 2.29642L3.69115 9.15771L10.5524 16.019C11.0261 16.4927 11.0261 17.2607 10.5524 17.7343C10.0788 18.208 9.31079 18.208 8.83712 17.7343L1.11816 10.0154ZM25.4639 10.3706H1.97582V7.9448H25.4639V10.3706Z" />
            </svg>`;
    }

    if (calendar_nextButton) {
      calendar_nextButton.innerHTML = `<svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.7285 10.0154C25.2022 9.5417 25.2022 8.77373 24.7285 8.30005L17.0096 0.581094C16.5359 0.107421 15.7679 0.107421 15.2942 0.581094C14.8206 1.05477 14.8206 1.82274 15.2942 2.29642L22.1555 9.15771L15.2942 16.019C14.8206 16.4927 14.8206 17.2607 15.2942 17.7343C15.7679 18.208 16.5359 18.208 17.0096 17.7343L24.7285 10.0154ZM0.382812 10.3706H23.8709V7.9448H0.382812V10.3706Z" />
            </svg>`;
    }
  }, []);

  /* Множественное выделение дат */
  const [dates, setDates] = useState<number[]>([]);

  const onClickDay = (date: Date): void => {
    if (!dates.includes(date.getTime())) {
      setDates([...dates, date.getTime()]);
    } else {
      setDates(dates.filter((date_time) => date_time !== date.getTime()));
    }
  };

  const tileClassName = (date: Date): string[] => {
    if (dates.includes(date.getTime())) {
      return ["buy_ads_calendar--active"];
    } else {
      return [];
    }
  };

  return (
    <Calendar
      prevAriaLabel="Кнопка перелистывания назад"
      nextAriaLabel="Кнопка перелистывания вперёд"
      tileClassName={(date) => tileClassName(date.date)}
      minDate={new Date()}
      locale="ru-RU"
      onClickDay={(date) => onClickDay(date)}
    />
  );
});
Buy_ads_calendar.displayName = "Buy_ads_calendar";
