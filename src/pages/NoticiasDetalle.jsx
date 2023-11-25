import React from "react";
import { useParams } from "react-router-dom";
import noticiasData from "../componentes/NoticiasData";
import NoticiasHome from '../componentes/header/Noticias/Noticias';
import  '../css/noticias_page.css';
import imgside1 from '../img/Noticias/side-bar-1.jpg';
import imgside2 from '../img/Noticias/side-bar-2.jpg';
import imgside3 from '../img/Noticias/side-bar-3.jpg';
import imgside4 from '../img/Noticias/side-bar-4.jpg';
import imgside5 from '../img/Noticias/side-bar-5.jpg';


const NoticiasDetalle = () => {
  const { id } = useParams();
  const noticiaId = parseInt(id);

  const noticiaSeleccionada = noticiasData.find((noticia) => noticia.id === noticiaId);

  if (!noticiaSeleccionada) {
    return <div>No se encontró la noticia</div>;
  }

  const { title, imgUrl, fecha, nombre, resumen, contenido, icono, categoria } = noticiaSeleccionada;

  const parrgrafosContenido = contenido.split('\n\n');

  const contenidoConEnlaces = parrgrafosContenido.map((parrafo, index) => {
    // Buscar URLs en el parrafo y reemplazarlas con enlaces
    const regex = /\[(.*?)\]/g;
    const parrafoConEnlaces = parrafo.replace(regex, (match, url) => {
      return <a key={index} href={url} target="_blank" rel="noopener noreferrer">{url}</a>;
    });

    return <p key={index}>{parrafoConEnlaces}</p>;
  });


    return(
        <>
        
        <section id="news" className="news">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row g-5">

          <div className="col-lg-8">

            <article className="news-details">

              <div className="post-img">
                <img src={imgUrl}alt="" className="img-fluid"/>
              </div>

              <h2 className="title">{title}</h2>

              <div className="meta-top">
                <ul>
                  <li className="d-flex align-items-center"><i className="bi bi-person"></i>{nombre}</li>
                  <li className="d-flex align-items-center"><i className="bi bi-clock"></i>{fecha}</li>
                
                </ul>
              </div>

              <div className="content">

                {parrgrafosContenido.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
        
      ))}
      
                

                
                {/* para colocar citas 
                <blockquote>
                  <p>
                    Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
                  </p>
                </blockquote>
                */}

                

              </div>

              <div className="meta-bottom">
                {icono}
                <ul className="cats">
                  <li><a href="#"> {categoria}</a></li>
                </ul>

              </div>

            </article>
            </div>
            

            <div className="col-lg-4">

<div className="sidebar">

<div className="sidebar-item search-form">
                <h3 className="sidebar-title">Buscar</h3>
                <form action="" className="mt-3">
                  <input type="text"/>
                  <button type="submit"><i className="bi bi-search"></i></button>
                </form>
              </div>

  <div className="sidebar-item categories">
    <h3 className="sidebar-title">Categorías</h3>
    <ul className="mt-3">
      <li><a href="#">Unihorizonte <span>(25)</span></a></li>
      <li><a href="#">Estilo de vida <span>(12)</span></a></li>
      <li><a href="#">Viajes <span>(5)</span></a></li>
      <li><a href="#">Diseño <span>(22)</span></a></li>
      <li><a href="#">Educación <span>(8)</span></a></li>
      <li><a href="#">Investigación <span>(14)</span></a></li>
    </ul>
  </div>

  <div className="sidebar-item recent-posts">
    <h3 className="sidebar-title">Artículos relacionados</h3>

    <div className="mt-3">

      <div className="post-item mt-3">
        <img src={imgside1} alt=""/>
        <div>
          <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
          <time >Julio 1, 2023</time>
        </div>
      </div>

      <div className="post-item">
        <img src={imgside2} alt=""/>
        <div>
          <h4><a href="#">Quidem autem et impedit</a></h4>
          <time >Agosto 13, 2023</time>
        </div>
      </div>

      <div className="post-item">
        <img src={imgside3} alt=""/>
        <div>
          <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
          <time >Sept 15, 2023</time>
        </div>
      </div>

      <div className="post-item">
        <img src={imgside4} alt=""/>
        <div>
          <h4><a href="#">Laborum corporis quo dara net para</a></h4>
          <time >Sept 15, 2023</time>
        </div>
      </div>

      <div className="post-item">
        <img src={imgside5} alt=""/>
        <div>
          <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
          <time >Sept 15, 2023</time>
        </div>
      </div>

    </div>

  </div>



</div>

</div>
</div>

            </div>
            </section>
            
        </>

    )
}

export default NoticiasDetalle