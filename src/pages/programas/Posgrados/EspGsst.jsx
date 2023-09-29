import React from "react";
import bannerSst from '../../../img/facultades/sst.jpg';
import Pasos from "../../../componentes/programas/Pasos";
import {Contacto} from "../../../componentes/programas/Contacto";
import {Fichatecnica} from "../../../componentes/programas/FichaTecnica";
import gastrocurse from '../../../img/cursos/gastro-course.jpg';
import planeEspSst from '../../../img/Plan-estudios/esp-sst.png';





const EspGsst =() => {

    const infoEspGsst = [
        {
          Ficha: "Generación de soluciones innovadoras gerenciales para los diversos riesgos que impacten positivamente en la productividad de las organizaciones.",
          Denominación: "Especialización en Gerencia de la Seguridad y Salud en el Trabajo",
          Titulo: "Especialista en Gerencia de la Seguridad y Salud en el Trabajo",
          Modalidad: "Presencial",
          Creditos:"28 Créditos",
          Semestres:"2",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "109186",
          Registro: "15616",
          Matricula: "$6.925.900",
          planEstudio: planeEspSst,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de Posgrados",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerSst})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoEspGsst.map((div, index) => {
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
                          infoEspGsst.map((div, index) => {
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

export default EspGsst