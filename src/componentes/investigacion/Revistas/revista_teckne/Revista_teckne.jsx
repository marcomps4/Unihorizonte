import React from "react";
import'../../../css/econtinuada.css';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import {EcontinuaCard} from '../../../educacion_continua/EcontinuaCard'
import bannering from '../../../img/facultades/educacion_continua.jpg';
import cursos1 from '../../../img/econtinuada/cursos/interpretación_de_la_ley.png';
import cursos2 from '../../../img/econtinuada/cursos/manejo_de_audiencias.png';
import cursos3 from '../../../img/econtinuada/cursos/oralidad.png';
import cursos4 from '../../../img/econtinuada/cursos/cocina_saludable.jpg';
import cursos5 from '../../../img/econtinuada/cursos/cocina_navideña.jpg';
import cursos6 from '../../../img/econtinuada/cursos/cocina_Internacional.jpg';
import cursos7 from '../../../img/econtinuada/cursos/gamificacion.png';
import cursos8 from '../../../img/econtinuada/cursos/robotica.png';
import cursos9 from '../../../img/econtinuada/cursos/analitica_de_datos.jpg';
import cursos10 from '../../../img/econtinuada/cursos/luxometria.jpg';
import cursos11 from '../../../img/econtinuada/cursos/gestion_de_emergencias.png';
import cursos12 from '../../../img/econtinuada/cursos/indicadores_SST.png';
import cursos13 from '../../../img/econtinuada/cursos/periodismo_economico.jpg';
import cursos14 from '../../../img/econtinuada/cursos/periodismo_politico.jpg';
import cursos15 from '../../../img/econtinuada/cursos/textos_redes.jpg';
import cursos16 from '../../../img/econtinuada/cursos/modelado_3d.jpg';
import diplomado1 from '../../../img/econtinuada/diplomados/pmbok.png';
import diplomado2 from '../../../img/econtinuada/diplomados/diplomado_mercado_financiero_y_de_valores.png';
import diplomado3 from '../../../img/econtinuada/diplomados/diplomado_analisis_de_insolvencia.png';
import diplomado4 from '../../../img/econtinuada/diplomados/diplomado_dulce.jpg';
import diplomado5 from '../../../img/econtinuada/diplomados/Diplomado_ISO_45001.png';
import diplomado6 from '../../../img/econtinuada/diplomados/analisis_contratacion_estatal.png';
import diplomado7 from '../../../img/econtinuada/diplomados/restauracion_ambiental.jpg';
import taller1 from '../../../img/econtinuada/talleres/cubrimiento_de_eventos_deportivos.jpg';
import taller2 from '../../../img/econtinuada/talleres/tecnicas_basicas_de_ilustracion.png';
import taller3 from '../../../img/econtinuada/talleres/taller_de_la_felicidad.jpg';



