import React from "react";
import bannerespecomdig from '../../../img/facultades/com_digital.jpg';
import Pasos from "../../../componentes/programas/Pasos";
import {Contacto} from "../../../componentes/programas/Contacto";
import {Fichatecnica} from "../../../componentes/programas/FichaTecnica";
import gastrocurse from '../../../img/cursos/gastro-course.jpg';
import planeEspComunDig from '../../../img/Plan-estudios/esp-comunicacion-digital.png';





const EspComunDigital =() => {

    const infoEspComunDigital = [
        {
          Ficha: "La formación de Especialistas que planeen organice, dirijan y controlen las estrategias, programas y tácticas que se desplieguen comunicativamente en ambientes digitales y/o transmedia, tanto a nivel interno, como externo.",
          Denominación: "Especialización en Comunicación Digital",
          Titulo: "Especialista en Comunicación Digital",
          Modalidad: "Presencial",
          Creditos:"26 Créditos",
          Semestres:"2",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "108990",
          Registro: "15261",
          Matricula: "$6.925.900",
          planEstudio: planeEspComunDig,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de Posgrados",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerespecomdig})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoEspComunDigital.map((div, index) => {
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
                          infoEspComunDigital.map((div, index) => {
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

export default EspComunDigital