import React from 'react';
import Image1 from '../images/giftimg1.png';
import Image2 from '../images/giftimgdiamont.png';
import Image3 from '../images/giftimgicon.svg';
import Image4 from '../images/gift_tab.png';
//import Image5 from '../images/download.png';
import Card from './CardSection';
import BG from '../images/FiberLogo.svg';

const Gift = () => {
    return ( 
            <div data-aos="zoom-in-down" data-aos-duration={700}>
                <section className="gifts"> 
                <div>
                    <img src={BG} alt='' className='img_gift' height='110%'></img>
                    <div>
                        <h1> Introducing Gifts</h1>
                        <p>Our Gift feature allows you to send virtual gifts to your friends, showing your appreciation and strengthening your connections. Choose from a variety of fun and creative gifts to make your friends' day</p>
                    </div>

                    <div className="image">
                        <img src={Image1} alt="#"/>
                    </div>
                    <div className="image1" data-aos="zoom-in" data-aos-duration={700} data-aos-delay={30}>
                        <img src={Image2} alt="#"/>
                    </div>
                    <div className="image2" data-aos="zoom-in" data-aos-duration={700} data-aos-delay={0}>
                        <img src={Image3} alt="#" />
                    </div>
                    <div className="image3" data-aos="zoom-in" data-aos-duration={700} data-aos-delay={150}>
                        <img src={Image4} alt="#"/>
                    </div>
                </div>

                </section>
                <Card></Card>
            </div>
    );
};
    
export default Gift;