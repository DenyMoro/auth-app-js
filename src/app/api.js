import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
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
        getProducts: builder.query({
            query: () => 'products',
        }),
    }),
});

export const { useLoginMutation, useGetProductsQuery } = api;
