import React from 'react'
import Product from './Product'
import "./slideproduct.css"
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const SlideProduct = ({data,title}) => {
  return (
    <div className='slide_products slide'>
        <div className='container'>
                <div className='top_slide'>
                    <h1>{title}</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, consectetur.</p>
                </div>
                <Swiper breakpoints={{
                  320: {slidesPerView:1,spaceBetween: 20}
                  ,480: {slidesPerView: 2,spaceBetween: 20},
                  768: {slidesPerView: 3,spaceBetween: 20},
                  1024: {slidesPerView: 4,spaceBetween: 20}
                }}  
                  
                  loop={true} autoplay={{delay: 2500,disableOnInteraction: false,}}  centeredSlides={true} spaceBetween={30} navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
                    

                    {data.map((item)=>{
                      return <SwiperSlide><Product item={item} /></SwiperSlide>
                    })}

       
                </Swiper>
            </div>
    </div>
  )
}

export default SlideProduct
