import React from "react";
import '../Noticias/noticias.css';
import {CardNoticias} from "../Noticias/NoticiasCard";
import noticiasData from '../../NoticiasData';





const NoticiasHome = ()=>{

 

    return(
      
        <section id="New"className="New">
          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="section-header">
              <h2>Noticias y Eventos</h2>
              <p>Conoce los eventos más relevantes de UniHorizonte.</p>
            </div>
                   <div className="row gy-4 posts-list">

                        {
                              noticiasData.map((container, index) => {
                                return (
                                  <CardNoticias
                                    key={index}
                                    {...container}
                                    />
                                )
                              })
                            }

                
              </div>
              </div>
                         
            </section>
    )
  }

export default NoticiasHome