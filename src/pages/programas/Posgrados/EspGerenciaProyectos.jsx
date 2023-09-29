import React from "react";
import bannerproyectos from '../../../img/facultades/ger_proyectos.jpg';
import Pasos from "../../../componentes/programas/Pasos";
import {Contacto} from "../../../componentes/programas/Contacto";
import {Fichatecnica} from "../../../componentes/programas/FichaTecnica";
import gastrocurse from '../../../img/cursos/gastro-course.jpg';
import planeEspGProyectos from '../../../img/Plan-estudios/esp-gerencia-proyectos.png';





const EspGerenciaProyectos =() => {

    const infoEspGerenciaProyectos = [
        {
          Ficha: "El Especialista en Gerencia de Proyectos UniHorizontista posee las habilidades para diseñar, planiﬁcar, ejecutar, dirigir, modelar, evaluar y controlar los proyectos de los diferentes campos y disciplinas, para proponer soluciones a las problemáticas organizacionales utilizando recursos físicos, técnicos, tecnológicos y ﬁnancieros desde los niveles estratégicos, tácticos y operativos orientados a ampliar las ventajas competitivas de la organización.",
          Denominación: "Especialización en Gerencia de Proyectos",
          Titulo: "Especialista en Gerencia de Proyectos",
          Modalidad: "Presencial",
          Creditos:"32 Créditos",
          Semestres:"2",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "109384",
          Registro: "9887",
          Matricula: "$7.761.850",
          planEstudio: planeEspGProyectos,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de Posgrados",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerproyectos})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoEspGerenciaProyectos.map((div, index) => {
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
                          infoEspGerenciaProyectos.map((div, index) => {
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

export default EspGerenciaProyectos