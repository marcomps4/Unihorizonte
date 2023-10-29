import React from "react";
import '../css/financiamiento.css';
import logo1 from '../img/financiamiento/logo_sufi.svg';
import logo2 from '../img/financiamiento/logo_icetex.svg';
import logo3 from '../img/financiamiento/logo_finicomercio.png';
import logo4 from '../img/financiamiento/logo_financiar.png';
import logo5 from '../img/financiamiento/logo_coopfuturo.png';
import {FinanciamientoCard} from '../componentes/financiamiento/FinanciamientoCard'

const Financiamiento = () => {

    const financiamientoInfo = [
        {
          imgLogo: logo1,
          tel1: "(60)1 4446600 op 2",
          tel2: "318 752 87 22",
          docu1: "Documento de identidad",
          docu2: "No estar reportado",
          docu3: "Puede tener un codeudor si esta reportado",
          docu4: "Puede hacer la solicitud 100% online",
          docu5: "Puede pagar desde 6 hasta 12 cuotas",

          link: "https://sufi.grupobancolombia.com/sufi/creditos/campus-sufi/credito-educativo?utm_campaign=generico&utm_source=propio&utm_medium=abril&utm_content=entradilla-educativo",
        },
        {
            imgLogo: logo2,
            tel1: "(60)1 4173535",
            tel2: "",
            docu1: "Documento de identidad",
            docu2: "No estar reportado",
            docu3: "Puede tener un codeudor si esta reportado",
            docu4: "Puede hacer la solicitud 100% online",
            docu5: "Puede pagar desde 6 hasta 12 cuotas",
            link: "https://web.icetex.gov.co/portal",
  
          },
          {
            imgLogo: logo3,
            tel1: "(60)1 3078330",
            tel2: "317 573 94 65",
            docu1: "Documento de identidad",
            docu2: "No estar reportado",
            docu3: "Puede tener un codeudor si esta reportado",
            docu4: "Puede hacer la solicitud 100% online",
            docu5: "Puede pagar desde 6 hasta 12 cuotas",
            link: "https://www.fincomercio.com/",
  
          },
          {
            imgLogo: logo4,
            tel1: "(60)1 3271340 op 1",
            tel2: "315 890 52 29",
            docu1: "Dos copias de la cedula al 150% del codeudor",
            docu2: "Una copia de documento del aspirante al 150%",
            docu3: "Orden de pago",
            docu4: "Pago afiliación $ 7.000",
            docu5: "No estar reportado",
            link: "https://www.financiar.com.co/",
  
          },
          {
            imgLogo: logo5,
            tel1: "",
            tel2: "318 735 67 72",
            docu1: "Copia del documento de identidad del estudiante y codeudor",
            docu2: "Recibo de pago de la u",
            docu3: "Proceso 100% online",
            docu4: "Fondo auxiliomutual",
            docu5: "Cuotas de 3 a 12",
            link: "https://coopfuturo.com.co/",
  
          },
    ]
    
    return(
        <>
         <section id="financiamiento" className="financiamiento">
      <div className="container" data-aos="fade-up">

        <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
          <h2>Becas Horizonte</h2>

          <p className="financiamiento_principal">
          Cada uno de nuestros programas cuenta con una BECA para TI
          </p>
          <div className="align-items-center">
          <a className="financiamiento-btn" href="http://virtual.unihorizonte.edu.co:8090/Inscripciones/" target="_blank">Inscríbete</a>
          </div>

          <h2>Financiamiento</h2>


      </div>
      </div>
      </section>

      <section id="financiamiento-info" className="financiamiento-info pt-0">
      <div className="container" data-aos="fade-up">

    
        {
                          financiamientoInfo.map((div, index) => {
                            return (
                              <FinanciamientoCard
                                key={index}
                                {...div}
                                />
                            )
                          })
                        }
        </div>

       
    </section>
        </>

    )
}

export default Financiamiento