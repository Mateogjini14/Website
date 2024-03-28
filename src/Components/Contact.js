import React from 'react';
import logo from '../images/FiberLogo.png';
const Info = () => {
    return (

        <section className="contact">

            <img src={logo} width="55px" alt="#" />
            <p>Contact Details</p>
            <nav className="icons_width">
                <div className="icons">
                    <a href="https://www.instagram.com/fiberalbania/" target="_blank" rel="noopener" aria-label="Instagram page"><i className="fab fa-instagram fa-2x"></i></a>
                    <a href='#'><i className="fab fa-whatsapp fa-2x"></i></a>
                    <a href='#'><i className="fas fa-envelope fa-2x"></i></a>
                </div>
            </nav>

        </section>
    );
};
    
export default Info;