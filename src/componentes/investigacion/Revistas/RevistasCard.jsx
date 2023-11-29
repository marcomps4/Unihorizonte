import { Link } from "react-router-dom";
import { useModal } from "../../../hook/useModal";
import Modal  from "../../Modal";


export const RevistasCard=({title, imgContinua, pdf}) =>{

  const ScrollToTop = () => {
    window.scrollTo({
      top: (0,0),
      behavior: 'smooth',
    });

  return null;
};

  //Modal
  const[isOpenModalForm, openModalForm, closeModalForm] = useModal(false);


    return(

            <div className="col-lg-12 col-md-6 sm-6"> 
             
            <div className="revistas-item position-relative h-100 " data-aos="fade-up" data-aos-delay="300">
  
              <div className="revistas-img position-relative overflow-hidden">
                <img src={imgContinua} className="img-fluid" alt="" />
              </div>
  
              <div className="revistas-content d-flex flex-column align-items-center">
                <div className="revistas-title">
                <h3 className="revistas-title">{title}</h3>
                </div>
  
                <div className="revistas-btn meta d-flex ">


                  <a className="pago-btn" href={pdf} target="_blank">Ver más</a>

                  
                </div>
  
              </div>
  
            </div>
            </div>
            
          
        
    )
}