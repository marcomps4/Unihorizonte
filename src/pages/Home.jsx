import React from "react";
import Carousel from "../componentes/header/carousel/CarouselHome";
import Facultadesh from "../componentes/header/facultades/FacultadesHome";
import CallToAction from "../componentes/header/calltoaction/CallToAction";
import Noticias from "../componentes/header/Noticias/Noticias";
import Convenios from "../componentes/header/convenios/Convenios";

const Home = () =>{
    return(
        <>
        <Carousel />
        <Facultadesh />
        <CallToAction/>
        <Noticias/>
        <Convenios/>
        </>
    )
}

export default Home