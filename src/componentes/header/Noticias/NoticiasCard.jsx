import { Link } from "react-router-dom"

export const CardNoticias=({title,imgUrl,fecha,nombre,resumen}) =>{
    return(
        <div className="col-xl-4 col-md-6">
                <div className="post-item position-relative h-100">
    
                  <div className="post-img position-relative overflow-hidden">
                    <img src={imgUrl} className="img-fluid" alt=""/>
                    <span className="post-date">{fecha}</span>
                  </div>
    
                  <div className="post-content d-flex flex-column">
    
                   <Link to=""><h3 className="post-title">{title}</h3></Link>
    
                    <div className="meta d-flex align-items-center">
                      <div className="d-flex ">
                        <i className="bi bi-person"></i> <span className="ps-2">{nombre}</span>
                        
                      </div>

                    </div>
    
                    <p>
                      {resumen}
                    </p>
    
    
                  </div>
    
                </div>
              </div>
    )
}