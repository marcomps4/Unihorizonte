import React from "react";
import '../css/investigacion.css'
import invest1Img from '../img/investigacion/logo_gcena.svg'
import prueba from '../img/facultades/admon1.jpeg'
const Investigación = () => {
    return(
        <>

<section id="investigacion" className="investigacion">
      <div className="container" data-aos="fade-up">
      <div className="col-lg-12 col-md-12 text-center">
        <h2>Investigación</h2>

        <p className="descripcion text-justify">
          En la Fundación Universitaria Horizonte la investigación se constituye como fuente de saber, generadora y soporte del ejercicio docente, que como propósito principal tiene la producción y validación de nuevo conocimiento para impulsar el desarrollo académico, científico, tecnológico, cultural y social del país. Para lograr este fin, el Proyecto Educativo Institucional (PEI) de la fundación Universitaria Horizonte propone desde la óptica de la investigación, “una universidad comprometida con la cultura investigativa, el pensamiento científico y tecnológico” a través de un modelo pedagógico de desarrollo humano, que está orientado a “visibilizar el conocimiento y los actores que se encuentran tras las huellas de este”
          </p>
        </div>


        <div className="row gy-5">

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="service-item">
              <div className="img">
                <img src={prueba} className="img-fluid" alt=""/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                <img src={invest1Img} className="img-fluid" alt=""/>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Grupo de investigación en Seguridad Industrial, Salud Ocupacional y Medio Ambiente</h3>
                </a>
                <p>COL0107136- Categoría C</p>
                <p>Facultad de ingeniería –Ingeniería en Seguridad Industrial e Higiene Ocupacional y Técnico Profesional en Seguridad y Salud en el trabajo</p>
                <p>Líder(es): Diana Tamayo-Camilo Torres</p>
                <p>dirinvestigaciones@unihorizonte.edu.co</p>
              </div>
            </div>
          </div>

          
        </div>

      </div>
    </section>
        </>
    )
}

export default Investigación