import React from 'react';
import Apple from '../images/Apple-Store-Badge.png';
import Android from '../images/Google-Store-Badge.png';
import Logo from '../images/fiber.png';
import Logo_filled from '../images/FiberLogo.svg';
import Cel_1 from '../images/mockup 1.png';
import Cel_2 from '../images/mockup 2.png';
const Info = () => {
    return (
        <section className='info'>
            
            <div className="mainInfo">
                <div>             
                    <h1>Introducing <span className='span'>FiberAL</span></h1>
                    <p>Ultimate social media platform, connecting you with the people and content that matter most. Stay engaged with real-time messaging, Pay Per View events, and gift giving.</p><br/>
                    <a href="https://apps.apple.com/us/app/fiber-al/id1635154174" rel="noopener" aria-label="App Store"><img src={Apple} loading="lazy" width="120vw" height="40vh" alt="" /></a> &emsp;
                    <a href="https://play.google.com/store/apps/details?id=io.fiber.al.app" rel="noopener" aria-label="Play Store"><img src={Android} loading="lazy" width="120vw" height="40vh" alt="" /></a>
                </div>
            </div>
            <img src={Logo} alt='logo_bg' className='BG' height="85%" />  
            <img src={Logo_filled} alt='logo' className='BG_filled' height="80%" /> 
            <img src={Cel_1} alt='cel1' className='Cel_1' height="85%"/>
            <img src={Cel_2} alt='cel2' className='Cel_2' height="75%"/>
        </section>
    );
};
    
export default Info;