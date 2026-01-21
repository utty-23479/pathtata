import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryHeaders } from "./headers";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    endpoints: () => ({})
});

export const baseApiHeaders = createApi({
    reducerPath: 'baseApiHeaders',
    baseQuery: baseQueryHeaders,
    endpoints: () => ({})
});