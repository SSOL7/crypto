import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Navbar, Homepage, Exchanges, Cryptocurrencies, News, CryptoDetails }  from './components';
import './components/styles/styles.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
            <Navbar />
            </div>
            <div className="main">
                <div className="routes">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/exchanges" element={<Exchanges />} />
                        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                        <Route path="/cryptocurrencies/:id" element={<CryptoDetails />} />
                        <Route path="/news" element={<News />} />
                    </Routes>
                </div>
            </div>
            <div className="footer">
                <Link to="/">Home</Link>
                    <span>Crypto Universe</span>
                    <br />
                    <span>Copyleft: Shaho Soltani</span>
            </div>
        </div>
    );
}

export default App
