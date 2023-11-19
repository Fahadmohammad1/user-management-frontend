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
    teamMembers: build.query({
      query: (email) => {
        return {
          url: `/team/${email}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCreateTeamMutation, useTeamMembersQuery } = teamApi;
