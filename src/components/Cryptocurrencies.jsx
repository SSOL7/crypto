import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, loading, error } = useGetCryptosQuery(count);
    const [cryptoList, setCryptoList] = useState(cryptosList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCryptoList(cryptosList?.data?.coins);

        const filteredData = cryptosList?.data?.coins.filter(crypto => crypto.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setCryptoList(filteredData);
    }, [cryptosList, searchTerm]);
    
    if(!cryptoList) {
        return <p>Loading...</p>
    }

    return (
        <>
        {!simplified &&(
            <div>
                <input onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

        )}


        <div className="currency-list">
            <h1>Crypto currencies</h1>
            {cryptoList?.map((currency) => (
        <div key={currency.id} className="currency-list">
            <Link to={`/cryptocurrencies/${currency.id}`}>
                <h2>Market Ranking: {currency.rank}</h2>
                <img src={currency.iconUrl} alt={currency.name} />
                <h3>{currency.price}</h3>
                <h3>{currency.marketCap.toLocaleString()}</h3>
                <h3>{currency.change}%</h3>
            </Link>
            <h2>{currency.name}</h2>
        </div>
      ))}
        </div>
        </>
    )
}

export default Cryptocurrencies
