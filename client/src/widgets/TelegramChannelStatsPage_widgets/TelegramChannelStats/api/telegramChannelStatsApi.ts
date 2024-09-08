import { rtkApi } from "@/app/layouts/BaseLayout/api/rtkApi";
import { TelegramChannelStatsInterface } from "..";

const TelegramChannelStatsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getChannel: build.query<TelegramChannelStatsInterface, number>({
      query: (id) => `channels/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetChannelQuery } = TelegramChannelStatsApi;
