export const FinanciamientoCard = ({imgLogo, tel1, tel2, docu1, docu2, docu3, docu4, docu5,  link} ) =>{

    return(
        <>
        <div className="row gy-4 financiamiento-item" data-aos="fade-up" data-aos-delay="100">
       <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <img  className="financiamiento-logo" src={imgLogo} alt="logo-financiamiento"/>
          </div>
          <div className="col-lg-3 d-flex  align-items-center justify-content-center">
            <div>
            <h4>{tel1}</h4> 
            <h4> <i class="bi bi-whatsapp"></i> {tel2}</h4>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <ul>
              <li><i className="bi bi-check"></i>{docu1}</li>
              <li><i className="bi bi-check"></i>{docu2}</li>
              <li><i className="bi bi-check"></i>{docu3}</li>
              <li><i className="bi bi-check"></i>{docu4}</li>
              <li><i className="bi bi-check"></i>{docu5}</li>

              
            </ul>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <div className="text-center"><a href={link} target="_blank" className="buy-btn">Más información</a></div>
          </div>
          </div>
        </>
        
    )
}