import React from "react";
import banneradmonagro from '../../img/facultades/agraria.jpeg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import gastrocurse from '../../img/cursos/gastro-course.jpg';
import planeAdmonAgro from '../../img/Plan-estudios/administracion-agropecuaria.png';





const AdminAgro =() => {

    const infoAdminAgro = [
        {
          Ficha: "El Administrador Agropecuario de la Fundación Universitaria Horizonte será un profesional con la formación académica, las capacidades investigativas y la conciencia social suficiente para diseñar estrategias innovadoras que permitan llevar a cabo el diagnóstico y la solución de problemáticas puntuales del sector agropecuario nacional, siempre con un enfoque de planificación estratégica, administración sostenible y responsable del uso de los recursos naturales.",
          Denominación: "Administración Agropecuaria",
          Titulo: "Administrador/a Agropecuario/a",
          Modalidad: "Presencial",
          Creditos:"148 Créditos",
          Semestres:"9",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "109386",
          Registro: "9921",
          Matricula: "$5.373.550",
          planEstudio: planeAdmonAgro,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de ciencias administrativas",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${banneradmonagro})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoAdminAgro.map((div, index) => {
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
                          infoAdminAgro.map((div, index) => {
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

export default AdminAgro