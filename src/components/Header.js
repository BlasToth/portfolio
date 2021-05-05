import React from 'react';
import Typed from 'react-typed';

function Header() {
    return (
        <div>
            <h2>My name is Balázs Tóth (Blas) and I am a full-stack developer</h2>
            <Typed 
                className="type-text"
                strings={["Web Development", "Google Ads", "Dynamic websites"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                
            />
        </div>
    )
}

export default Header;
