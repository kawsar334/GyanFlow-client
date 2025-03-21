import { createApi } from '@reduxjs/toolkit/query/react';
import { interceptorQuery } from './../customInterceptor/interceptor';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: interceptorQuery,
  endpoints: builder => ({
    // all GET API
    // getUsers: builder.query({
    //     query: () => "/users"
    // })

    // POST API - createUser
    createUser: builder.mutation({
      query: newUser => ({
        //   http://localhost:4000
        url: '/gyanflow/user/regiser',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = apiSlice;
export default apiSlice;
