import React from "react";
import'../css/facultades.css';
import bannercomunicaion from '../../src/img/facultades/bg-comunicacion.jpeg';
import {FacultadesCard} from'../componentes/facultades/FacultadesCard';
import comuSocial from '../img/facultades/comunicacion.jpg';
import diseno from '../img/facultades/diseno.jpg';
import mercadeo from '../img/facultades/mercadeo.jpg';





const FacultadComunicacion = () => {

    const FacultadComunicacion = [
        {
          title: "Comunicación Social",
          imgUrl: comuSocial,
          snies: "SNIES 106552",
          semestre:"9 Semestres",
          link: "/facultades/facultadComunicacion/comunicacionSocial",
        },
        {
          title: "Diseño Gráfico",
          imgUrl: diseno,
          snies: "SNIES 107917",
          semestre:"8 Semestres",
          link:"/facultades/facultadComunicacion/diseno"
        },
        {
          title: "Mercadeo",
          imgUrl: mercadeo,
          snies: "SNIES 109375",
          semestre:"8 Semestres",
          link:"/facultades/facultadComunicacion/mercadeo"
        },
      ];

    return(
       <>
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannercomunicaion})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

   
    <section id="facultades" className="facultades">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <h2>Facultad de Comunicación, Arte y Marketing Digital</h2>

            <p>
            La facultad de comunicación, arte y marketing digita brinda a los estudiantes conocimientos que aporten a su formación integral y les permita comprender su entorno social y político, contribuyendo así a la construcción de una sociedad del conocimiento, capaz de pensarse y comprenderse a sí misma en su realidad actual y en su devenir histórico.
            </p>

            <p>
            Esta unidad académica promueve la construcción y desarrollo de una sociedad más justa a través del conocimiento, el cual se da a partir del pensamiento lógico, crítico e investigativo, así como por el desarrollo de proyectos e iniciativas sociales y comunitarias propias de los contextos, que atiendan a las exigencias de la sociedad colombiana.
            </p>

        </div>

        <div className="row gy-5 facultades">
        {
                          FacultadComunicacion.map((div, index) => {
                            return (
                              <FacultadesCard
                                key={index}
                                {...div}
                                />
                            )
                          })
                        }

        </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default FacultadComunicacion