import React from "react";
import'../css/facultades.css';
import bannering from '../../src/img/facultades/bg-ingenieria.jpeg';
import {FacultadesCard} from'../componentes/facultades/FacultadesCard';
import ingindustrial from '../img/facultades/inge_industrial.jpeg';
import ingsoftware from '../img/facultades/inge_software.jpeg';
import tecseguridad from '../img/facultades/tec_seguridad.jpeg';


const FacultadIngenieria = () => {

    const facultadesing = [
        {
          title: "Ingeniería en Seguridad Industrial e Higiene Ocupacional",
          imgUrl: ingindustrial,
          snies: "SNIES 104564",
          semestre:"9 Semestres" ,
          link:"/facultades/facultadIngenieria/ingenieriaSiho",
        },
        {
          title: "Ingeniería de Software",
          imgUrl: ingsoftware,
          snies: "SNIES 107406",
          semestre:"9 Semestres" ,
          link: "/facultades/facultadIngenieria/ingenieriaSoftware",
        },
        {
          title: "Técnico Profesional en Seguridad y Salud en el Trabajo",
          imgUrl: tecseguridad,
          snies: "SNIES 111370",
          semestre:"4 Semestres",
          link: "/facultades/facultadIngenieria/tecsst",
        },

        
      ];

    return(
       <>
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannering})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

   
    <section id="facultades" className="facultades">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <h2>Facultad de Ingeniería</h2>

            <p>
              La Facultad de Ingeniería desarrolla sus procesos de acuerdo a las tendencias nacionales e internacionales, para así formar profesionales altamente cualificados, integrales y con capacidades académicas que les permitirán desempeñarse de manera eficiente en sus campos de acción laboral. Esta estrategia permite que la planta docente, grupos de investigación y programas académicos se fortalezcan y adquieran mejores herramientas pedagógicas.
            </p>

            <p>
              Los conocimientos adquiridos por los estudiantes en su proceso le permiten generar soluciones de acuerdo al contexto en el cual se desempeñe, procurando el diálogo entre la ciencia, la tecnología y la innovación, manteniendo un sentido de responsabilidad social, ambiental y ética.
            </p>
        </div>

        <div className="row gy-5 facultades">
        {
                          facultadesing.map((div, index) => {
                            return (
                              <FacultadesCard
                                key={index}
                                {...div}
                                />
                            )
                          })
                        }

        </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default FacultadIngenieria