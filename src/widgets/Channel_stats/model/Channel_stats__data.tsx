import { Channel_stats_item_props } from "@/entities/Channel_stats__widget/Channel_stats__item/model/Channel_stats_item__types";

export const channel_stats__items: Channel_stats_item_props[] = [
    {
        imgURL: 'images/Channel_stats/Channel_stats_rating.png',
        caption: "Рейтинг",
        amount: "509.2"
    },

    {
        imgURL: 'images/Channel_stats/Channel_stats_requests.png',
        caption: "Выполнено заявок",
        amount: "102"
    },

    {
        imgURL: 'images/Channel_stats/Channel_stats_stars.png',
        caption: "Оценка отзывов",
        amount: "5.0",
        stars: true
    }
]