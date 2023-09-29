import React from "react";
import bannerMercadeo from '../../img/facultades/mercadeo.jpg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import gastrocurse from '../../img/cursos/gastro-course.jpg';
import planeMercadeo from '../../img/Plan-estudios/mercadeo.png';





const Mercadeo =() => {

    const infoMercadeo = [
        {
          Ficha: "",
          Denominación: "Mercadeo",
          Titulo: "Profesional en Mercadeo",
          Modalidad: "Presencial",
          Creditos:"138 Créditos",
          Semestres:"8",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "109375",
          Registro: "7063",
          Matricula: "$5.195.600",
          planEstudio: planeMercadeo,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de comunicación, arte y marketing digital",
          Telefono:"Tel: 7437270 Ext. 130",
          Email: "psdisgrafico@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerMercadeo})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoMercadeo.map((div, index) => {
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
                          infoMercadeo.map((div, index) => {
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

export default Mercadeo