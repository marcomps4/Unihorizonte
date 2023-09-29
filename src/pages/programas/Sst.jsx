import React from "react";
import bannersst from '../../img/facultades/seguridadsalud.jpg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import gastrocurse from '../../img/cursos/gastro-course.jpg';
import planeSst from '../../img/Plan-estudios/administracion-seguridad.png';





const Sst =() => {

    const infoSst  = [
        {
          Ficha: "El Administrador en Seguridad y Salud en el Trabajo de la Fundación Universitaria Horizonte será un profesional con la formación académica, las capacidades investigativas y la conciencia social suficiente para enfrentar los nuevos retos que se plantea al Administrador y, en general, el país en términos de seguridad y salud en el trabajo a nivel local, regional y nacional, atendiendo a los prevención de accidentes y riesgos laborales, la normatividad vigente y las expectativas y necesidades de las organizaciones.",
          Denominación: "Administración en seguridad y Salud en el Trabajo",
          Titulo: "Administrador/a en seguridad y salud en el trabajo",
          Modalidad: "Virtual",
          Creditos:"150 Créditos",
          Semestres:"9",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "110805",
          Registro: "17591",
          Matricula: "$2.347.150",
          planEstudio: planeSst,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de ciencias administrativas",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannersst})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoSst .map((div, index) => {
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
                          infoSst .map((div, index) => {
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

export default Sst