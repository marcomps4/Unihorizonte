import React from "react";
import '../../css/cursos.css';
import bannergastro from '../../img/facultades/gastro_2.jpg';
import Pasos from "../../componentes/programas/Pasos";
import {Contacto} from "../../componentes/programas/Contacto";
import {Fichatecnica} from "../../componentes/programas/FichaTecnica";
import panta from '../../img/cursos/panta-gastro.png'
import planegastro from '../../img/Plan-estudios/gastronomia.png'




const Derecho =() => {

    const infoDerecho = [
        {
          Ficha: "Se un profesional en gastronomía, llamado a salvaguardar el patrimonio culinario, a dar un nuevo significado a los productos locales y aportar a un sector económico en crecimiento.HORIZONTE, tu mejor opción.",
          Denominación: "Gastronomía",
          Titulo: "Profesional en gastronomía",
          Modalidad: "Presencial",
          Creditos:"135 Créditos",
          Semestres:"8",
          Jornada: "Diurno / Nocturno /Sábado",
          Ciudad: "Bogotá",
          Snies: "106481",
          Registro: "19679",
          Matricula: "$5.733.650",
          planEstudio: planegastro,
          videoFondo: panta,
          Video: "https://www.youtube.com/embed/FGZ9OBD-JcI",
          Facultad:"Facultad de gastronomía",
          Telefono:"Tel: 7437270 Ext. 147",
          Email: "gastronomía@unihorzionte.edu.co",
        },

        
      ]
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannergastro})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

            <section id="cursos" className="cursos ">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative ">
               
                  </div>
                  {
                          infoDerecho.map((div, index) => {
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
                          infoDerecho.map((div, index) => {
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

export default Derecho