import React from "react";
import "../carousel/carousel.css"
import Carousel from 'react-bootstrap/Carousel';
import video from "../../../img/hero-carousel/Intro.mp4"
import img1 from '../../../img/hero-carousel/hero-carousel-2.jpg';
import img2 from '../../../img/hero-carousel/hero-carousel-3.jpg';
import img3 from '../../../img/hero-carousel/hero-carousel-4.jpg';
import img4 from '../../../img/hero-carousel/hero-carousel-5.jpg';
import img5 from '../../../img/hero-carousel/hero-carousel-6.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css'

const Carouselh = () =>{
    return(
        <Carousel fade>

          <Carousel.Item>
          <video autoPlay muted loop embed-responsive-item="true" controls >
          <source src={video} type="video/mp4" />
        </video>
          </Carousel.Item>

        <Carousel.Item>
         <a href="https://subscribepage.io/NluB9F" target="_blank"> <img src={img1} alt="" text="First slide" className="img-fliud" /></a>
          </Carousel.Item>

        <Carousel.Item>
        <a href="https://unihorizonte.edu.co/consulta-tus-horarios-2023-2/"><img src={img2} alt="" text="First slide" className="img-fliud" target="_blank" /></a>
        </Carousel.Item>

        <Carousel.Item>
        <img src={img3} alt="" text="First slide" className="img-fliud" />
        </Carousel.Item>

        <Carousel.Item>
        <img src={img4} alt="" text="First slide" className="img-fliud" />
        </Carousel.Item>

        <Carousel.Item>
        <img src={img5} alt="" text="First slide" />
        </Carousel.Item>
      </Carousel>
    )
}

export default Carouselh