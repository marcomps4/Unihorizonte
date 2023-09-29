import React from "react";
import bannernegociosinter from '../../img/facultades/nego_internacionales.jpeg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import gastrocurse from '../../img/cursos/gastro-course.jpg';
import planeAdmonNegoInter from '../../img/Plan-estudios/admi-nego-Inter.png';





const AdminNegoInter =() => {

    const infoAdminNegoInter = [
        {
          Ficha: "Formación a través de la inmersión en estudios de casos reales de las organizaciones a nivel local y mundial, formamos en Gerencia Estratégica con un aliado internacional.",
          Denominación: "Administración de Negocios Internacionales",
          Titulo: "Administrador/a de Negocios Internacionales",
          Modalidad: "Presencial",
          Creditos:"140 Créditos",
          Semestres:"8",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "109385",
          Registro: "9888",
          Matricula: "$5.373.550",
          planEstudio: planeAdmonNegoInter,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de ciencias administrativas",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannernegociosinter})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoAdminNegoInter.map((div, index) => {
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
                          infoAdminNegoInter.map((div, index) => {
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

export default AdminNegoInter