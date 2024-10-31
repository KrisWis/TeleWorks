import {
  HeaderMenuCategories,
  HeaderMenuItems,
  HeaderServicesCategories,
  HeaderServicesItems,
} from "./Header_types";

// Иконки меню
import AddSVG from "@/shared/assets/icons/Header/Menu/AddSVG.svg?react";
import GuarantorChatSVG from "@/shared/assets/icons/Header/Menu/GuarantorChatSVG.svg?react";
import PersonSVG from "@/shared/assets/icons/Header/Menu/PersonSVG.svg?react";
import ReportsSVG from "@/shared/assets/icons/Header/Menu/ReportsSVG.svg?react";
import SupportChatSVG from "@/shared/assets/icons/Header/Menu/SupportChatSVG.svg?react";
import MenuBlogSVG from "@/shared/assets/icons/Header/Menu/BlogSVG.svg?react";
import FAQSVG from "@/shared/assets/icons/Header/Menu/FAQSVG.svg?react";
import IncreaseBalanceSVG from "@/shared/assets/icons/Header/Menu/IncreaseBalanceSVG.svg?react";
import MyActsSVG from "@/shared/assets/icons/Header/Menu/MyActsSVG.svg?react";
import OperationsHistorySVG from "@/shared/assets/icons/Header/Menu/OperationHistorySVG.svg?react";
import OutputMoneySVG from "@/shared/assets/icons/Header/Menu/OutputMoneySVG.svg?react";
import WeInTelegramSVG from "@/shared/assets/icons/Header/Menu/WeInTelegramSVG.svg?react";
import SupportSVG from "@/shared/assets/icons/Header/Menu/SupportSVG.svg?react";
import RefSystemSVG from "@/shared/assets/icons/Header/Menu/RefSystemSVG.svg?react";

// Иконки сервисов
import BuyAdsSVG from "@/shared/assets/icons/Header/ServicesDropdown/BuyAdsSVG.svg?react";
import BuyChannelSVG from "@/shared/assets/icons/Header/ServicesDropdown/BuyChannelSVG.svg?react";
import BuyServiceSVG from "@/shared/assets/icons/Header/ServicesDropdown/BuyServiceSVG.svg?react";
import GuarantorServicesSVG from "@/shared/assets/icons/Header/ServicesDropdown/GuarantorServicesSVG.svg?react";
import ProcurementAdsSVG from "@/shared/assets/icons/Header/ServicesDropdown/ProcurementAdsSVG.svg?react";
import TurnKeyChannelsSVG from "@/shared/assets/icons/Header/ServicesDropdown/TurnKeyChannelsSVG.svg?react";
import TurnKeyWebsiteSVG from "@/shared/assets/icons/Header/ServicesDropdown/TurnKeyWebsiteSVG.svg?react";
import StatsSVG from "@/shared/assets/icons/Header/ServicesDropdown/StatsSVG.svg?react";
import BlogSVG from "@/shared/assets/icons/Header/ServicesDropdown/BlogSVG.svg?react";
import KindDeedsSVG from "@/shared/assets/icons/Header/ServicesDropdown/KindDeedsSVG.svg?react";
import { AppRoutes } from "@/shared/const/app";

export const userIsAuth = true;
export const username: `@${string}` = "@TeleWorks";

export const headerServicesItems: HeaderServicesItems = {
  [HeaderServicesCategories.CATALOGS]: [
    {
      icon: <BuyAdsSVG />,
      title: "Купить рекламу",
      link: "/",
    },

    {
      icon: <BuyChannelSVG />,
      title: "Купить канал",
      link: "/",
    },

    {
      icon: <BuyServiceSVG />,
      title: "Купить услугу",
      link: "/",
    },
  ],
  [HeaderServicesCategories.OTHER]: [
    {
      icon: <TurnKeyChannelsSVG />,
      title: "Каналы под ключ",
      link: "/",
    },

    {
      icon: <ProcurementAdsSVG />,
      title: "Закуп рекламы",
      link: "/",
    },

    {
      icon: <GuarantorServicesSVG />,
      title: "Услуги гаранта",
      link: "/",
    },

    {
      icon: <TurnKeyWebsiteSVG />,
      title: "Сайт под ключ",
      link: AppRoutes.TURNKEY_WEBSITES,
    },
  ],

  [HeaderServicesCategories.USEFUL]: [
    {
      icon: <StatsSVG />,
      title: "Статистика",
      link: "/",
    },

    {
      icon: <BlogSVG />,
      title: "Блог",
      link: AppRoutes.BLOG,
    },

    {
      icon: <KindDeedsSVG />,
      title: "Добрые дела",
      link: AppRoutes.KIND_DEEDS,
    },
  ],
};

export const headerMenuItems: HeaderMenuItems = {
  [HeaderMenuCategories.ADMIN]: [
    {
      icon: <GuarantorChatSVG />,
      title: "Чат Гаранта",
      link: "/",
    },

    {
      icon: <ReportsSVG />,
      title: "Жалобы",
      link: "/",
    },

    {
      icon: <SupportChatSVG />,
      title: "Чат поддержки",
      link: "/",
    },
    {
      icon: <AddSVG />,
      title: "///",
      link: "/",
    },
    {
      icon: <PersonSVG />,
      title: "/////",
      link: "/",
    },
  ],
  [HeaderMenuCategories.ADVERTISERS]: [
    {
      icon: <GuarantorChatSVG />,
      title: "Мои проекты",
      link: AppRoutes.MYPROJECTS,
    },

    {
      icon: <ReportsSVG />,
      title: "Мои готовые предложения",
      link: "/",
    },

    {
      icon: <SupportChatSVG />,
      title: "Мои шаблоны",
      link: "/",
    },
    {
      icon: <AddSVG />,
      title: "Мои подборки каналов",
      link: "/",
    },
    {
      icon: <PersonSVG />,
      title: "Агентский доступ",
      link: "/",
    },
  ],
  [HeaderMenuCategories.FINANCES]: [
    {
      icon: <IncreaseBalanceSVG />,
      title: "Пополнение баланса",
      link: "/",
    },

    {
      icon: <OutputMoneySVG />,
      title: "Вывод средств",
      link: "/",
    },

    {
      icon: <RefSystemSVG />,
      title: "Реферальная система",
      link: "/",
    },
    {
      icon: <MyActsSVG />,
      title: "Мои счета и акты",
      link: "/",
    },
    {
      icon: <OperationsHistorySVG />,
      title: "История операций",
      link: "/",
    },
  ],
  [HeaderMenuCategories.INFORMATION]: [
    {
      icon: <FAQSVG />,
      title: "FAQ",
      link: AppRoutes.FAQ,
    },

    {
      icon: <MenuBlogSVG />,
      title: "Блог",
      link: AppRoutes.BLOG,
    },

    {
      icon: <SupportSVG />,
      title: "Поддержка",
      link: "https://t.me/TeleWorksSupportbot",
    },
    {
      icon: <WeInTelegramSVG />,
      title: "Мы в телеграм",
      link: "/",
    },
  ],
};
