import { Link } from "react-router-dom"


export const CardFacultades=({title,imgUrl, link}) =>{
    return(
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div className="card text-white card-has-bg click-col" style={{backgroundImage:`url(${imgUrl})`}} >
        <img className="card-img d-none" src={imgUrl} alt="Facultad de Ingeniería"/>
       <div className="card-img-overlay d-flex flex-column">
        <div className="card-body">
          
           <h4 className="card-title mt-0 "><Link className="text-white stretched-link" to ={link}>{title}</Link></h4>

         </div>
        
       </div>
     </div>
    </div>
    )
}