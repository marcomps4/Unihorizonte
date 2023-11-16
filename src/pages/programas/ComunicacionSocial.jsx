import React from "react";
import bannerComuSocial from '../../img/facultades/comunicacion.jpg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import gastrocurse from '../../img/cursos/gastro-course.jpg';
import planeComSocial from '../../img/Plan-estudios/comunicacion-social.png';





const ComunicacionSocial =() => {

    const infoComSocial = [
        {
          Ficha: "",
          Denominación: "Comunicación Social",
          Titulo: "Comunicador/a Social",
          Modalidad: "Presencial",
          Creditos:"149 Créditos",
          Semestres:"8",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "107917",
          Registro: "",
          Matricula: "$4.933.600",
          planEstudio: planeComSocial,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de comunicación, arte y marketing digital",
          Telefono:"Tel: 7437270 Ext. 130",
          Email: "psdisgrafico@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerComuSocial})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoComSocial.map((div, index) => {
                            return (
                              <Fichatecnica
                                key={index}
                                {...div}
                                />
                            )
                          })
                        }
                  </div>
              </section>
            
              <section className=" bg-section " >
              <div className="container d-flex" data-aos="fade-up">
              <Pasos/>
              </div>
              </section>
              
              {
                          infoComSocial.map((div, index) => {
                            return (
                              <Contacto
                                key={index}
                                {...div}
                                />
                            )
                          })
                        }


              




  </>


    )
}

export default ComunicacionSocial