const Teckne = () =>{

    const volumenes = [
        {
          title: "Interpretación de la ley",
          imgContinua: cursos1,
          link:"https://biz.payulatam.com/L0ce716124E5C92",
        },
        {
            title: "Manejo de Audiencia",
            imgContinua: cursos2,
            link:"https://biz.payulatam.com/L0ce71616C91AA6",
        },
        {
            title: "Oralidad",
            imgContinua: cursos3,
            link:"https://biz.payulatam.com/L0ce7168774A7CB",
        },
        {
            title: "Cocina Saludable",
            imgContinua: cursos4,
            link:"https://biz.payulatam.com/L0ce7162BEB9E52",
        },
        {
            title: "Cocina Navideña",
            imgContinua: cursos5,
            link:"https://biz.payulatam.com/L0ce716DACEB943",
        },
        {
            title: "Cocina Internacional",
            imgContinua: cursos6,
            link:"https://biz.payulatam.com/L0ce7164097FCA5",
        },
        {
            title: "Pensamiento creativo mediante Gamificación",
            imgContinua: cursos7,
            link:"https://biz.payulatam.com/L0ce716084CC013",
        },
        {
            title: "Curso básico de Programación en Robótica",
            imgContinua: cursos8,
            link:"https://biz.payulatam.com/L0ce716002FE1EB",
        },
        {
            title: "Curso Analítica de datos aplicada a tu profesión",
            imgContinua: cursos9,
            link:"https://biz.payulatam.com/L0ce7162009EF91",
        },
        {
            title: "Curso-Taller Luxometria",
            imgContinua: cursos10,
            link:"https://biz.payulatam.com/L0ce7166DA020B8",
        },
        {
            title: "Gestion de Emergencias",
            imgContinua: cursos11,
            link:"https://biz.payulatam.com/L0ce7168F81784D",
        },
        {
            title: "Indicadores de Gestión de Información SST",
            imgContinua: cursos12,
            link:"https://biz.payulatam.com/L0ce716AFA617A8",
        },
        {
            title: "Fundamentos de Periodismo Económico",
            imgContinua: cursos13,
            link:"https://biz.payulatam.com/L0ce716D53C80F7",
        },
        {
            title: "Curso en Periodismo Político",
            imgContinua: cursos14,
            link:"https://biz.payulatam.com/L0ce716EA529975",
        },
        {
            title: "Redacción de textos para redes sociales ",
            imgContinua: cursos15,
            link:"https://biz.payulatam.com/L0ce71645196B60",
        },
        {
            title: "Curso Modelado 3d personajes fantásticos en porcelanicron",
            imgContinua: cursos16,
            link:"https://biz.payulatam.com/L0ce71645F69DF7",
        },
    ]

    const teckne = [
        {
          title: "Gestión de preyectos según el marco de trabajo PMBOK",
          imgContinua: diplomado1,
          link:"https://biz.payulatam.com/L0ce716EE77D9D6",
        },
        {
            title: "Diplomado en Mercado financiero y valores en Colombia",
            imgContinua: diplomado2,
            link:"https://biz.payulatam.com/L0ce716C3E628D4",
        },
        {
            title: "Diplomado en Análisis de Insolvencia",
            imgContinua: diplomado3,
            link:"https://biz.payulatam.com/L0ce716E15152E9",
        },
        {
            title: "Diplomado en tendencias y creatividad del mundo dulce",
            imgContinua: diplomado4,
            link:"https://biz.payulatam.com/L0ce71672165ABB",
        },
        {
            title: "Diplomado implementación ISO 45001",
            imgContinua: diplomado5,
            link:"https://biz.payulatam.com/L0ce7166E31381C",
        },
        {
            title: "Análisis de Contratación Estatal",
            imgContinua: diplomado6,
            link:"https://biz.payulatam.com/L0ce716EAC5E28D",
        },
        {
            title: "Restauración Ambiental y Ecológica",
            imgContinua: diplomado7,
            link:"https://biz.payulatam.com/L0ce716D11AA767",
        },
    ]

    const econtinuadaTalleres = [
        {
          title: "Cubrimiento de Evenetos Deportivos",
          imgContinua: taller1,
          link:"https://biz.payulatam.com/L0ce716BF748E23",
        },
        {
            title: "Técnicas Básicas de Ilustración",
            imgContinua: taller2,
            link:"https://biz.payulatam.com/L0ce7168B508742",
        },
        {
          title: "Taller de la Felicidad",
          imgContinua: taller3,
          link:"https://biz.payulatam.com/L0ce7163B339419",
      },
    ]

    return(
        <>
         <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannering})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

   
    <section id="revistas" className="revistas">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <h2>Educación Continua</h2>

        </div>

        <div className=" ">

        <div className="col-lg-12 col-xs-6 content d-flex flex-column order-last order-md-first">
            

        <div className="revistas_items">
            <Tab.Container 
            id="left-tabs-example" 
            defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first"> Stylus</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Teckne</Nav.Link>
                    </Nav.Item>
                  </Nav>

                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <div className="row gy-5" >
                    
                    {
                          econtinuadaCursos.map((div, index) => {
                          return (
                              <EcontinuaCard
                               key={index}
                               {...div}
                              />
                           )
                         })
                        }

                   
                    </div>

                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className="row gy-5" >
                    
                    {
                          econtinuadaDiplomados.map((div, index) => {
                          return (
                              <EcontinuaCard
                               key={index}
                               {...div}
                              />
                           )
                         })
                        }

                   
                    </div>

                      </Tab.Pane>
                    
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            </div>
            
          </div>
       

        </div>
        </div>
        </div>
        </section>
        </>
    )
};

export default Teckne