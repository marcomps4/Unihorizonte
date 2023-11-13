import { Link } from "react-router-dom";

export const EcontinuaCard=({title, imgContinua, link}) =>{

  const ScrollToTop = () => {
    window.scrollTo({
      top: (0,0),
      behavior: 'smooth',
    });

  return null;
}


    return(

            <div className="col-lg-4 col-md-6 sm-6"> 
             
            <div className="econtinuada-item position-relative h-100 " data-aos="fade-up" data-aos-delay="300">
  
              <div className="econtinuada-img position-relative overflow-hidden">
                <img src={imgContinua} className="img-fluid" alt="" />
              </div>
  
              <div className="econtinuada-content d-flex flex-column align-items-center">
                <div className="econtinuada-title">
                <h3 className="econtinuada-title">{title}</h3>
                </div>
  
                <div className="econtinuada-btn meta d-flex ">

                  <a className="pago-btn" href={link} target="_blank">Paga aquí</a>

                  
                </div>
  
              </div>
  
            </div>
            </div>
            
          
        
    )
}