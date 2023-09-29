import React from "react";
import'../css/facultades.css';
import bannercadmon from '../../src/img/facultades/bg-admon.jpeg';
import {FacultadesCard} from'../componentes/facultades/FacultadesCard';
import especomdig from '../img/facultades/com_digital.jpg';
import sst from '../img/facultades/sst.jpg';
import calidad from '../img/facultades/calidad.jpg';
import proyectos from '../img/facultades/ger_proyectos.jpg';
import ava from '../img/facultades/ova.jpg';



const Posgrados = () => {

    const posgrados = [
        {
          title: "Especialización en Comunicación Digital",
          imgUrl: especomdig,
          snies: "SNIES 108990",
          semestre:"2 Semestres",
          link: "/posgrados/EspecializacionComunicacionDigital",
        },
        {
          title: "Especialización en Gerencia de la Seguridad y Salud en el Trabajo",
          imgUrl: sst,
          snies: "SNIES 109186",
          semestre:"2 Semestres",
          link: "/posgrados/EspecializacionSst",
        },
        {
          title: "Especialización en Gerencia de la Calidad",
          imgUrl: calidad,
          snies: "SNIES 109576",
          semestre:"2 Semestres",
          link: '/posgrados/EspecializacionGerenciaCalidad',
        },
        {
          title: "Especialización en Gerencia de Proyectos",
          imgUrl: proyectos,
          snies: "Res. 9887",
          semestre:"2 Semestres",
          link: '/posgrados/EspecializacionGerenciaProyectos',
        },
        {
          title: "Especialización En Ambientes Virtuales",
          imgUrl: ava,
          snies: "RES. 12973",
          semestre:"2 Semestres",
          link:"/posgrados/EspecializacionAva",
        },

        
      ];

    return(
       <>
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannercadmon})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

   
    <section id="facultades" className="facultades">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <h2>Especializaciones</h2>


        </div>

        <div className="row gy-5 facultades">
        {
                          posgrados.map((div, index) => {
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

export default Posgrados