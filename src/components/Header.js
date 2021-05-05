import React from 'react';
import Typed from 'react-typed';

function Header() {
    return (
        <div className="header-wrapper">
        <div className="main-info">
            <h1>My name is Balázs Tóth (Blas) and I am a full-stack developer</h1>
            <Typed 
                className="type-text"
                strings={["Web Development", "Google Ads", "Dynamic websites"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <a href="#" className="btn-main">Get in Touch</a>
            </div>
        </div>
    )
}

export default Header;
