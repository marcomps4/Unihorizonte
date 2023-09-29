import React from "react";
import bannertecseguridad from '../../img/facultades/tec_seguridad.jpeg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import panta from '../../img/cursos/panta-sst.png';
import planeTecSst from '../../img/Plan-estudios/sst.png';





const TecSst =() => {

    const infoTecSst = [
        {
          Ficha: "Estudio de las herramientas ingenieriles de la Seguridad y Salud en el Trabajo en cada uno de los riesgos laborales asociados a las actividades de una organización y de un puesto de trabajo para elevar los índices e indicadores del Sistema de Seguridad y Salud en el Trabajo SGSST en pro de mejorar la cultura de prevención de la empresa.",
          Denominación: "Técnico profesional en seguridad y salud en el trabajo",
          Titulo: "Técnico profesional en seguridad y salud en el trabajo",
          Modalidad: "Presencial",
          Creditos:"72 Créditos",
          Semestres:"4",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "111370",
          Registro: "014408",
          Matricula: "$2.684.850",
          planEstudio: planeTecSst,
          videoFondo: panta,
          Video: "https://www.youtube.com/embed/ZXPdsEyooUY",
          Facultad:"Facultad de Ingenierías",
          Telefono:"Tel: 7437270 Ext. 129",
          Email: "ingenieriadesoftware@unihorizonte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannertecseguridad})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoTecSst.map((div, index) => {
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
                          infoTecSst.map((div, index) => {
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

export default TecSst