import React from 'react';
import Image1 from '../images/screen111-p-500.png';
import Image2 from '../images/screen2_realtime-p-500.png';
import Image3 from '../images/Desktop-11-p-500.png';

const Card = () => {
    return (
            <div className="card"  data-aos="fade-right" data-aos-duration={800} data-aos-delay={150}>
                <div className='card1'>
                    <img src={Image1} className='foto' alt=''/>
                    <h2>Messaging</h2>
                    <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>
                <div className='card2'>
                    <img src={Image2} className='foto' alt=''/>
                    <h2>Real-Time</h2>
                    <p>An all-in-one customer service platformthat helps you balance everything your customers need to be happy.</p>
                </div>
                <div className='card3'>
                    <img src={Image3} className='foto' alt=''/>
                    <h2>Promo</h2>
                    <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                </div>
            </div>
    );
};
    
export default Card;