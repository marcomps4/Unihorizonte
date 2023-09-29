import React from "react";
import bannerCalidad from '../../../img/facultades/calidad.jpg';
import Pasos from "../../../componentes/programas/Pasos";
import {Contacto} from "../../../componentes/programas/Contacto";
import {Fichatecnica} from "../../../componentes/programas/FichaTecnica";
import gastrocurse from '../../../img/cursos/gastro-course.jpg';
import planeEspGCalidad from '../../../img/Plan-estudios/esp-gerencia-calidad.png';





const EspGerenCalidad =() => {

    const infoEspGerenCalidad = [
        {
          Ficha: "El Especialista en Gerencia de la Calidad, desarrolla habilidades para el diseño, implementación, gestión, dirección control y seguimiento de los sistemas de gestión de calidad, con el fin de establecer planes que contribuyan a alcanzar indicadores de eficiencia, efectividad, productividad y efectividad de las organizaciones utilizando recursos físicos, técnicos, tecnológicos y financieros desde los niveles estratégicos, tácticos y operativos orientados a ampliar las ventajas competitivas de la organización",
          Denominación: "Especialización en Gerencia de la Calidad",
          Titulo: "Especialista en gerencia de la calidad",
          Modalidad: "Presencial",
          Creditos:"34 Créditos",
          Semestres:"2",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "109576",
          Registro: "19915",
          Matricula: "$7.761.850",
          planEstudio: planeEspGCalidad,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de Posgrados",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerCalidad})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoEspGerenCalidad.map((div, index) => {
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
                          infoEspGerenCalidad.map((div, index) => {
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

export default EspGerenCalidad