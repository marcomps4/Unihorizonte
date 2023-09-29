import React from "react";
import banneringsoftware from '../../img/facultades/inge_software.jpeg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import panta from '../../img/cursos/panta-ing-sfot.png'
import planeIngSoftw from '../../img/Plan-estudios/ing-software.png'





const IngSoftware =() => {

    const infoingsoftware = [
        {
          Ficha: "Tanto nuestro programa académico, así como nuestros cursos de Ingeniería de Software de alta calidad, cuentan con profesores innovadores, actualizados en las tendencias de la industria y con conexiones en el sector productivo que fomentan la participación en eventos y actividades para construir una sólida red de contactos con el sector productivo. En HORIZONTE FUNDACION UNIVERSITARIA, las mentorías personalizadas, el apoyo en empleabilidad y el fomento en la investigación, permiten guiar a los estudiantes en su desarrollo humano, académico y profesional. Los recursos técnicos con los que contamos, nuestros laboratorios de computación,licencias de software, metodologías y técnicas actualizadas, facilitan la innovación, el aprendizaje y la colaboración manteniéndonos al día con las últimas tendencias.Haz parte de nuestro equipo de innovación, juntos podemos.",
          Denominación: "Ingeniería de Software",
          Titulo: "Ingeniero de software",
          Modalidad: "Presencial",
          Creditos:"154 Créditos",
          Semestres:"9",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "107406",
          Registro: "013534",
          Matricula: "$5.575.750",
          planEstudio: planeIngSoftw,
          videoFondo: panta,
          Video: "https://www.youtube.com/embed/UVPjveApgD8",
          Facultad:"Facultad de Ingenierías",
          Telefono:"Tel: 7437270 Ext. 129",
          Email: "ingenieriadesoftware@unihorizonte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${banneringsoftware})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
                
                  </div>
                  {
                          infoingsoftware.map((div, index) => {
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
                          infoingsoftware.map((div, index) => {
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

export default IngSoftware