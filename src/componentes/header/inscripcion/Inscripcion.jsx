import React from "react";
import bannerpre from '../../../img/cursos/banner-prei-01.jpg';
import '../inscripcion/inscripcion.css';

const Inscripcion = () =>{
    return(
        <>
         <section id="inscripcion" className="inscripcion">
      <div className="container">

        <div className="row justify-content-between gy-4">

          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
            <div className="content">
              <h3>Queremos conocerte</h3>
              <p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa. Eos ipsum nobis ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi possimus ut delectus dicta.</p>
              <p>Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos. Deserunt porro magni qui necessitatibus dolorem at animi cupiditate.</p>
            </div>
          </div>

          <div className="col-lg-5" data-aos="fade">
          <a href="https://site2.q10.com/Preinscripcion?aplentId=8fea0808-7bab-4370-8802-1e51d36b878c" target="_blank"><img src={bannerpre} alt="" className=" img-fluid align-items-center img"/></a>
            
          </div>

        </div>

      </div>
    </section>
        </>
    )
}

export default Inscripcion