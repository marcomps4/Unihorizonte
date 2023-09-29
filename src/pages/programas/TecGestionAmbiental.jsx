import React from "react";
import bannertecgestionambiental from '../../img/facultades/ambiental.jpg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import gastrocurse from '../../img/cursos/gastro-course.jpg';
import planeTecGestionAmbi from '../../img/Plan-estudios/tecnologia-gestion-ambiental.png';





const TecGestionAmbiental =() => {

    const infoTecGestionAmbi = [
        {
          Ficha: "Decidiste estudiar Tecnología en Gestión Ambiental en Fundación Universitaria Horizonte. Esto indica que eres un líder innato, cuentas con habilidades gerenciales y sueles resolver los asuntos cotidianos de manera lógica y racional basándote en números, resultados y estadísticas para alcanzar tus objetivos.",
          Denominación: "Tecnología en Gestión Ambiental",
          Titulo: "Tecnólogo/a en gestión ambiental",
          Modalidad: "Presencial",
          Creditos:"103 Créditos",
          Semestres:"6",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "108509",
          Registro: "14523",
          Matricula: "$2.985.300",
          planEstudio: planeTecGestionAmbi,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de ciencias administrativas",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannertecgestionambiental})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoTecGestionAmbi.map((div, index) => {
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
                          infoTecGestionAmbi.map((div, index) => {
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

export default TecGestionAmbiental