import React from 'react';
import Logo from '../images/fiber.png';
import logo1 from '../images/plus.png';
import logo2 from '../images/giftbox.png';
import logo3 from '../images/pay-per-visualization.png';
import logo4 from '../images/comment.png';
import Phone1 from "../images/3d_models/Phone1.glb";
import Phone2 from "../images/3d_models/Phone2.glb";
import Phone3 from "../images/3d_models/Phone3.glb";
import Real from '../images/Real-time.svg'
import Heart from '../images/Vector2.svg';
import Comment from '../images/Group-3.svg';
import Add from '../images/ADD-BTN.png';
const Info = () => {
    return (
            <section className="features">
                <h1>Experience Authentic Social Media with <span className='span'>FiberAL's</span> Unique Features</h1>
                <p className='intro'>See what our app has to offer</p>
                <div className='description'>

                    <div data-aos="fade-right" data-aos-duration={300}>
                        <img src={logo1}  width='15%' className='icons' alt="#"/>
                        <h2 className="feature">Add a post</h2>
                        <p>Sharing your life on FIBER AL is easy and intuitive! Whether you're taking a photo or recording a video, simply tap the camera icon to add your post. With real-time image sharing and stories mode, you can share your posts with your followers and friends in just a few taps.</p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration={300}>
                    <img src={logo2}  width='15%' className='icons' alt="#"/>
                        <h2 className="feature">Deliver instant Gifts</h2>
                        <p>Make your friends feel appreciated and spread joy with FIBER AL's virtual gift feature. With cute gifts with fun animations, there's a wide range of options to choose from. Show your support for your friends' posts or simply brighten up their day.</p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration={300}>
                    <img src={logo3}  width='15%' className='icons' alt="#"/>
                        <h2  className="feature">Pay Per View</h2>
                        <p>Unlock a new revenue stream by creating and selling your exclusive content on FIBER AL's pay-per-view feature. Whether it's photos or videos, easily set your own price and start earning money for your creativity.</p>
                    </div>
                
                    <div data-aos="fade-right" data-aos-duration={300}>
                    <img src={logo4}  width='15%' className='icons' alt="#"/>
                        <h2  className="feature">Messaging</h2>
                        <p>Stay connected with your friends and followers through our apps instant messaging feature. Send direct messages to share thoughts, ideas, or just to say hello. With real-time notifications, you'll never miss a message or a moment of the conversation.</p>
                    </div>
                </div>
                <div className='stuff3d'>
                    <img src={Real} className='Real' alt="" />
                    <img src={Heart} className='Heart' alt="" />
                    <img src={Comment} className='Comment' alt="" />
                    <img src={Add} className='Add' alt="" />
                    <div data-aos="zoom-in-down" data-aos-duration={100} className="phone1" ><model-viewer disable-zoom disable-tap scale="2.5 2.5 2.5" camera-orbit="calc(-4.2rad + env(window-scroll-y) * 4rad) calc(35deg + env(window-scroll-y) * 180deg)  calc(3m - env(window-scroll-y) * 2m)" src={Phone1} alt="Phone1" ></model-viewer></div> 
                    <div data-aos="zoom-in-down" data-aos-duration={100} className="phone2" ><model-viewer disable-zoom disable-tap scale="2.5 2.5 2.5" camera-orbit="calc(-85rad + env(window-scroll-y) * 4rad) calc(87deg + env(window-scroll-y) * 180deg)  calc(3m - env(window-scroll-y) * 2m)" src={Phone2} alt="Phone2" className="phone2"></model-viewer></div> 
                    <div data-aos="zoom-in-down" data-aos-duration={100} className="phone3" ><model-viewer disable-zoom disable-tap scale="2.5 2.5 2.5" camera-orbit="calc(-5rad + env(window-scroll-y) * 4rad) calc(80deg + env(window-scroll-y) * 180deg) calc(3m - env(window-scroll-y) * 4m)" src={Phone3} alt="Phone3" className="phone3"></model-viewer> </div> 
                </div>
                <img src={Logo} alt='' className='logo' width='90%'></img>
            </section>
    );
};
    
export default Info;
