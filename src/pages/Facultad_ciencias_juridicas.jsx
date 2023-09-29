import React from "react";
import'../css/facultades.css';
import bannercjuridicas from '../../src/img/facultades/bg-juridicos.jpeg';
import {FacultadesCard} from'../componentes/facultades/FacultadesCard';
import derecho from '../img/facultades/derecho.jpg';



const FacultadCienciasJuridicas = () => {

    const facultadcjuridicas = [
        {
          title: "Derecho",
          imgUrl: derecho,
          snies: "SNIES 107213",
          semestre:"10 Semestres" ,
          link:"/facultades/facultadCienciasJuridicas/derecho"
        },
        
      ];

    return(
       <>
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannercjuridicas})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

   
    <section id="facultades" className="facultades">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <h2>Facultad de Ciencias Jurídicas</h2>

            <p>
            La Facultad de Ciencias Jurídicas de UniHorizonte centra sus esfuerzos en consolidar nuestra calidad académica y formar profesionales que atiendan las necesidades, actuales y futuras, de la sociedad colombiana, así como el sector judicial. Por ello, se ha propuesto construir un espacio ético que sea adecuado para la formación de los estudiantes, futuros juristas del país, en el cual que propenda una formación integral, ética y de protección a los derechos ciudadanos.
            </p>

            <p>
            Su planta docente está conformada por profesionales con amplia experiencia en el sector y preparación académica, quienes transmiten a sus estudiantes una actitud crítica y responsable, necesaria para la construcción de una sociedad más justa y plural.
            </p>

        </div>

        <div className="row gy-5 facultades">
        {
                          facultadcjuridicas.map((div, index) => {
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

export default FacultadCienciasJuridicas