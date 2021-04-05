import React, { useState } from 'react';
import '../../App.css';

const Navbar = () => {
    const [showLinks , setShowLinks] = useState(false);

    return (
        <div className='Navbar'>
            <div className="leftSide">
                <div className="links" id={showLinks ? 'hidden' : ''}>
                    <a href="">Home</a>
                    <a href="">Feddback</a>
                    <a href="">About us</a>
                    <a href="">Contact us</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>open</button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder='search here'/>
                <button>Search</button>
            </div> 
        </div>
    );
};

export default Navbar;