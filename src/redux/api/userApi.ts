import { api } from "./apiSlice";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    allUser: build.query({
      query: (arg) => {
        return {
          url: "/users",
          method: "GET",
          params: arg,
        };
      },
    }),
  }),
});

export const { useAllUserQuery } = userApi;
