import React from "react";
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import bannerpre from '../../img/cursos/banner-prei-01.jpg';
import {AiOutlineForm} from 'react-icons/ai';
import {MdOutlineSavings} from 'react-icons/md';
import{MdOutlineDocumentScanner} from 'react-icons/md';

const Pasos = () =>{
    return(
        <>

<section id="pasos" className="pasos">
      <div className="container" data-aos="zoom-out">

        <div className="row gy-5">

          <div className="col-lg-8 col-md-6 content d-flex flex-column order-last order-md-first">
            <h3>Realiza tu proceso de admisión en 3 pasos</h3>
            

            <div className="pasos-numbers">
            <Tab.Container 
            id="left-tabs-example" 
            defaultActiveKey="first">
              <Row>
                <Col sm={4}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first"> Paso 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Paso 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="thirt">Paso 3</Nav.Link>
                    </Nav.Item>
                  </Nav>

                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <h4><AiOutlineForm/> Preinscripción</h4>
                        <p>
                          Ingresa tus datos en línea haciendo clic en el banner o, si prefieres, puedes llamarnos al 7437270 Ext 127.
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h4><MdOutlineDocumentScanner/>Admisión</h4>
                        <p>
                          Para realizar el proceso de Admisión, deberá cancelar el valor  de: $88.750 (Valor que se abonará al valor de la matrícula)
                        </p>

                        <p>
                          Luego de realizar la inscripción, envíanos los siguientes documentos:
                        </p>
                        <ol>
                          <li>Acta de bachiller</li>
                          <li>Certificado de la Eps o Sisben</li>
                          <li>Foto tipo documento 3x4</li>
                        </ol>
                      
                      <p>
                        La entrega de documentos y copia de recibo de pago de inscripción, debes remitirlo al correo admisiones@unihorizonte.edu.co con el asunto Admisión y tu nombre.
                      </p>

                      <p>
                        <strong>Nota:</strong> Si requieres que realicemos tu estudio de homologación, debes enviar la sábana de notas o certificado de notas
                      </p>

                      </Tab.Pane>
                    <Tab.Pane eventKey="thirt">
                    <h4><MdOutlineSavings/>Pago de matrícula</h4>
                        <p>
                          Conoce las entidades crediticias que tenemos para ti haciendo clic <strong>aquí</strong>
                        </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            </div>
            
          </div>

          <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
            <div className="img">
            <a href="https://site2.q10.com/Preinscripcion?aplentId=8fea0808-7bab-4370-8802-1e51d36b878c" target="_blank"><img src={bannerpre} alt="" className=" img-fluid align-items-center"/></a>

            </div>
          </div>

        </div>

      </div>
    </section>

  

    </>
    )
}

export default Pasos