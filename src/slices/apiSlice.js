import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({baseUrl: 'https://demo-backend.fayizcj.in', credentials: 'include'})

export const apiSlice = createApi({
    baseQuery,
    tagTypes : ['User','Admin'],
    endpoints : (builder)=>({})
});

