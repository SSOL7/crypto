import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const crypto_news_headers = {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '54c603e146msh18da9e11d7ab079p10e7ecjsnbd4a17d8ca82'
      }

      const news_url = 'https://bing-news-search1.p.rapidapi.com';

      const create_request = (url) => ({ url, headers: crypto_news_headers });

      export const newsApi = createApi({
        reducerPath: 'cryptoNews',
        baseQuery: fetchBaseQuery({news_url}),
            endpoints: (builder) => ({
                GetNews: builder.query({
                    query: (newsCategory ,count) => create_request(`/news/search?q=${newsCategory}&count=${count}`),
                })
            })
    });
      
export const { useGetNewsQuery } = newsApi;
