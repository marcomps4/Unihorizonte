import React from "react";
import bannerContaduria from '../../img/facultades/contaduria.jpeg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import gastrocurse from '../../img/cursos/gastro-course.jpg';
import planeContaduria from '../../img/Plan-estudios/contaduria-publica.png';





const Contaduria =() => {

    const infoContaduria = [
        {
          Ficha: "Formación en Contabilidad forense con aliados internacionales, membresía gratuita con el INCP, fortaleza en contabilidades especiales: sectores seguros,fiduciario, solidario, bancario y agrícola.",
          Denominación: "Contaduría Pública",
          Titulo: "Contador Público",
          Modalidad: "Presencial",
          Creditos:"157 Créditos",
          Semestres:"9",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "107725",
          Registro: "1048",
          Matricula: "$3.968.650",
          planEstudio: planeContaduria,
          videoFondo: gastrocurse,
          Video: "https://www.youtube.com/embed/LXb3EKWsInQ",
          Facultad:"Facultad de ciencias administrativas",
          Telefono:"Tel: 7437270 Ext. 149",
          Email: "administracíon@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerContaduria})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoContaduria.map((div, index) => {
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
                          infoContaduria.map((div, index) => {
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

export default Contaduria