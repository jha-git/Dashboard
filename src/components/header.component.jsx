import React from 'react';
import './header.styles.scss';
import User from '../assets/user-1.jpg';
const Header= ( ) => {
    return(
        <div className='header'>
            <div className="header__title">
                <h1>Jupiter</h1>
            </div>

            <div className="header__profile">
             
                    <img src={User} alt='profile'/>
            
                    <p>Chander Kumar</p>
            </div>

            
        </div>
    );
}

export default Header;


