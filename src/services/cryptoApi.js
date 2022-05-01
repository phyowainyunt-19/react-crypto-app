import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "5f33c65c11mshe2ac9f432e0dce0p18e2fejsn22aef5391d57",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

// we also need to pass the header
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

//* build in 'useGetPostsQuery()' hook
export const { useGetCryptoQuery } = cryptoApi;