import React from "react";
import '../../css/cursos.css'
import bannerdiseno from '../../img/facultades/diseno.jpg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import panta from '../../img/cursos/panta_diseno.png'
import planeDiseno from '../../img/Plan-estudios/diseno.png'




const Diseno =() => {

    const infoDiseno = [
        {
          Ficha: "Reconocimiento de las necesidades humanas en el entorno de la comunicación gráfica, comprendidas desde enfoques holísticos y sistémicos, con el objetivo que nuestros profesionales estén en la capacidad de desarrollar estrategias de comunicación multimedial efectivas, con el uso de las últimas tecnologías, en respuesta a los requerimientos vigentes y futuros de la sociedad y de la industria",
          Denominación: "Diseño Gráfico",
          Titulo: "Diseñador Gráfico",
          Modalidad: "Presencial",
          Creditos:"149 Créditos",
          Semestres:"8",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "107917",
          Registro: "002134",
          Matricula: "$5.396.050",
          planEstudio: planeDiseno,
          videoFondo: panta,
          Video: "https://www.youtube.com/embed/lcvTQz85oSI",
          Facultad:"Facultad de comunicación, arte y marketing digital",
          Telefono:"Tel: 7437270 Ext. 130",
          Email: "psdisgrafico@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerdiseno})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoDiseno.map((div, index) => {
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
                          infoDiseno.map((div, index) => {
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

export default Diseno