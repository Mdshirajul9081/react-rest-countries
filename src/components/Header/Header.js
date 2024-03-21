import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className='header bg-success'>
            
           <nav className='manu'>
            <a href="/home">home</a>
            <a href="/contract">contract</a>
            <a href="/about">about</a>
            <a href="others">others</a>
            </nav>
        </div>
    );
};

export default Header;