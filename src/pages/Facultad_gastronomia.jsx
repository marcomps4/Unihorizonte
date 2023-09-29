import React from "react";
import'../css/facultades.css';
import bannergastro from '../../src/img/facultades/bg-gastronomia.jpeg';
import {FacultadesCard} from'../componentes/facultades/FacultadesCard';
import gastro from '../img/facultades/gastro_2.jpg';




const FacultadGastronomia = () => {

    const facultadesgastro = [
        {
          title: "Gastronomía",
          imgUrl: gastro,
          snies: "SNIES 106481",
          semestre:"8 Semestres",
          link:"/facultades/facultadGastronomia/gastronomia"
          
        },
        
      ];

    return(
       <>
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannergastro})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

   
    <section id="facultades" className="facultades">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <h2>Facultad de Gastronomía</h2>

            <p>
            El profesional en gastronomía Unihorizontista es más que un CHEF, es un<strong> ARTISTA CULINARIO</strong> formado con disciplina, liderazgo y decisión para crear propuestas gourmet que hagan la diferencia. Será capaz de administrar establecimientos gastronómicos, podrá desempeñarse como especialista culinario en técnicas nacionales e internacionales, tendrá la fortaleza y capacidad de generar propuestas innovadoras en cocina, repostería, bebidas (frías y calientes) y emprendimiento entre otras.
            </p>

        </div>

        <div className="row gy-5 facultades">
        {
                          facultadesgastro.map((div, index) => {
                            return (
                              <FacultadesCard
                                key={index}
                                {...div}
                                />
                            )
                          })
                        }

        </div>
        </div>
        </div>
        </section>
        
        </>
    )
}

export default FacultadGastronomia