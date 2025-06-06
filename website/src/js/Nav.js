import React, { useState, useEffect } from 'react';
import brandLogo from '../img/brand-logo.png';
import '../css/Nav.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Nav = () => {
    const [navShow, setNavShow] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    function handleNavButton() {
        setNavShow(prev => !prev);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY <= 100) {
                setShowNavbar(true);
            } else if (scrollY >= 150 && scrollY < 190) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="section-nav">
            <div className={`nav-bar-container ${showNavbar ? 'show' : 'hide'}`}>
                <nav className='nav-bar'>
                    <div className='nav-first-section'>
                        <img src={brandLogo} alt="brand logo" title='brand-logo' className='brand-logo' />
                        <h1 className='nav-first-section-text'>Travisa</h1>
                    </div>

                    <div className='nav-menu' onClick={handleNavButton}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </nav>

                <div className={`nav-link ${navShow ? 'show' : 'hide'}`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/pages">Pages</Link>
                    <Link to="/contact">Contact</Link>

                    <div className='nav-btns'>
                        <p className="search-btn"><FaSearch /></p>
                        <p className="quote-btn">GET A QUOTE</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nav;
