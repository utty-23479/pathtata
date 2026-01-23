import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQueryHeaders = fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState()).authUser.token;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
});