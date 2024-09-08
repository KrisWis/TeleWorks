import type { Meta, StoryObj } from "@storybook/react";
import { TelegramChannelStatsSubscribersAttractionPopup } from "./TelegramChannelStatsSubscribersAttractionPopup";
import { useState } from "react";
import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";

const meta = {
  title: "Popups/TelegramChannelStatsSubscribersAttractionPopup",
  component: TelegramChannelStatsSubscribersAttractionPopup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TelegramChannelStatsSubscribersAttractionPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    channel: {
      channelName: "Название канала",
      channelCategory: "Интерьер и строительство",
      channelImgURL: `${URL_PART}/global/serviceExample_authorImg.png`,
      channelLink: "/",
      channelPostImgURL: `${URL_PART}/global/portfolioCase__example_img.png`,
      commentsAmount: 11222,
      viewsAmount: 11222,
      repostsAmount: 11222,
      desc: `В России растёт (https://govoritmoskva.ru/news/422088/?ysclid=m01b54wo6i378989388) количество пациентов с клинической депрессией 

            В таком состоянии человек думает, что ему просто грустно, тревожно, поплачет и вроде справляется. Психологи призывают не бояться обращаться за помощью, в т.ч. в благотворительные организации. https://t.me/moscowmap`,
    },
    CustomSetModalAppear: useState,
    setModalOpen: useState,
  },
};
