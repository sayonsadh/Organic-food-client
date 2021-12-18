import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'; 

const Banner = () => {
    return (
        <div className="banner-bg">
            <div className="details">
                <div className="about">
                    <h1>A Huge Variety Fruits <br /> & Vegetables.</h1>
                    <p>We are always ready to provide farm fresh fruits and vegetables. <br /> <span className="company-name fs-5">ORGANIC FOOD</span> authority give guaranted that our <br /> product 100% organic also farm fresh. If you need pure food jsut contact with us. </p>
                    <Link to="/contactus"><button className="banner-button">Contact Us</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;