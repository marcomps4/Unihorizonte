import React from "react";
import "../facultades/facultadeshome.css"
import {CardFacultades} from "../facultades/FacultadCard"
import ingenierias from "../../../img/facultades/ing1.jpeg"
import administracion from "../../../img/facultades/admon1.jpeg"
import artes from "../../../img/facultades/arte1.jpg"
import gastronomia from "../../../img/facultades/gastro1.jpg"
import juridicas from "../../../img/facultades/abo1.jpg"
import posgrados from "../../../img/facultades/pos1.jpeg"


const Facultadesh = () => {

    const facultades = [
        {
          title: "Facultad de Ingeniería",
          imgUrl: ingenierias,
          link: "/facultades/facultadIngenieria",
        },
        {
          title: "Facultad de Ciencias Administrativas",
          imgUrl: administracion,
          link: "/facultades/facultadCienciasAdministrativas",
        },
        {
          title: "Facultad de Comunicación, Arte y Marketing Digital",
          imgUrl: artes,
          link: "/facultades/facultadComunicacion",
        },
        {
          title: "Facultad de Gastronomía",
          imgUrl: gastronomia,
          link: "/facultades/facultadGastronomia",
        },
        {
          title: "Facultad de Ciencias Jurídicas",
          imgUrl: juridicas,
          link: "/facultades/facultadCienciasJuridicas",
        },
        {
          title: "Posgrados",
          imgUrl: posgrados,
          link: "/posgrados",
        },
      ];


    return(
        <section>
    <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Nuestras facultades</h2>
      <p>
        Si ya conoces tu don, ahora consulta nuestra oferta académica y empieza a cambiar el mundo
      </p>
    </div>


      <div className="row">
      {
                          facultades.map((container, index) => {
                            return (
                              <CardFacultades
                                key={index}
                                {...container}
                                />
                            )
                          })
                        }

       
    
     
 </div>
 </div>
 </section>
    )

}

export default Facultadesh