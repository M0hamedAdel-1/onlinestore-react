
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Heroslider = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
     <>

     <div className='hero'>
        <div className='container'>
            <Swiper loop={true}  spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft} className="mySwiper">
        <SwiperSlide>
            <div className='content'>
                <h4>introduction the new</h4>
                <h3>microsoft xbox 360 controller</h3>
                <p>windows xp 7/8/10 ps3 / tv box</p>
                <Link to="/" className='btn'> shop now</Link>
            </div>
            <img src='public\img\banner_Hero1.jpg' alt='slider img'/>
        </SwiperSlide>
        <SwiperSlide>
            <div className='content'>
                <h4>introduction the new</h4>
                <h3>microsoft xbox</h3>
                <p>windows xp 7/8/10 ps3 / tv box</p>
                <Link to="/" className='btn'> shop now</Link>
            </div>
            <img src='public\img\banner_Hero1.jpg' alt='slider img'/>
        </SwiperSlide>
        <SwiperSlide>
            <div className='content'>
                <h4>introduction the new</h4>
                <h3>microsoft xbox</h3>
                <p>windows xp 7/8/10 ps3 / tv box</p>
                <Link to="/" className='btn'> shop now</Link>
            </div>
            <img src='public\img\banner_Hero1.jpg' alt='slider img'/>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
        </div>
       
      </Swiper>
        </div>
     </div>
      
    </>
  )
}

export default Heroslider
