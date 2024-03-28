import React, { useEffect, useRef } from 'react';
import Image from '../images/BrowserTab.png';
import Image1 from '../images/tiltedimg2-p-1080.png';
import Image2 from '../images/Group-255_iphone13prosierrablue_landscape-p-1080.png';
import Image3 from '../images/Pay_per_view_image.png';
import Image4 from '../images/FiberImage.png';
import Image5 from '../images/tiltedimg2-p-1080_2.png';
import Likes from '../images/s42.svg';
import comm from '../images/s51.svg';
import play from '../images/s55.svg';
import gift from '../images/s56.svg';
import Logo from '../images/Group-127.svg';
import Link from '../images/linkicon.svg';
import Rose from '../images/rose.png';
import Diamond from '../images/giftimgdiamontScroll.png';
import GoldCoin from '../images/3d_models/GoldCoin.glb';
const Scroll = () => {
    const containerRef = useRef(null);

useEffect(() => {
    const parallaxHandler = (e) => {
        const parallaxElements = containerRef.current.querySelectorAll(".parallax");
        if (window.innerWidth > 1440) {
            parallaxElements.forEach((parallax) => {
                const speed = parseFloat(parallax.getAttribute("data-speed"));
                const x = (window.innerWidth - e.pageX * speed) / 150;
                const y = (window.innerHeight - e.pageY * speed) / 150;
                parallax.style.transform = `translate(${x}px, ${y}px)`;
            });
        }
    };

        const addParallaxListener = () => {
            document.addEventListener("mousemove", parallaxHandler);
        };

        const removeParallaxListener = () => {
            document.removeEventListener("mousemove", parallaxHandler);
        };

        if (window.innerWidth > 1440) {
            addParallaxListener();
        }

        window.addEventListener("resize", () => {
            if (window.innerWidth > 1440) {
                addParallaxListener();
            } else {
                removeParallaxListener();
            }
        });

        return () => {
            removeParallaxListener();
            window.removeEventListener("resize", addParallaxListener);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const pages = containerRef.current.querySelectorAll('.pages');

            pages.forEach((page, index) => {
                const rect = page.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.6) {
                    const prevPage = index > 0 ? pages[index - 1] : null;
                    if (prevPage) {
                        prevPage.classList.add('hidden');
                    }
                } else {
                    const prevPage = index > 0 ? pages[index - 1] : null;
                    if (prevPage) {
                        prevPage.classList.remove('hidden');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="scroll" ref={containerRef}>
            <div className="pages">
                <div className='scrollTab' >
                    <h1>
                        Create a <br id='celmedia'/>post
                    </h1>
                    <p>
                        Creating an Image post on our app is easy and fun. You
                        can choose a photo from your gallery, add a filter or edit
                        it, and then write a caption to share your thoughts with
                        your followers.
                    </p>
                </div>
                <div className='scrollImages1'>
                    <img src={Rose} alt='' data-speed="1" className="parallax"></img>
                    <img src={Diamond} data-speed="1" className="parallax" alt='' ></img>
                    <model-viewer className="parallax" disable-zoom disable-tap auto-rotate rotation-per-second="60deg" auto-rotate-delay="0" camera-orbit="0deg 110deg 4deg" src={GoldCoin} alt="Gold"></model-viewer>
                </div>
                <div className='scImage'>
                    <img src={Image}  alt='' className='web'></img>
                </div>
                <img src={Image1}  alt='' id='inside' data-speed="2" className="parallax" ></img>
                <div className='ScrollExplain' >
                    <h1>Introducing Gifts</h1>
                    <ul>
                        <li>
                            Fast and simple
                        </li>
                        <li>
                            High Quality
                        </li>
                    </ul>
                </div>
            </div>
            <div className='pages'>
                <div className='scrollTab'>
                    <h1>
                        Create a <br id='celmedia'/>video
                    </h1>
                    <p>
                        Creating an Image post on our app is easy and fun. You
                        can choose a photo from your gallery, add a filter or edit
                        it, and then write a caption to share your thoughts with
                        your followers.
                    </p>
                </div>
                <div className='scImage'>
                    <img src={Image}  alt='' className='web'></img>
                </div>
                <img src={Image2} alt='' id='inside' data-speed="2" className="parallax"></img>
                <div className='scrollImages'>
                    <img src={Likes} alt='' data-speed="1" className='parallax'></img>
                    <img src={comm} alt=''  data-speed="1"className='parallax'></img>
                    <img src={gift} alt='' data-speed="1" className='parallax'></img>
                    <img src={play} alt='' data-speed="1" className='parallax'></img>
                </div>
                <div className='ScrollExplain' >
                    <h1>Video</h1>
                    <ul>
                        <li>
                            Never miss a moment
                        </li>
                        <li>
                            Click and edit
                        </li>
                    </ul>
                </div>
            </div>
            <div className='pages'>
                <div className='scrollTab' >
                    <h1>
                        Create a <br id='celmedia'/>PPV
                    </h1>
                    <p>
                        Creating an Image post on our app is easy and fun. You
                        can choose a photo from your gallery, add a filter or edit
                        it, and then write a caption to share your thoughts with
                        your followers.
                    </p>
                </div >
                <div className='scImage'>
                    <img src={Image}  alt='' className='web'></img>
                </div>
                <img src={Image3} alt='' data-speed="2" className='parallax' id='inside' ></img>
                <div className='scrollImages'>
                    <img src={Likes} alt='' data-speed="1" className='parallax' ></img>
                    <img src={comm} alt='' data-speed="1" className='parallax'></img>
                    <img src={gift} alt='' data-speed="1" className='parallax'></img>
                </div>
                <div className='ScrollExplain' >
                    <h1>PPV</h1>
                    <p>You’ll be searchable in your new markets.</p>
                </div>
            </div>
            <div className='pages'>
                <div className='scrollTab' >
                    <h1>
                        Create a <br id='celmedia'/>link
                    </h1>
                    <p>
                        Creating an Image post on our app is easy and fun. You
                        can choose a photo from your gallery, add a filter or edit
                        it, and then write a caption to share your thoughts with
                        your followers.
                    </p>
                </div >
                <div className='scImage'>
                    <img src={Image}  alt='' className='web'></img>
                </div>
                <img src={Image4} alt='' className="parallax" data-speed="2" id='inside' ></img>
                <img src={Link} className='parallax' data-speed="3" alt='' id='small'></img>
                <img src={Logo} className='parallax' data-speed="1" alt='' id='set'></img>
                <div className='ScrollExplain' >
                    <h1>Link</h1>
                    <ul>
                        <li>
                            Copy paste link
                        </li>
                        <li>
                            Automatically pastes
                        </li>
                    </ul>
                </div>
            </div>
            <div className='pages'>
                <div className='scrollTab'>
                    <h1>
                        Create a <br id='celmedia'/> status
                    </h1>
                    <p>
                        Creating an Image post on our app is easy and fun. You
                        can choose a photo from your gallery, add a filter or edit
                        it, and then write a caption to share your thoughts with
                        your followers.
                    </p>
                </div>
                <div className='scImage'>
                    <img src={Image}  alt='' className='web'></img>
                </div>
                <img src={Image5} alt='' id='inside' data-speed="1.5" className="parallax" ></img>
                <div className='ScrollExplain'>
                    <h1>Status</h1>
                    <p>All components are easily editable with CSS.</p>
                </div>
            </div>
        </section>
    );
};
    
export default Scroll;