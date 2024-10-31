import { rtkApi } from "@/shared/config/api/rtkApi";
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
