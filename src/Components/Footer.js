import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
            <p id="rights">FiberAl &copy; 2023</p>     
            <p><NavLink to="/terms_and_conditions">Terms and Conditions</NavLink></p>
            <p>All rights reserved</p>
        </footer>
    );
};
    
export default Footer;