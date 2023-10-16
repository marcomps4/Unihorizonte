import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation,  } from 'swiper/modules';
import 'swiper/css/bundle';
import '../investigacion/gallery.css';
import imgGalery1 from '../../img/investigacion/galeri1.jpeg';
import imgGalery2 from '../../img/investigacion/galeri2.jpeg';
import imgGalery3 from '../../img/investigacion/galeri3.jpeg';
import {TfiArrowCircleLeft} from "react-icons/tfi";
import {TfiArrowCircleRight} from "react-icons/tfi";


export const Galeria = () => {
    return(
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate: 1,
            stretch: 50,
            depth: 100,
            modifier: 3,
            
        }}
        className='swiper_card_investigacion'
        modules={[EffectCoverflow, Pagination, Navigation, ]}

        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true}}
        pagination={{el: '.swiper-pagination', clickable: true }}
        autoplay={true}


    >
      <SwiperSlide><img src={imgGalery1}/></SwiperSlide>
      <SwiperSlide><img src={imgGalery2}/></SwiperSlide>
      <SwiperSlide><img src={imgGalery3}/></SwiperSlide>
      <SwiperSlide><img src={imgGalery2}/></SwiperSlide>
      <SwiperSlide><img src={imgGalery1}/></SwiperSlide>
      <SwiperSlide><img src={imgGalery3}/></SwiperSlide>

      <div className="slider-controler">
       <div className='swiper-button-prev slider-arrow'>
        <TfiArrowCircleLeft/>   
       </div>
       <div className='swiper-button-next slider-arrow'>
       <TfiArrowCircleRight/>
       </div>
       
      <div className="swiper-pagination"></div>
      </div>
        

    </Swiper>
    )
}