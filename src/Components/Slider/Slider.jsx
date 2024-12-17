import { useState, useEffect } from 'react';
import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import Realmec12 from '../../assets/realme12.png';
import Realmec51Mobile from '../../assets/c51Mob.png';
import RealmeC57 from '../../assets/sliderC57.png';
import RealmeC51 from '../../assets/SliderC51.png';
import RealmeC65Mobile from '../../assets/c65Mob.png';
import RealmeC61 from '../../assets/realmeC61.png';
import Realme67Mobile from '../../assets/c67Mob.png';
import Slider13g from '../../assets/slider13g.png';

function Slider() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    // Check for screen size on mount and on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='mainContainer' style={{ overflow: 'hidden', }}> {/* Set a fixed height */}
            <Carousel style={{ height: '100%', width: '100%' }} >
                {/* First Slide */}
                <Carousel.Item style={{ height: '100%' }}>
                    <img
                        className="d-block w-100"
                        src={isMobile ? Realmec51Mobile : Realmec12}
                        alt="First slide"
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                </Carousel.Item>

                {/* Second Slide */}
                <Carousel.Item style={{ height: '100%' }}>
                    <img
                        className="d-block w-100"
                        src={isMobile ? RealmeC65Mobile : RealmeC57}
                        alt="Second slide"
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                </Carousel.Item>

                {/* Third Slide */}
                <Carousel.Item style={{ height: '100%' }}>
                    <img
                        className="d-block w-100"
                        src={isMobile ? Realme67Mobile : RealmeC61}
                        alt="Third slide"
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                </Carousel.Item>

                {/* Fourth Slide */}
                <Carousel.Item style={{ height: '100%' }}>
                    <img
                        className="d-block w-100"
                        src={isMobile ? Realme67Mobile : RealmeC51}
                        alt="Fourth slide"
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                </Carousel.Item>
                <Carousel.Item style={{ height: '100%' }}>
                    <img
                        className="d-block w-100"
                        src={isMobile ? Realme67Mobile : Slider13g}
                        alt="Fourth slide"
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default Slider;
