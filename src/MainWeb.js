import React from 'react';
import Footer from "./Components/Footer";
import Gift from "./Components/Gift_section";
import Info from "./Components/Info_section";
import Features from "./Components/Features";
import Scroll from './Components/ScrollSection';
import Background from './Components/Background';
import Load from './Components/Landing_page.js';
function MainWeb() {
    return (
        <>
            {/* <Load/> */}
            <Info></Info>
            <Features></Features>
            <Gift></Gift>
            <Scroll></Scroll>
            <Background></Background>
            <Footer></Footer>
        </>
    );
}

export default MainWeb;
