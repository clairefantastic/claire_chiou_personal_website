import React from 'react';
import CTA from './CTA';
import './header.css';
import selfie from '../../asset/claire_selfie.jpg'
import HeaderSocial from './HeaderSocial';
const Header = () => {
    return (
        <header id='home'>
            <div className="container header__container">
                <h5>iOS Developer</h5>
                <h1>Claire Chiou</h1>
                <CTA />
                <HeaderSocial />
                <div className='me'>
                    <img src={selfie} alt="me" />
                </div>
            </div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </header>

    )
};

export default Header;