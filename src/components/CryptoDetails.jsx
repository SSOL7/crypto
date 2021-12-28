import React, {useState} from 'react';
import {useParams } from 'react-router-dom';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';
import Linechart from './Linechart';

const CryptoDetails = () => {
    const { id } = useParams();

    const [timePeriod, setTimePeriod] = useState('7d');
    const { data, loading, error } = useGetCryptoDetailsQuery(id);
    const { data: coinHistory } = useGetCryptoHistoryQuery({id, timePeriod});
    const cryptoDetails = data?.data?.coin;

    if(error) {
        return null;
    }
    if(loading) {
        return null
    }
    if(!cryptoDetails) {
        return null
    }

const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails.price && cryptoDetails.price}`,},
    { title: 'Rank', value: cryptoDetails.rank },
    { title: '24h Volume', value: `$ ${cryptoDetails.volume && cryptoDetails.volume}` },
    { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && cryptoDetails.marketCap}`},
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails.allTimeHigh.price}`},
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, },
    { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, },
    { title: 'Aprroved Supply', value: cryptoDetails.approvedSupply },
    { title: 'Total Supply', value: `$ ${cryptoDetails.totalSupply}` },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails.circulatingSupply}` },
  ];

    return (
        <div>
            <h1>Crypto details</h1>
            <h1>{cryptoDetails.name}</h1>
            <h2>{cryptoDetails.price}</h2>
            <select onChange={(value) => setTimePeriod(value)} defaultValue={'7d'}>
                {time.map((date) => <option key={date}>{date}</option>)}
            </select>
            <Linechart coinHistory={coinHistory} currentPrice={cryptoDetails.price}  coinName={cryptoDetails.name}/>
            {stats.map(({title,value}) => (
                <div key={value.uuid}>
                <h2>{title}</h2>
                <h2>{value}</h2>
                </div>
            ))}

        </div>
    )
}

export default CryptoDetails