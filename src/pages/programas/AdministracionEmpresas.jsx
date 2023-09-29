import React from "react";
import banneradmon from '../../img/facultades/admonEmpre.jpeg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import gastrocurse from '../../img/cursos/gastro-course.jpg';
import planeAdmon from '../../img/Plan-estudios/admi-Empresas.png';





const AdminEmpresas =() => {

    const infoAdminEmpresas = [
        {
          Ficha: "La administración de empresas es una disciplina perteneciente a las ciencias sociales en el que se puede desempeñar el profesional de Unihorizonte. Con el devenir de los años el ejercicio de la carrera profesional ha venido cambiando y se requiere que el profesional no únicamente se desempeñe eficiente y eficazmente como empleado en empresas del sector real, sino que se convierta en agente de cambio a través del emprendimiento. En Horizonte Fundación Universitaria orientamos nuestro programa de Administración de empresas enfocadas en la competitividad tanto a nivel nacional como internacional.",
          Denominación: "Administración de empresas",
          Titulo: "Administrador/a de empresas",
          Modalidad: "Presencial",
          Creditos:"149 Créditos",
          Semestres:"8",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "107214",
          Registro: "12020",
          Matricula: "$4.100.700",
          planEstudio: planeAdmon,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de ciencias administrativas",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${banneradmon})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoAdminEmpresas.map((div, index) => {
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
                          infoAdminEmpresas.map((div, index) => {
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

export default AdminEmpresas