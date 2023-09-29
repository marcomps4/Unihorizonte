import React from "react";
import'../css/facultades.css';
import bannercadmon from '../../src/img/facultades/bg-admon.jpeg';
import {FacultadesCard} from'../componentes/facultades/FacultadesCard';
import admonEmpresas from '../img/facultades/admonEmpre.jpeg';
import contaduria from '../img/facultades/contaduria.jpeg';
import negociosinter from '../img/facultades/nego_internacionales.jpeg';
import admonagro from '../img/facultades/agraria.jpeg';
import sst from '../img/facultades/seguridadsalud.jpg';
import tecgestionambiental from '../img/facultades/ambiental.jpg';
import tectalentohumano from '../img/facultades/talento_humano.jpeg';
import tecgestionadmonfinan from '../img/facultades/admon_finan.jpeg';



const FacultadCienciasAdministrativas = () => {



    const facultadcAdministrativas = [
        {
          title: "Administración de Empresas",
          imgUrl: admonEmpresas,
          snies: "SNIES 107214",
          semestre:"8 Semestres",
          link: "/facultades/facultadCienciasAdministrativas/AdministracionDeEmpresas",
        },
        {
          title: "Contaduría Pública",
          imgUrl: contaduria,
          snies: "SNIES 107725",
          semestre:"9 Semestres",
          link: "/facultades/facultadCienciasAdministrativas/contaduria",
        },
        {
          title: "Administración de Negocios Internacionales",
          imgUrl: negociosinter,
          snies: "SNIES 109385",
          semestre:"9 Semestres",
          link: "/facultades/facultadCienciasAdministrativas/administraciondeNegociosInternacionales",
        },
        {
          title: "Administración Agropecuaria",
          imgUrl: admonagro,
          snies: "SNIES 109386",
          semestre:"9 Semestres",
          link: "/facultades/facultadCienciasAdministrativas/administracionAgropecuaria",
        },
        {
          title: "Administración en seguridad y salud en el trabajo (virtual)",
          imgUrl: sst,
          snies: "SNIES 110805",
          semestre:"9 Semestres",
          link: "/facultades/facultadCienciasAdministrativas/AdminSst",
        },
        {
          title: "Tecnólogo en Gestión Ambiental",
          imgUrl: tecgestionambiental,
          snies: "SNIES 108599",
          semestre:"6 Semestres",
          link: "/facultades/facultadCienciasAdministrativas/tecGestionAmbiental"
        },
        {
          title: "Tecnólogo en Gestión del Talento Humano",
          imgUrl: tectalentohumano,
          snies: "RES. 8224",
          semestre:"6 Semestres",
          link: "/facultades/facultadCienciasAdministrativas/tecGestionTalentoHumano",
        },
        {
          title: "Tecnólogo en Gestión Administrativa y Financiera",
          imgUrl: tecgestionadmonfinan,
          snies: "SNIES 108590",
          semestre:"6 Semestres",
          link: "/facultades/facultadCienciasAdministrativas/tecGestionAdministrativayFinanciera",
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
            <h2>Facultad de Ciencias Administrativas</h2>

            <p>
            La Facultad de Ciencias Administrativas integra diferentes disciplinas que propician la construcción de conocimientos y habilidades en los estudiantes, quienes requieren herramientas que les permita comprender los elementos que hacen parte del desarrollo del país. Por ello, se integran proyectos, que contribuyen al fortalecimiento de las organizaciones del sector público y privado, desde análisis orientados a la planeación, organización, dirección y control estratégico.
            </p>

            <p>
            Esta estrategia permite a los profesionales en formación obtener los criterios para detectar cambios en el entorno, oportunidades de mejora, de acción y otros más de la sociedad colombiana, lo que los convierte en piezas fundamentales para el país que se quiere construir.
            </p>

        </div>

        <div className="row gy-5 facultades">
        {
                          facultadcAdministrativas.map((div, index) => {
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

export default FacultadCienciasAdministrativas