import React from "react";

import bannerderecho from '../../img/facultades/derecho.jpg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import panta from '../../img/cursos/panta-derecho.png'
import planeDerecho from '../../img/Plan-estudios/Derecho.png'




const Gastronomia =() => {

    const infoGastro = [
        {
          Ficha: "Descubre el camino hacia una carrera legal excepcional con nuestro programa de derecho en HORIZONTE FUNDACION UNIVERSITARIA. En este programa, te ofrecemos una educación de calidad que combina fundamentos legales sólidos con enfoques innovadores de aprendizaje. Nuestro compromiso es equiparte con las habilidades y el conocimiento necesarios para destacar en el mundo legal moderno. A través de una facultad apasionada y experta, obtendrás una comprensión integral de las leyes y su aplicación en un contexto global. Nuestro programa se destaca por fomentar el pensamiento crítico, la ética y la excelencia. Únete a nosotros para ser pionero en la creación de un legado legal significativo mientras moldeamos juntos el futuro de la justicia y el derecho.",
          Denominación: "Derecho",
          Titulo: "Abogado",
          Modalidad: "Presencial",
          Creditos:"164 Créditos",
          Semestres:"10",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "107213",
          Registro: "12019",
          Matricula: "$4.741.500",
          planEstudio: planeDerecho,
          videoFondo: panta,
          Video: "https://www.youtube.com/embed/AG64HJ_PNMY",
          Facultad:"Facultad de Ciencias Jurídicas",
          Telefono:"Tel: 7437270 Ext. 145",
          Email: "derecho@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerderecho})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoGastro.map((div, index) => {
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
                          infoGastro.map((div, index) => {
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

export default Gastronomia