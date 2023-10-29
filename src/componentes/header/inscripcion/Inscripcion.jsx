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
            <p>¡Prepárate para un emocionante viaje educativo en la U de la felicidad, el emprendimiento, la tecnología y la innovación! Completa el siguiente formulario de preinscripción, y pronto te contactaremos.</p>
            <ul>
              <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
            </ul>
            <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.</p>

            <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.</p>
          </div>
        </div>

        </div>

       
      </div>
    </section>
        </>
    )
}

export default Inscripcion