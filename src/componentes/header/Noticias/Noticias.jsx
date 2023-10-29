import React from "react";
import '../Noticias/noticias.css'
import {CardNoticias} from "../Noticias/NoticiasCard"
import noticia1 from '../../../img/Noticias/new_1.jpeg'
import noticia2 from '../../../img/Noticias/new_2.jpeg'
import noticia3 from '../../../img/Noticias/new_3.jpeg'



const Noticias = ()=>{


  const noticias = [
    {
      title: "La Gamificación: un ejemplo aprendiendo Inglés",
      imgUrl: noticia1,
      fecha: "MAYO 10,2023",
      nombre: "Diana Patricia Camargo Ramírez",
      resumen: "Un concepto fundamental que se debe entender para hacer gamificación es la importancia de mantener el interés o de forma más clara la importancia de mantener la motivación."

    },
    {
      title: "Reflexión de los TDS y su importancia en el café de especialidad",
      imgUrl: noticia2,
      fecha: "MAYO 3,2023",
      nombre: "Lissete Johana Bolívar Buitrago",
      resumen: "Dentro de la Industria del café de especialidad siempre te vas a encontrar con el cuestionamiento de los porcentajes de extracción y TDS en donde todo se vuelve subjetivo y cada persona tiene una idea diferente acerca de estos temas. "
    },
    {
      title: "Autorregulación e inteligencia",
      imgUrl: noticia3,
      fecha: "MAYO 2,2023",
      nombre: "Unihorizonte",
      resumen: "La autorregulación es la capacidad de los individuos para modificar su conducta en virtud de las demandas de situaciones específicas."
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