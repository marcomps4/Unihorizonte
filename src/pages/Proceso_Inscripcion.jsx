import React from "react";
import ins1 from '../../src/img/inscripcion/inscripcion_1.png';
import ins2 from '../../src/img/inscripcion/inscripcion_2.png';
import '../css/inscripcion.css';
import pdfinfluencer from '../../src/documentos/Plan_Influencer2023_1.pdf';

const ProcesoInscripcion = () =>{

    return(
        <>
        <section id="proceso" className="proceso">
      <div className="container" data-aos="fade-up">

        <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
          <h2>Proceso de Inscripción</h2>

          <p className="proceso_principal">
            Matricularte en UniHorizonte es un proceso sencillo de realizar, lee atentamente los siguientes pasos y complétalo con éxito
          </p>


      </div>

        <div className="row gy-12">
          

          <div className="col-lg-6 d-flex flex-column ">
         
            
            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-file-earmark flex-shrink-0"></i>
              <div>
                <h4>Formulario de Inscripción</h4>
                <p>Haz clic en el siguente boton y llena TODO el formulario.</p>
                <a className="proceso-btn" href="https://site2.q10.com/Preinscripcion?aplentId=8fea0808-7bab-4370-8802-1e51d36b878c" target="_blank">Formulario de inscripción</a>
              </div>
            </div>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-pencil flex-shrink-0"></i>
              <div>
                <h4>Derechos de Inscripción:</h4>
                <p>Paga los derechos de Inscripción, por un valor de $88.750, a través de los siguientes medios:</p>
                <ul>
                  <li>Banco Colpatria: Cuenta corriente No.4901009371. Ten en cuenta que esta consignación debe realizarse en el Formato Transacciones Caja, indicando el nombre del aspirante en el espacio de «Nombre Titular», el documento de identidad del aspirante en la Referencia 1 y el número telefónico en la Referencia 2.</li>
                  <li>En la Tesorería de nuestras instalaciones.</li>
                  <li>A través de la Página Web, ingresando en PSE</li>
                </ul>
              </div>
              </div>
              
              </div>
   

            
          <div className="col-lg-6 img-bg justify-content-center" style={{backgroundImage:`url(${ins1})`}} data-aos="zoom-in" data-aos-delay="100">
          </div>
          
          

          

          <div className="col-lg-6 img-bg justify-content-center" style={{backgroundImage:`url(${ins2})`}} data-aos="zoom-in" data-aos-delay="100">
          </div>


          <div className="col-lg-6 d-flex flex-column">
            
            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-file-earmark flex-shrink-0"></i>
              <div>
                <h4>Soporte original de tu pago</h4>
                <p> Entrega el soporte original de tu pago y los siguientes documentos en la Oficina de Admisiones:</p>
                <ul>
                  <li>Copia del documento de identidad (Ampliada al 150%)</li>
                  <li>Copia del carné o certificación de EPS o SISBEN</li>
                  <li>Resultado de las Pruebas Saber 11 (ICFES)</li>
                  <li>Copia del acta de grado de bachiller</li>
                  <li>Foto 3×4</li>
                </ul> 
              </div>
            </div>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-pencil flex-shrink-0"></i>
              <div>
                <h4>Orden de Matriculas</h4>
                <p>Entrega el comprobante de pago original y copia de la orden de matrícula mediante consignación en bancos o soportes de financiación en Admisiones.</p>
              </div>
            </div>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-receipt flex-shrink-0"></i>
              <div>
                <h4>Plan Influencer 2023-1</h4>
                <p>Comparte tu experiencia con familiares, compañeros de trabajo o amigos y recibe incentivos por matrícula efectiva de tus referidos.</p>

                <p>Consulta <a href={pdfinfluencer} target="_blank">aquí</a> términos y condiciones del programa (documento original firmado).</p>
              </div>
            </div>

            
          

        </div>
        </div>
        </div>
    </section>
        </>

    )
}

export default ProcesoInscripcion