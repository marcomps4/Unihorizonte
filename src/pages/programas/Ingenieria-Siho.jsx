import React from "react";
import banneringindustrial from '../../img/facultades/inge_industrial.jpeg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import gastrocurse from '../../img/cursos/gastro-course.jpg';
import planeIngSiho from '../../img/Plan-estudios/ing-siho.png';





const IngSiho =() => {

    const infoIngSiho = [
        {
          Ficha: "Generación de un pensamiento basado en la prevención en el contexto ingenieril y ocupacional que le permitirá estructurar estrategias de mitigación del riesgo y modelos de innovación en procesos de la Seguridad y Salud en el trabajo para mejorar los indicadores organizacionales y la eficiencia productiva de la empresa.",
          Denominación: "Ingeniería en Seguridad Industrial e Higiene Ocupacional",
          Titulo: "Ingeniero/a en Seguridad Industrial e Higiene Ocupacional",
          Modalidad: "Presencial",
          Creditos:"153 Créditos",
          Semestres:"9",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "104564",
          Registro: "07596",
          Matricula: "$7.792.600",
          planEstudio: planeIngSiho,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de Ingenierías",
          Telefono:"Tel: 7437270 Ext. 129",
          Email: "ingenieriadesoftware@unihorizonte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${banneringindustrial})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoIngSiho.map((div, index) => {
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
                          infoIngSiho.map((div, index) => {
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

export default IngSiho