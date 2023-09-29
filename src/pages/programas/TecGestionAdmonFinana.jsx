import React from "react";
import bannertecgestionadmonfinan from '../../img/facultades/admon_finan.jpeg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import gastrocurse from '../../img/cursos/gastro-course.jpg';
import planeTecGestionAdminFinan from '../../img/Plan-estudios/tecnologia-gestion-administrativa-financiera.png';





const TecGestionAdminiFinan =() => {

    const infoTecGestionAdminiFinan  = [
        {
          Ficha: "Decidiste estudiar Tecnología en Gestión Administrativa y Financiera en Fundación Universitaria Horizonte. Esto indica que eres un líder innato, cuentas con habilidades gerenciales y sueles resolver los asuntos cotidianos de manera lógica y racional basándote en números, resultados y estadísticas para alcanzartus objetivos.", 
          Denominación: "Tecnología en Gestión admnistrativa y financiera",
          Titulo: "Tecnólogo/a en gestión administrativa y financiera",
          Modalidad: "Presencial",
          Creditos:"103 Créditos",
          Semestres:"6",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "109382",
          Registro: "8224",
          Matricula: "$2.985.300",
          planEstudio: planeTecGestionAdminFinan,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de ciencias administrativas",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannertecgestionadmonfinan})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoTecGestionAdminiFinan .map((div, index) => {
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
                          infoTecGestionAdminiFinan .map((div, index) => {
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

export default TecGestionAdminiFinan