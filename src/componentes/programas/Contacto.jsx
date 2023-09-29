import React from "react";


export const Contacto = ({Facultad, Telefono, Email}) => {
    return(
        <>

    <section id="contacto" className="contacto">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 ">

        <div className="text-center ">
            <h3>Contacto</h3>
            </div>
          <div className="col-lg-4">
            <div className=" info-item  d-flex flex-column justify-content-center align-items-center">

              <h3>Dirección de mercadeo</h3>
              <p>Tel: 7437270 Ext. 170</p>
              <p>Correo: dir.mercadeo@unihorizonte.edu.co</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center">

              <h3>Admisiones</h3>
              <p>Tel 7437270 Ext. 127</p>
              <p>Correo: admisiones@unihorizonte.edu.co</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center">

              <h3>{Facultad}</h3>
              <p>{Telefono}</p>
              <p>{Email}</p>
            </div>
          </div>
        </div>
        </div>
        </section>
        </>
    )
}

