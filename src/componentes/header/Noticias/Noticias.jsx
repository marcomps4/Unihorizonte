import React from "react";
import '../Noticias/noticias.css'
import {CardNoticias} from "../Noticias/NoticiasCard"
import noticia1 from '../../../img/Noticias/new_1.jpg'
import noticia2 from '../../../img/Noticias/new_2.jpg'
import noticia3 from '../../../img/Noticias/new_3.jpg'



const Noticias = ()=>{


  const noticias = [
    {
      id: 1,
      title: "El eje de la felicidad se refuerza Horizonte en la Fundación Universitaria con los nuevos torniquetes – ¡sino sonríes no entras!",
      imgUrl: noticia1,
      fecha: "NOVIEMBRE 7,2023",
      nombre: "Ingeniera Diana Patricia Camargo Ramírez (Rectora) / Ingeniero Nicolai Cárdenas Pulido (Director Tic)",
      resumen: ""

    },
    {
      id: 2,
      title: "Las Emociones de los Alimentos: Un Viaje Desde el Placer al Significado",
      imgUrl: noticia2,
      fecha: "OCTUBRE 24,2023",
      nombre: "Edy Mayerly González Cañon",
      resumen: "La relación entre los alimentos y las emociones son una dimensión profundamente arraigada de la experiencia humana... "
    },
    {
      id: 3,
      title: "Análisis de texto y lecturas en estudiantes universitarios: Explorando las causas de la falta de gusto",
      imgUrl: noticia3,
      fecha: "OCTUBRE 9,2023",
      nombre: "Neftis Leyton Ramírez, docente investigador Grupo de Investigación GICENA",
      resumen: ""
    },
    
  ];
    return(
      
        <section id="New"className="New">
          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="section-header">
              <h2>Noticias y Eventos</h2>
              <p>Conoce los eventos más relevantes de UniHorizonte.</p>
            </div>
                   <div className="row gy-4 posts-list">

                   {
                          noticias.map((container, index) => {
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

export default Noticias