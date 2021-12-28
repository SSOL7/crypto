import React from 'react'
import { Link } from 'react-router-dom';
import {News, Cryptocurrencies} from '../components'

import { useGetCryptosQuery } from '../services/cryptoApi';

const Homepage = () => {
    const { data, loading, error } = useGetCryptosQuery(10);
    const cryptoStats = data?.data?.stats;



    if(loading) return <p>Loading...</p>
    if(error) return <h1>Internet connection error</h1>


    return (
        <>
        <div>
            <h1>Crypto Stats:</h1>
            <h1>Total {cryptoStats?.total.toLocaleString()}</h1>
            <h1>Total exchanges {cryptoStats?.totalExchanges}</h1>
            <h1>Total Market Cap {cryptoStats?.totalMarketCap.toLocaleString()}</h1>
            <h1>Total 24h volume {cryptoStats?.total24hVolume.toLocaleString()}</h1>
            <h1>Total markets {cryptoStats?.totalMarkets.toLocaleString()}</h1>
        </div>
        
        <div>
            <h1>Top 10 crypto currenciesin the world</h1>
            <Link to="/cryptocurrencies">Show more</Link>
        </div>
        <Cryptocurrencies simplified />
        <div>
            <h2>Latest crypto news</h2>
            <Link to="/news">Show more</Link>
        </div>
        <News simplified />
        </>
    )
}

export default Homepage
