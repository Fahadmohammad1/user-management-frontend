import { api } from "./apiSlice";

export const teamApi = api.injectEndpoints({
  endpoints: (build) => ({
    createTeam: build.mutation({
      query: (data) => {
        return {
          url: "/team",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useCreateTeamMutation } = teamApi;
