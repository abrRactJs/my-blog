import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <a href="/home">Home</a>
            <a href="/blog">Blog</a>
            <a href="/more">More</a>
        </div>
    );
};

export default Header;