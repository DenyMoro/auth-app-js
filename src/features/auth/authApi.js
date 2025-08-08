import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body,
                headers: { 'Content-Type': 'application/json' },
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
