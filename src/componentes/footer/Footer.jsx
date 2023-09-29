import React from "react";
import '../footer/footer.css';
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <footer id="footer" className="footer">

    <div className="footer-content position-relative">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <img src={logo} alt="" width="50%" style={{marginbbottom: '20px'}}/>
              <p>
                Calle 69 # 14 – 30 Alcazares<br/>
                Bogotá<br/>

              </p>
              <div className="social-links d-flex mt-3">
                <Link to="/home" className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter"></i></Link>
                <Link to="#/" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></Link>
                <Link to="#/" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></Link>
                <Link to="#/" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></Link>
                <Link to="#/" className="d-flex align-items-center justify-content-center"><i className="bi bi-youtube"></i></Link>
                <Link to="#/" className="d-flex align-items-center justify-content-center"><i className="bi bi-tiktok"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Mapa del sitio</h4>
            <ul>
              <li><Link to="#/">Inicio</Link></li>
              <li><Link to="#/">Faculatdes</Link></li>
              <li><Link to="#/">Noticias y Eventos</Link></li>
              <li><Link to="#/">Convenios</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Facultades</h4>
            <ul>
              <li><Link to="#/">Ingenierías</Link></li>
              <li><Link to="#/">Ciencias Administrativas</Link></li>
              <li><Link to="#/">Comunicación, Arte y Marketing Digital</Link></li>
              <li><Link to="#/">Gastronomía</Link></li>
              <li><Link to="#/">Ciencias Jurídicas</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Links de Importancia</h4>
            <ul>
              <li><Link to="#/">Q10</Link></li>
              <li><Link to="#/">Correo Unihorizonte</Link></li>
              <li><Link to="#/">Servicios</Link></li>
              <li><Link to="#/">Proceso de inscripción</Link></li>
            </ul>
          </div>

        

        </div>
      </div>
    </div>

    <div className="footer-legal text-center position-relative">
      <div className="container">
        <div className="copyright">
        &copy; Copyright <strong><span>Unihorizonte,</span></strong> Fundación Universitaria Horizonte. Res. 11106 – 13 Julio 1983 – Res. 9432 – 19 Junio 2014 <br/>Política de privacidad | Vigilado MinEducación
        </div>
        </div>
      </div>
    

  </footer>

  
    )
}

export default Footer