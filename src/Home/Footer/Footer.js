import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <h4>ORGANIC FOOD - FARM FRESH</h4>
                <h6>Always ready for you, with 100% pure fruits and vegetables.</h6>
                <p> <Link className="text-decoration-none text-start" to="/dashboard">Dashboard</Link> | <Link className="text-decoration-none text-start " to="/explores">Explores</Link> | <Link className="text-decoration-none text-start" to="/contactus">Contact</Link> </p>
            </div>
        </div>
    );
};

export default Footer;