import React from "react";
import bannerava from '../../../img/facultades/ova.jpg';
import Pasos from "../../../componentes/programas/Pasos";
import {Contacto} from "../../../componentes/programas/Contacto";
import {Fichatecnica} from "../../../componentes/programas/FichaTecnica";
import gastrocurse from '../../../img/cursos/gastro-course.jpg';
import planeEspAva from '../../../img/Plan-estudios/ava.png';





const EspAva =() => {

    const infoEspAva = [
        {
          Ficha: "",
          Denominación: "Especialización en Ambiantes Virtuales de Aprendizaje, AVA",
          Titulo: "Especialista en Ambiantes Virtuales de Aprendizaje, AVA",
          Modalidad: "Presencial",
          Creditos:"26 Créditos",
          Semestres:"2",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "110606",
          Registro: "12973",
          Matricula: "$7.761.850",
          planEstudio: planeEspAva,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de Posgrados",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerava})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoEspAva.map((div, index) => {
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
                          infoEspAva.map((div, index) => {
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

export default EspAva