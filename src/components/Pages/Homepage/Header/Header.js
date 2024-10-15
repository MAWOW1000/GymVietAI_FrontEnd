import React, { useState, useEffect } from 'react';
import Wrapper from './HeaderWrapper';
import homepagelogo from '../../../../assets/images/homepagelogo.png';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaChevronDown, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const [scrolling, setScrolling] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Wrapper className={scrolling ? 'scrolled' : ''}>
            <div className="logo-container">
                <img src={homepagelogo} alt="Logo" className="logo" />
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#exercise">Exercise</a></li>
                    <li><a href="#chatbox">Chatbox</a></li>
                    <li><a href="#workout">Workout</a></li>
                    <li><a href="#meal">Meal</a></li>
                </ul>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
                <div className="dropdown">
                    <button className="dropdown-btn" onClick={toggleDropdown}>
                        <FaChevronDown />
                    </button>
                    {dropdownVisible && (
                        <ul className="dropdown-menu">
                            <li className="menu-item">
                                <FaSignInAlt className="menu-icon" />
                                <a href="#login">Login</a>
                            </li>
                            <hr className="divider" /> {/* Dấu gạch ngang giữa Login và Register */}
                            <li className="menu-item">
                                <FaUserPlus className="menu-icon" />
                                <a href="#register">Register</a>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </Wrapper>
    );
}

export default Header;
