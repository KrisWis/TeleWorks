import type { Meta, StoryObj } from "@storybook/react";
import { TelegramChannelStatsSubscribersAttractionOnHoursItem } from "./TelegramChannelStatsSubscribersAttractionOnHoursItem";

const meta = {
  title: "Dropdowns/TelegramChannelStatsSubscribersAttractionOnHoursItem",
  component: TelegramChannelStatsSubscribersAttractionOnHoursItem,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TelegramChannelStatsSubscribersAttractionOnHoursItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: {
      hour: 16,
      referencesAmount: 30,
      repostsAmount: 1,
      changesAmount: 22,
      changeType: "+",
      referencesChannels: [
        {
          channelName: "Название канала",
          viewsAmountInThousands: 24.7,
          subscribersIncreaseAmount: 35,
          category: "Новости и СМИ",
          channelImgURL: `/global/serviceExample_authorImg.png`,
          postImgURL: `/global/portfolioCase__example_img.png`,
          desc: `В России растёт (https://govoritmoskva.ru/news/422088/?ysclid=m01b54wo6i378989388) количество пациентов с клинической депрессией 

            В таком состоянии человек думает, что ему просто грустно, тревожно, поплачет и вроде справляется. Психологи призывают не бояться обращаться за помощью, в т.ч. в благотворительные организации. https://t.me/moscowmap`,
          postViewsAmount: 11222,
          postRepostsAmount: 11222,
          postCommentsAmount: 11222,
          channelLink: "/channel",
        },

        {
          channelName: "Название канала2",
          viewsAmountInThousands: 24.7,
          subscribersIncreaseAmount: 35,
          category: "Интерьер и строительство",
          channelImgURL: `/global/serviceExample_authorImg.png`,
          postImgURL: `/global/portfolioCase__example_img.png`,
          desc: `Описание

            В таком состоянии человек думает, что ему просто грустно, тревожно, поплачет и вроде справляется. Психологи призывают не бояться обращаться за помощью, в т.ч. в благотворительные организации. https://t.me/moscowmap`,
          postViewsAmount: 11222,
          postRepostsAmount: 11222,
          postCommentsAmount: 11222,
          channelLink: "/channel",
        },

        {
          channelName: "Название канала3",
          viewsAmountInThousands: 24.7,
          subscribersIncreaseAmount: 35,
          category: "Интерьер и строительство",
          channelImgURL: `/global/serviceExample_authorImg.png`,
          postImgURL: `/global/portfolioCase__example_img.png`,
          desc: `Описание`,
          postViewsAmount: 11222,
          postRepostsAmount: 11222,
          postCommentsAmount: 11222,
          channelLink: "/channel",
        },
      ],
    },
  },
};
