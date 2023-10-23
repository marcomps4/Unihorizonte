import { Link } from "react-router-dom";
export const FacultadesCard=({title, imgUrl, snies, semestre, link}) =>{

  const ScrollToTop = () => {
    window.scrollTo({
      top: (0,0),
      behavior: 'smooth',
    });

  return null;
}


    return(
        
        <div className="col-xl-4 col-md-6">
            <div className="facultades-item position-relative h-100" data-aos="fade-up" data-aos-delay="300">
  
              <div className="facultades-img position-relative overflow-hidden">
                <img src={imgUrl} className="img-fluid" alt="" />
              </div>
  
              <div className="facultades-content d-flex flex-column align-items-center">
  
                <h3 className="facultades-title">{title}</h3>
  
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-calendar"></i> <span className="ps-2">{semestre}</span>
                  </div>
                  <span className="bar text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-card-checklist"></i> <span className="ps-2">{snies}</span>
                  </div>
                </div>
  
  
                <Link to={link} onClick={ScrollToTop} className="readmore stretched-link" ></Link>
  
              </div>
  
            </div>
          </div>
        
    )
}