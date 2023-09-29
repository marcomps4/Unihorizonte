import React from "react"
import "../convenios/convenios.css";
import ibm from "../../../img/Convenios/ibm.png";
import postobon from "../../../img/Convenios/Postobon.png";
import sipan from "../../../img/Convenios/sipan.png";
import funiber from "../../../img/Convenios/funiber.png";
import franklin from "../../../img/Convenios/franklin.png";
import acodres from "../../../img/Convenios/acodres.png";
import consejo from "../../../img/Convenios/consejo.png";
import remington from "../../../img/Convenios/remington.png";
import unp from "../../../img/Convenios/unp.png";
import osa from "../../../img/Convenios/osa.png";


const Convenios = () => {
    return(
        <section id="clients" className="clients">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Convenios</h2>
          <p>Enriquece tu vida académica e interactúa en distintas culturas, ambientes y formas de aprendizaje que ampliarán tu experiencia profesional y personal.</p>
        </div>

        <div className="clients-slider">
            <div className="clients-slider-track">
          
        <div className="clients-slide"><img src={ibm}className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={postobon} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={sipan} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={funiber} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={franklin} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={acodres} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={consejo} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={remington} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={unp} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={osa}className="img-fluid" alt="" height={100} width={120}/></div>

        <div className="clients-slide"><img src={ibm}className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={postobon} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={sipan} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={funiber} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={franklin} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={acodres} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={consejo} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={remington} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={unp} className="img-fluid" alt="" height={100} width={120}/></div>
        <div className="clients-slide"><img src={osa}className="img-fluid" alt="" height={100} width={120}/></div>
       
        </div>

        


        

       
          </div>
        </div>

   </section>
    )

}

export default Convenios