import { Link } from "react-router-dom"


export const CardFacultades=({title,imgUrl, link}) =>{

  const ScrollToTop = () => {
    window.scrollTo({
      top: (0,0),
      behavior: 'smooth',
    });

  return null;
}

    return(
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div className="card text-white card-has-bg click-col" style={{backgroundImage:`url(${imgUrl})`}} >
        <img className="card-img d-none" src={imgUrl} alt="Facultad de Ingeniería"/>
       <div className="card-img-overlay d-flex flex-column">
        <div className="card-body">
          
           <h4 className="card-title mt-0 "><Link className="text-white stretched-link" to ={link} onClick={ScrollToTop}>{title}</Link></h4>

         </div>
        
       </div>
     </div>
    </div>
    )
}