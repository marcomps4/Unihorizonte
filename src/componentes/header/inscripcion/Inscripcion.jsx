import React from "react";
import bannerpre from '../../../img/cursos/banner-prei-02.jpg';
import '../inscripcion/inscripcion.css';

const Inscripcion = () =>{
    return(
        <>
         <section id="inscripcion" className="inscripcion">
      <div className="container">

      <div className="row position-relative">

      <a href="https://site2.q10.com/Preinscripcion?aplentId=8fea0808-7bab-4370-8802-1e51d36b878c" target="_blank">
        <div className="col-lg-7 inscripcion-img">
          <div style={{backgroundImage:`url(${bannerpre})`}}></div>
      </div>
        </a>
        

        <div className="col-lg-7 contenido">
          <h2>Queremos conocerte</h2>
          <div className="our-story">
            <p>¡Convierte tus Sueños en Realidad Ahora!</p>
            <p>Ven a la U de la Felicidad, el Bilingüismo, la innovación, la tecnología y el emprendimiento. </p>
            <p>Entra en el mundo de infinitas posibilidades. ¿Alguna vez has deseado cambiar tu vida, alcanzar tus metas más ambiciosas y vivir el estilo de vida que siempre has soñado? ¡Ahora es tu momento! Pero para hacerlo posible, necesitamos tu ayuda. </p>
            <p>Nosotros estamos aquí para ayudarte a transformar tus sueños en realidad, estamos para ti, para que tus pasiones sean lo que mueve tú ser. Necesitamos tu ayuda, déjanos tus datos para que podamos ofrecerte las herramientas y recursos adecuados. Con tu información, podemos personalizar nuestra orientación y proporcionarte el apoyo que necesitas. </p>

            <p>¿Qué obtendrás al dejarnos tus datos? </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> <span>Asesoramiento Personalizado: Nuestro equipo estará a tu disposición para guiarte en cada paso del camino hacia el éxito. </span></li>
              <li><i className="bi bi-check-circle"></i> <span>Comunidad de Apoyo: Conectarás con una comunidad de personas apasionadas y motivadas como tú, dispuestas a compartir experiencias y brindarte apoyo incondicional.</span></li>
              
            </ul>
          </div>
        </div>

        </div>

       
      </div>
    </section>
        </>
    )
}

export default Inscripcion