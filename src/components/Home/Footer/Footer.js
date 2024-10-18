import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import homepagelogo from '../../../assets/images/homepagelogo.png';
import Wrapper from "./FooterWrapper"

function Footer(){
    return(
        <Wrapper>
            <div className="footer">
                <div className="container">
                    <div className="items">
                        <div className="item">
                            <img src={homepagelogo} alt="Logo" className="logo" />
                            <p>I am the bone of my sword</p>
                            <div className='icon'>
                                <a><FaFacebookF /></a>
                                <a><FaTwitter /></a>
                                <a><FaYoutube /></a>
                                <a><FaInstagramSquare /></a>
                            </div>
                        </div>
                        
                        <div className="item">
                            <h4>Useful links</h4>
                            <ul>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Classes</li>
                                <li>Contact</li>
                            </ul>
                        </div>
        
                        <div className="item">
                        <h4>Support</h4>
                            <ul>
                                <li>Login</li>
                                <li>My account</li>
                                <li>Subscribe</li>
                                <li>Contact</li>
                            </ul>
                        </div>
        
                        <div className="item">
                            <h4>Tips & Guides</h4>

                            <div>
                                <h6>Physical may help prevent depression, anxiety</h6>
                            </div>

                            <div className="meta-info">
                                <p>3 min read</p>
                                <span className="separator">|</span>
                                <p>20 Comment</p>
                            </div>

                            <div className="meta-separator"></div>

                            <div>
                                <h6>Fitness: The best excercise to lose belly fat and tone up...</h6>
                            </div>

                            <div className="meta-info">
                                <p>3 min read</p>
                                <span className="separator">|</span>
                                <p>20 Comment</p>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Footer