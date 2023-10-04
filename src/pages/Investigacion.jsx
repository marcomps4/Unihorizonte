import React from "react";
import '../css/investigacion.css';
import prueba from '../img/investigacion/inves1.jpg';
import logoImg from '../img/investigacion/logo_gcena.svg'
import {CardInvestigacion} from '../componentes/investigacion/CardInvestigacion'


const Investigación = () => {

  const Cardinvestigacion = [
    {
      title: "Grupo de investigación en Seguridad Industrial, Salud Ocupacional y Medio Ambiente",
      imgUrl: logoImg,
      imgback: prueba,
      categoria: "COL0107136- Categoría C",
      depto: "Facultad de ingeniería –Ingeniería en Seguridad Industrial e Higiene Ocupacional y Técnico Profesional en Seguridad y Salud en el trabajo",
      lider: "Líder(es): Diana Tamayo-Camilo Torres",
      email: "dirinvestigaciones@unihorizonte.edu.co",
    },
    {
      title: "Grupo de Investigación en Enseñanza de las Ciencias Exactas y Naturales Aplicadas",
      imgUrl: logoImg,
      imgback: prueba,
      categoria: "COL0199192-Categoría C",
      depto: "Facultad de ingeniería",
      lider: "Líder(es): Luisa García-Diana Tamayo",
      email: "garcia_luisa@unihorizonte.edu.co",
    },
    {
      title: "Grupo de Investigación DIONE",
      imgUrl: logoImg,
      imgback: prueba,
      categoria: "COL0202304",
      depto: "Facultad de Ciencias Administrativas",
      lider: "Líder: Efrén Antonio Calderón",
      email: "efren_calderon20212@unihorizonte.edu.co",
    },
    {
      title: "Grupo de Investigación Horizonte Cultural Gastronómico",
      imgUrl: logoImg,
      imgback: prueba,
      categoria: "COL0231754",
      depto: "Facultad de Gastronomía",
      lider: "Líder: Edy Mayerly González",
      email: "",
    },
    {
      title: "Grupo de Investigación Vértice",
      imgUrl: logoImg,
      imgback: prueba,
      categoria: "COL0232223",
      depto: "Facultad de Comunicación y Marketing Digital-Diseño gráfico, comunicación y mercadeo",
      lider: "Líder: Martha Cristina Ramírez",
      email: "comunicacionsocial@unihorizonte.edu.co",
    },
    {
      title: "Grupo de Investigación TECH-INNOVA",
      imgUrl: logoImg,
      imgback: prueba,
      categoria: "COL0229658",
      depto: "Facultad de ingeniería – ingeniería de Software",
      lider: "Líder: Diana Patricia Camargo",
      email: "",
    },
    {
      title: "Grupo de Investigación NANSHE",
      imgUrl: logoImg,
      imgback: prueba,
      categoria: "COL0233982",
      depto: "Facultad de Ciencias Jurídicas",
      lider: "Líder: Jayme Baez",
      email: "derecho@unihorizonte.edu.co",
    },
  ];
  



    return(
        <>

<section id="investigacion" className="investigacion">
      <div className="container" data-aos="fade-up">
      <div className="col-lg-12 col-md-12 text-center">
        <h2>Investigación</h2>

        <p className="descripcion text-justify">
          En la Fundación Universitaria Horizonte la investigación se constituye como fuente de saber, generadora y soporte del ejercicio docente, que como propósito principal tiene la producción y validación de nuevo conocimiento para impulsar el desarrollo académico, científico, tecnológico, cultural y social del país. Para lograr este fin, el Proyecto Educativo Institucional (PEI) de la fundación Universitaria Horizonte propone desde la óptica de la investigación, “una universidad comprometida con la cultura investigativa, el pensamiento científico y tecnológico” a través de un modelo pedagógico de desarrollo humano, que está orientado a “visibilizar el conocimiento y los actores que se encuentran tras las huellas de este.”
          </p>
        </div>


        <div className="row gy-5">

        <div className="col-lg-12 col-md-12 text-center align-items-center">
        <h2 className="title-grupos">Nuestros Grupos de investigación</h2>
        </div>

        {
                          Cardinvestigacion.map((container, index) => {
                            return (
                              <CardInvestigacion
                                key={index}
                                {...container}
                                />
                            )
                          })
                        }

         

          
        </div>

      </div>
    </section>
        </>
    )
}

export default Investigación