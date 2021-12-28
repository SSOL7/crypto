import moment from 'moment';
import React from 'react'

import { useGetNewsQuery } from '../services/CryptoNews'

const News = ({simplified}) => {
    const  {data: cryptoNews } = useGetNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 });

    if(!cryptoNews?.value) return null;

    const demoImage = 'https://www.cryptocompare.com/media/20646/btc.png';

    return (
        <div>
            <h1>News</h1>
            {cryptoNews.value.map((news, i) => (
                <div key={i}>
                    <h2>{news.title}</h2>
                    <a href={news.url}>{news.url}
                        <div>
                            <h1>{news.name}</h1>
                            <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt={news.name} />
                        </div>
                        <p>{news.description > 100 ? `${news.description.substring(0, 100 )}...`
                            : news.description}
                        {'}'}
                        </p>
                        <div>
                            <src src={news.provider[0]?.image?.thumbnail?.contentUrl  || demoImage} alt={news.name} />
                            <h2>{moment(news.datePublished).startOf('ss').fromNow()}</h2>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default News
