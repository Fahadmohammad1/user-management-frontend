import { api } from "./apiSlice";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    allUser: build.query({
      query: (query) => {
        return {
          url: "/users",
          method: "GET",
          params: query,
        };
      },
    }),
  }),
});

export const { useAllUserQuery } = userApi;
