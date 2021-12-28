import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Meta from '../images/meta.jpg';
import './styles/styles.css';

const Navbar = () => {
    return (
        <div className="nav-container">
            <NavLink to="/" className="img-link"><img src={Meta} alt="" /></NavLink>
            {/* <div className="emblem-container">
                <Link to="/">Metaverse</Link>
            </div> */}
            {/* <img className="metaemblem" src={Meta} alt="meta" /> */}
            <div>
                <NavLink to="/" className="nav-link">Home</NavLink>
            </div>
            <div>
                <Link to="/cryptocurrencies" className="nav-link">Cryptocurrencies</Link>
            </div>
            <div>
                <Link to="/exchanges" className="nav-link">Exchanges</Link>
            </div>
            <div>
                <Link to="/news" className="nav-link">News</Link>
            </div>
        </div>
    )
}

export default Navbar
