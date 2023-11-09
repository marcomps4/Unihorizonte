import React from "react";
import Carousel from "../componentes/header/carousel/CarouselHome";
import Facultadesh from "../componentes/header/facultades/FacultadesHome";
import CallToAction from "../componentes/header/calltoaction/CallToAction";
import Noticias from "../componentes/header/Noticias/Noticias";
import Convenios from "../componentes/header/convenios/Convenios";
import Inscripcion from'../componentes/header/inscripcion/Inscripcion';

const Home = () =>{
    return(
        <>
        <Carousel />
        <Inscripcion/>
        <Facultadesh />
        <Noticias/>
        <Convenios/>
        </>
    )
}

export default Home