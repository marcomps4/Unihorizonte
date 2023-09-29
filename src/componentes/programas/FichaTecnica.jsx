import React from "react";
import { useModal } from "../../hook/useModal";
import Modal  from "../Modal";
import {TbLicense} from 'react-icons/tb';
import {PiCertificate} from 'react-icons/pi';
import {SiGoogleclassroom} from 'react-icons/si';
import {GiClassicalKnowledge} from 'react-icons/gi';
import {PiListNumbersFill} from 'react-icons/pi';
import {BiTimer} from 'react-icons/bi';
import {MdOutlinePlace} from 'react-icons/md';
import {FaBarcode} from 'react-icons/fa6';
import {LiaCertificateSolid} from 'react-icons/lia';
import {LiaCoinsSolid} from 'react-icons/lia';


export const Fichatecnica = ({Ficha, Denominación, Titulo, Modalidad, Creditos, Semestres, Jornada, Ciudad, Snies, Registro, Matricula,  Video, planEstudio, videoFondo  }) => {

  //Modal
  const[isOpenModalVideo, openModalVideo, closeModalVideo] = useModal(false);
    return(
      <>  

<section id="cursos" className="cursos pt-0">
      <div className="container" data-aos="fade-up">
      <div className="col-lg-12 col-md-12 text-center">
        <h2>{Denominación}</h2>
        </div>

        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
            <div>
            <img src={videoFondo} className="img-fluid" alt=""/>
            <a onClick={openModalVideo} className="play-btn"></a>
            </div>

        <div className="plane">
        <h3>Plan de estudios</h3>
        <a className="btn-estudios" href={planEstudio} target="_blank">{Denominación}</a>
        </div>

          </div>
          <div className="col-lg-6 content">
            <h3>Propuesta de valor</h3>
            <p className="propuesta">{Ficha}</p>
            <h3>Ficha Técnica</h3>
            
            <div className="row cursos-ficha">
            <div className="col-lg-6 col-md-6  content order-last  order-lg-first">
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i><TbLicense/></i>
                <div>
                  <h5>Denominación:</h5>
                  <p>{Denominación}</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <i><PiCertificate/></i>
                <div>
                  <h5>Título:</h5>
                  <p>{Titulo}</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i><SiGoogleclassroom/></i>
                <div>
                  <h5>Modalidad:</h5>
                  <p>{Modalidad}</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i><GiClassicalKnowledge/></i>
                <div>
                  <h5>Número de créditos:</h5>
                  <p>{Creditos}</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i><PiListNumbersFill/></i>
                <div>
                  <h5>Semestres:</h5>
                  <p>{Semestres}</p>
                </div>
              </li>
              </ul>
              </div>

              <div className="col-lg-6 col-md-6 content order-last  order-lg-first">
                <ul>
              <li data-aos="fade-up" data-aos-delay="300">
                <i><BiTimer/></i>
                <div>
                  <h5>Jornada:</h5>
                  <p>{Jornada}</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i><MdOutlinePlace/></i>
                <div>
                  <h5>Ciudad:</h5>
                  <p>{Ciudad}</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i><FaBarcode/></i>
                <div>
                  <h5>Código SNIES:</h5>
                  <p>{Snies}</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i><LiaCertificateSolid/></i>
                <div>
                  <h5>Resolución Registro Calificado:</h5>
                  <p>{Registro}</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <i><LiaCoinsSolid/></i>
                <div>
                  <h5>Valor matricula:</h5>
                  <p>{Matricula}</p>
                </div>
              </li>
            </ul>


            </div>
            </div>
          </div>
        </div>

      </div>

      <Modal 
        isOpen = {isOpenModalVideo}
        closeModal = {closeModalVideo}>

        <iframe 
        width="100%" 
        height="315" 
        src={Video} 
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>

      </Modal>
    </section>



                

       
      </>
    )   
}

