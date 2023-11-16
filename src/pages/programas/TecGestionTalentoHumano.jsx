import React from "react";
import bannertectalentohumano from '../../img/facultades/talento_humano.jpeg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import gastrocurse from '../../img/cursos/gastro-course.jpg';
import planeTecGestiontalHumano from '../../img/Plan-estudios/tecnologia-gestion-talento-humano.png';





const TecGestionTalentoHumano =() => {

    const infoTecGestionTalentoHumano  = [
        {
          Ficha: "Decidiste estudiar Talento Humano en la Fundación Universitaria Horizonte.Esto indica que tienes aptitudes de servicio y pasión por la satisfacción de quienes te rodean. Tienes el don de la empatía y la necesidad de expresar tus ideas de manera asertiva.",
          Denominación: "Tecnología en Gestión del talento humano",
          Titulo: "Tecnólogo/a en gestión del talento humano",
          Modalidad: "Presencial",
          Creditos:"103 Créditos",
          Semestres:"6",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "109382",
          Registro: "8224",
          Matricula: "$2.627.050",
          planEstudio: planeTecGestiontalHumano,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de ciencias administrativas",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannertectalentohumano})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoTecGestionTalentoHumano .map((div, index) => {
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
                          infoTecGestionTalentoHumano .map((div, index) => {
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

export default TecGestionTalentoHumano