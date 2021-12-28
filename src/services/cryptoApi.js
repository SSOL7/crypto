import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '54c603e146msh18da9e11d7ab079p10e7ecjsnbd4a17d8ca82'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
        endpoints: (builder) => ({
            getCryptos: builder.query({
                query: (count) => createRequest(`/coins?limit=${count}`),
            }),
            getCryptoDetails: builder.query({
                query: (id) => createRequest(`/coin/${id}`),
            }),
            getCryptoHistory: builder.query({
                query: ({ id, timePeriod }) => createRequest(`coin/${id}/history/${timePeriod}`),
              }),
        })
});

export  const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;



// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '54c603e146msh18da9e11d7ab079p10e7ecjsnbd4a17d8ca82'
//     }
//   };

