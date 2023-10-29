import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation,  } from 'swiper/modules';
import 'swiper/css/bundle';
import '../investigacion/gallery.css';
import imgGalery1 from '../../img/investigacion/galeri1.jpeg';
import imgGalery2 from '../../img/investigacion/galeri2.jpeg';
import imgGalery4 from '../../img/investigacion/galeri4.JPG';
import imgGalery5 from '../../img/investigacion/galeri5.JPG';
import imgGalery7 from '../../img/investigacion/galeri7.JPG';
import imgGalery8 from '../../img/investigacion/galeri8.JPG';
import imgGalery9 from '../../img/investigacion/galeri9.jpg';
import imgGalery10 from '../../img/investigacion/galeri10.JPG';
import imgGalery11 from '../../img/investigacion/galeri11.JPG';
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
      <SwiperSlide><img src={imgGalery4}/></SwiperSlide>
      <SwiperSlide><img src={imgGalery5}/></SwiperSlide>
      <SwiperSlide><img src={imgGalery7}/></SwiperSlide>
      <SwiperSlide><img src={imgGalery8}/></SwiperSlide>
      <SwiperSlide><img src={imgGalery9}/></SwiperSlide>
      <SwiperSlide><img src={imgGalery10}/></SwiperSlide>
      <SwiperSlide><img src={imgGalery11}/></SwiperSlide>


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