
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../img/logo.png";
import { Link } from "react-router-dom";



const Header = () => {

  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
  };

  const toggleDropdown = (event) => {
    if (isMobileNavActive) {
      event.preventDefault();
      event.target.classList.toggle('active');
      event.target.nextElementSibling.classList.toggle('dropdown-active');

      const dropDownIndicator = event.target.querySelector('.dropdown-indicator');
      dropDownIndicator.classList.toggle('bi-chevron-up');
      dropDownIndicator.classList.toggle('bi-chevron-down');
    }
  };

  const handleNavlinkClick = () => {
    if (isMobileNavActive) {
      closeMobileNav();
    }

  };

 


    return (

      <header id="header" className= "header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between ">

      <Link to="/" className="logo d-flex align-items-center">
        <img src={logo} alt="Logo Unihorizonte"/>
        
      </Link>

      <i className={`mobile-nav-toggle ${isMobileNavActive ? 'mobile-nav-hide' : 'mobile-nav-show'} d-nonebi bi-list`} onClick={toggleMobileNav}></i>
      <i  className={`mobile-nav-toggle ${isMobileNavActive ? 'mobile-nav-show' : 'mobile-nav-hide'}  bi bi-x`} onClick={closeMobileNav}></i>
      <nav id="navbar" className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''}`}> 
      
        <ul>
          <li className="dropdown"><Link to="#" className="active"><span>Institucional</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li className="dropdown"><Link to="#"><span>Nuestra Institución</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><Link to="/QuienesSomos">Quienes Somos</Link></li>
                  <li><Link to="innovacion.html">Instituto de Innovación y Emprendimiento</Link></li>

                </ul>
              </li>

              <li><Link to="/Documentos"><span>Documentos</span> </Link></li>
             
            </ul>
          </li>

          <li className="dropdown"><Link to="#"><span>Programas</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li className="dropdown"><Link to="#"><span>Facultades</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><Link to="/facultades/facultadIngenieria">Facultad de Ingeniería</Link></li>
                  <li><Link to="/facultades/facultadCienciasAdministrativas">Facultad de Ciencias Administrativas</Link></li>
                  <li><Link to="/facultades/facultadComunicacion">Facultad de Comunicación, Arte y Marketing Digital</Link></li>
                  <li><Link to="/facultades/facultadGastronomia">Faculta de  de Gastronomía</Link></li>
                  <li><Link to="/facultades/facultadCienciasJuridicas">Facultad de ciencias juridicas</Link></li>
                </ul>
              </li>
              <li><Link to="/posgrados">Posgrados</Link></li>

              <li className="dropdown"><Link to="#"><span>Educación Continuada</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
              
                <ul>
                  <li><a href="https://unihorizonte.edu.co/programas/diplomados/">Diplomados</a></li>
                  <li><a href="https://unihorizonte.edu.co/programas/cursos-rapidos/">Cursos y Seminarios</a></li>
                  <li><a href="http://campus.unihorizonte.edu.co/certificados/">Certificados de educación Continua</a></li>
                </ul>
              </li>
              
            </ul>
          </li>

          <li className="dropdown"><Link to="#"><span>Admisiones</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><Link to="proceso_inscripcion.html">Proceso de Inscripción</Link></li>
              <li><a href="https://unihorizonte.edu.co/admisiones/financiamiento/">Financiamento</a></li>
            </ul>
          </li>

          <li className="dropdown"><Link to="#"><span>Proyección Social</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li className="dropdown"><Link to="#"><span>Egresados</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><a href="https://unihorizonte.edu.co/soy-unihorizontista/egresados/">Egresados</a></li>
                  <li><a href="https://unihorizonte.edu.co/soy-unihorizontista/eventos-para-egresados/">Noticias para Egresados</a></li>
                </ul>
              </li>
              <li><a href="https://unihorizonte.edu.co/soy-unihorizontista/practicas/">Prácticas</a></li>
            </ul>
          </li>

          <li ><Link to="/investigacion"><span>Investigación</span></Link>
            
          </li>

          <li className="dropdown"><Link to="#"><span>Bienestar</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><a href="https://unihorizonte.edu.co/soy-unihorizontista/bienestar/">Bienestar Universitario</a></li>
              <li><a href="https://unihorizonte.edu.co/biblioteca/">Biblioteca</a></li>
            </ul>
          </li>

          <li><a href="https://campusvirtual.unihorizonte.edu.co/f70d2d351209d4ccee0099b992b51a53/campus/index.html" target="_blank" >Campus Virtual</a></li>

          <li><Link to="#" target="_blank">Q10</Link></li>
          
          

        </ul>
      </nav>

    </div>
  </header>
      

      
  
     

        
    )
}

export default Header