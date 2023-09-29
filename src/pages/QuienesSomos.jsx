import React from "react";
import '../css/quienes_somos.css'
import about1 from'../../src/img/about_1.png'
import banner from '../../src/img/quienes_somos.jpeg'
import info1 from '../../src/img/about/prin-about-1.png'
import info2 from '../../src/img/about/prin-about.png'

const QuienesSomos = () => {
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${banner})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>
        

        <section id="about" className="about">
        <div className="container" data-aos="fade-up">
  
          <div className="row position-relative">
  
            <div className="col-lg-6 about-img" style={{backgroundImage:`url(${about1})`}}></div>
  
            <div className="col-lg-6">
              <div className="our-story">
                <h3>Reseña Histórica</h3>
                <p>La<strong> FUNDACIÓN UNIVERSITARIA HORIZONTE – UNIHORIZONTE -</strong>, se presenta a la comunidad educativa en el 2014, año en el que el Ministerio de Educación Nacional, a través de la Resolución No. 9432 del 19 de junio, autoriza a la <strong> FUNDACIÓN INSTITUTO SUPERIOR DE CARRERAS TÉCNICAS –INSUTEC-</strong> el cambio en su denominación y nivel según lo establecido en la Ley 30 de 1992 y otras normas vigentes, para orientar su quehacer educativo a la formación de profesionales como seres humanos íntegros, que desarrollen su proyecto de vida a la luz de las concepciones humanistas contemporáneas, y que reivindiquen las dimensiones de la formación universitaria, como son la autonomía, la diversidad integrada, lo cognitivo, lo estético, lo axiológico y lo espiritual, entre otras, y las cuales están direccionadas hacia el desarrollo humano y la experiencia cotidiana de la Felicidad, entendidas estas dimensiones como los presupuestos básicos y a través de los cuales se forman personas dignas, autónomas y exitosas, capaces de transformar la realidad que les rodea por medio de su propia experiencia personal y del desarrollo de las competencias complejo-humanísticas, en el contexto del modelo <strong>pedagógico constructivista</strong> y del <strong> enfoque del aprendizaje significativo</strong>, pilares de sus procesos formativos como lo indica su diseño curricular (UNIHORIZONTE, 2018 b).</p>
  
                <p>
                  Una vez alcanzado el cambio de carácter,<strong> UNIHORIZONTE</strong> inicia ante al Ministerio de Educación Nacional el proceso de solicitud de registros calificados para la aprobación de programas académicos del nivel universitario, siendo la<strong> Ingeniería en Seguridad e Higiene Ocupacional</strong> el primer Programa requerido y aprobado mediante Resolución 7596 del 27 de mayo de 2015.
                </p>
                
              </div>
            </div>
            
          </div>
  
        </div>
      </section>

      <section id="principios" className="principios">
                  <div className="container" data-aos="fade-up">
            
                    <div className="row">
                      <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="zoom-in" data-aos-delay="100">

                        <h3>Visión</h3>
                        <div className="icon-box position-relative" data-aos="fade-up" data-aos-delay="100">
                          <p>Unihorizonte será reconocida en el 2026 en el ámbito nacional e internacional, por la alta calidad académica e institucional, ofreciendo soluciones creativas e innovadoras a través de la formación empresarial como solución a las necesidades del sector productivo y de empleabilidad, contribuyendo al desarrollo de la felicidad de todos.</p>
                        </div>
                      </div>

                      
                      <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h3>Misión</h3>
                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                          <p>Impulsar y desarrollar la cultura emprendedora, las competencias y recursos de las personas y organizaciones para generar valor a la sociedad a través de la innovación, el ecosistema emprendedor y los procesos empresariales con el objetivo de ser un horizonte para el desarrollo de la felicidad de todos.</p>
                          </div>
                          </div>
                          </div>
                          </div>
                          </section>

    <section id="principios" className="principios">
      <div className="container" data-aos="fade-up">

        <div className="row justify-content-around gy-4">
          <div className="col-lg-6 img-bg" style={{backgroundImage:`url(${info2})`}} data-aos="zoom-in" data-aos-delay="100"></div>

          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h3>Principios Institucionales</h3>
            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-emoji-laughing flex-shrink-0"></i>
              <div>
                <h4>La Felicidad:</h4>
                <p>Considerada como el único bien absoluto que permite una relación de alteridad en la cual, el otro juega un papel fundamental contribuyendo a la realización de todos, en la medida que los vínculos íntimos con las personas más cercanas facilitan su aceptación y reconocimiento, ponderándose así los vínculos
                  positivos interpersonales, para que al estar bien consigo mismo signifique estar bien con los demás.</p>
              </div>
            </div>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-patch-check flex-shrink-0"></i>
              <div>
                <h4>El Desarrollo del Talento:</h4>
                <p>Orientado a propender por la felicidad en quienes emprenden proyectos de vida con la institución, se promueven las oportunidades de desarrollo en su quehacer personal, profesional y cultural, para el fortalecimiento de ejes de desempeño que incentiven y definan una actitud de emprendimiento o de empleabilidad.</p>
              </div>
            </div>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-hand-thumbs-up flex-shrink-0"></i>
              <div>
                <h4>La Pasión:</h4>
                <p> Es la expresión de la motivación y el entusiasmo por emprender retos profesionales, permitiéndole a quienes integran la comunidad educativa Unihorizontista, empoderarse desde los ámbitos de autonomía, liderazgo y calidad profesional realizar lo que sienten que deben hacer como contribución a la felicidad, el bienestar y el desarrollo humano propio y el de los demás.</p>
              </div>
            </div>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-award flex-shrink-0"></i>
              <div>
                <h4>El Desarrollo Local:</h4>
                <p>A partir de las demandas que hace el entorno inmediato de la Institución, se constituye en eje del desarrollo global como entorno mediato al que han de responder sus egresados en el ejercicio de sus capacidades y valor diferenciador adquirido como profesionales Unihorizontistas.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <section id="principios-2" className="principios ">
      <div className="container" data-aos="fade-up">

        <div className="row justify-content-around gy-4">
          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h3>Valores Institucionales</h3>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-flag flex-shrink-0"></i>
              <div>
                <h4>La Perseverancia:</h4>
                <p>La Institución asume sus tareas con constancia, esfuerzo y dedicación, hasta conseguir los objetivos, logros y metas que se propone, sin renunciar o detenerse frente a los obstáculos que puedan presentarse en su devenir como IES.</p>
              </div>
            </div>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-palette flex-shrink-0"></i>
              <div>
                <h4>La Creatividad:</h4>
                <p>La Institución cambia la rutina por el hábito de la innovación y la visión; ella se atreve a forjar un mejor camino para dar solución a los problemas que le son propios a la situación actual, a partir de un pensamiento original, divergente y creativo, en el cual ellos son concebidos como oportunidades de mejoramiento.</p>
              </div>
            </div>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-chat-square-heart flex-shrink-0"></i>
              <div>
                <h4>La Lealtad:</h4>
                <p>La Institución permanece firme en el cumplimiento de sus valores y defiende aquello en lo que cree, constituyéndose en una familia y una empresa, reiterando su vocación de servicio, a través del respaldo y la confianza en las personas que constituyen su comunidad educativa.</p>
              </div>
            </div>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-signpost-split flex-shrink-0"></i>
              <div>
                <h4>El Respeto:</h4>
                <p>Al interior de la Institución se reconoce y respeta la diferencia de ideas, la pluralidad y la tolerancia, como enclaves básicos de la convivencia armónica y pacífica. Asume con dignidad, serenidad y reflexión las distintas formas de personalidad, de conocimiento y de pensamiento, permitiendo así espacios de inclusión desde todos los ámbitos de la vida personal, cultural y comunitaria.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 img-bg" style={{backgroundImage: `url(${info1})`}} data-aos="zoom-in" data-aos-delay="100"></div>
        </div>
      </div>
      </section>
  


      </>
     
    )
}


export default QuienesSomos