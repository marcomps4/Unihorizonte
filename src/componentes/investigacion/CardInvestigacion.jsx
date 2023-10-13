import React from "react"


export const CardInvestigacion=({title, imgUrl, imgback, categoria, depto, lider, email})=> {
    return(
        <>
         <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="service-item">
              <div className="img">
                <img src={imgback} className="img-fluid" alt=""/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                <img src={imgUrl} className="logo_investigacion" alt="logo"/>
                </div>
                  <h3>{title}</h3>
                <p><strong>{categoria}</strong></p>
                <p className="descripcion">{depto}</p>
                <p>{lider}</p>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </>

    )
} 