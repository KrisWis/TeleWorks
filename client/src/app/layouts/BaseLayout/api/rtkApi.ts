import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiBaseURL } from "../model/BaseLayout__data";

export const rtkApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseURL }),
  endpoints: () => ({}),
});
