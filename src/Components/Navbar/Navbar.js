import React from 'react';
import '../../App.css';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="leftSide">
                <div className="links">
                    <a href="">Home</a>
                    <a href="">Feddback</a>
                    <a href="">About us</a>
                    <a href="">Contact us</a>
                </div>
            </div>
            <div className="rightSide"></div>
        </div>
    );
};

export default Navbar;