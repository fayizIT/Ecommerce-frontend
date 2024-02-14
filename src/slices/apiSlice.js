import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Admin'],
  endpoints: (builder) => ({
    // Example endpoint (replace this with your actual API endpoint)
    getUsers: builder.query({
      query: () => 'users', // Replace 'users' with your actual endpoint
      providesTags: (result, error, id) => [{ type: 'User', id }]
    }),
  }),
});

// Export the generated hooks for the API
export const { useGetUsersQuery } = apiSlice;
