import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../img/logo.png";
import { Link } from "react-router-dom";



const Header = () => {

  const ScrollToTop = () => {
    window.scrollTo({
      top: (0,0),
      behavior: 'smooth',
    });

  return null;
}

  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

 

  useEffect(() => {
    if (isMobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [isMobileNavActive]);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const toggleDropdown = (event) => {
    if (isMobileNavActive) {
      event.preventDefault();
      event.stopPropagation(); // Detener la propagación del evento
  
      const targetElement = event.target;
      const nextElement = targetElement.nextElementSibling;
      const dropDownIndicator = targetElement.querySelector('.dropdown-indicator');
  
      if (targetElement && nextElement && dropDownIndicator) {
        targetElement.classList.toggle('active');
        nextElement.classList.toggle('dropdown-active');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    }
  };

  const handleNavlinkClick = () => {
    if (isMobileNavActive) {
      // Cerrar la navegación móvil cuando se hace clic en un enlace
      closeMobileNav();
    }
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
  };
 


    return (

      <header id="header" className= "header d-flex align-items-center">
         <div className="container-fluid container-xl d-flex align-items-center justify-content-between ">

      <Link to="/" className="logo d-flex align-items-center" onClick={ScrollToTop}>
        <img src={logo} alt="Logo Unihorizonte"/> 
        
      </Link>

      <i className={`mobile-nav-toggle ${isMobileNavActive ? 'mobile-nav-hide' : 'mobile-nav-show'}  bi bi-list`} onClick={toggleMobileNav}></i>
      <i  className={`mobile-nav-toggle ${isMobileNavActive ? 'mobile-nav-show' : 'mobile-nav-hide'} d-none  bi bi-x`} onClick={closeMobileNav}></i>
      <nav id="nav_bar" className="nav_bar"> 
      
        <ul>
          <li className="dropdown"onClick={toggleDropdown}><Link to="#" onClick={ScrollToTop} ><span>Institucional</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li className="dropdown"onClick={toggleDropdown} ><Link to="#"onClick={ScrollToTop}><span>Nuestra Institución</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li onClick={handleNavlinkClick}><Link to="/QuienesSomos"onClick={ScrollToTop} >Quienes Somos</Link></li>
                  <li onClick={handleNavlinkClick}><Link to="/construccion"onClick={ScrollToTop} >Instituto de Innovación y Emprendimiento</Link></li>

                </ul>
              </li>

              <li  onClick={handleNavlinkClick}><Link to="/Documentos" onClick={ScrollToTop}><span>Documentos</span> </Link></li>
             
            </ul>
          </li>

          <li className="dropdown" onClick={toggleDropdown} ><Link to="#"onClick={ScrollToTop}><span>Programas</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li className="dropdown" onClick={toggleDropdown}><Link to="#"onClick={ScrollToTop}><span>Facultades</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li onClick={handleNavlinkClick}><Link to="/facultades/facultadIngenieria" onClick={ScrollToTop}>Facultad de Ingeniería</Link></li>
                  <li onClick={handleNavlinkClick}><Link to="/facultades/facultadCienciasAdministrativas"onClick={ScrollToTop}>Facultad de Ciencias Administrativas</Link></li>
                  <li onClick={handleNavlinkClick}><Link to="/facultades/facultadComunicacion"onClick={ScrollToTop}>Facultad de Comunicación, Arte y Marketing Digital</Link></li>
                  <li onClick={handleNavlinkClick}><Link to="/facultades/facultadGastronomia"onClick={ScrollToTop}>Faculta de  de Gastronomía</Link></li>
                  <li onClick={handleNavlinkClick}><Link to="/facultades/facultadCienciasJuridicas"onClick={ScrollToTop}>Facultad de ciencias juridicas</Link></li>
                </ul>
              </li>
              <li onClick={handleNavlinkClick}><Link to="/posgrados" onClick={ScrollToTop}>Posgrados</Link></li>

              <li className="dropdown" onClick={toggleDropdown} ><Link to=""><span>Educación Continuada</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
              
                <ul>
                  <li onClick={ScrollToTop}><Link to="/educacionContinua" onClick={handleNavlinkClick}>Diplomados - Cursos</Link></li>
                  <li><a href="http://campus.unihorizonte.edu.co/certificados/"onClick={handleNavlinkClick}>Certificados de educación Continua</a></li>
                </ul>
              </li>
              
            </ul>
          </li>

          <li className="dropdown" onClick={toggleDropdown}><Link to="#" onClick={ScrollToTop}><span>Admisiones</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li onClick={handleNavlinkClick}><Link to="/Proceso_de_inscripcion" onClick={ScrollToTop}>Proceso de Inscripción</Link></li>
              <li onClick={handleNavlinkClick}><Link to="/Financiamiento" onClick={ScrollToTop}>Financiamento</Link></li>
            </ul>
          </li>

          <li className="dropdown" onClick={toggleDropdown}><Link to="#" onClick={ScrollToTop}><span>Proyección Social</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li className="dropdown" onClick={toggleDropdown}><Link to="/construccion" onClick={ScrollToTop}><span>Egresados</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><Link to="/construccion"onClick={toggleDropdown}>Egresados</Link></li>
                  <li><Link to="/construccion"onClick={toggleDropdown}>Noticias para Egresados</Link></li>
                </ul>
              </li>
              <li><Link to="/construccion">Prácticas</Link></li>
            </ul>
          </li>

          <li onClick={handleNavlinkClick}><Link to="/investigacion"onClick={ScrollToTop}><span>Investigación</span></Link>
</li>

          <li className="dropdown" onClick={toggleDropdown}><Link to="#"><span>Horizontista</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li onClick={handleNavlinkClick}><Link to="/Bienestar"onClick={toggleDropdown}>Bienestar Universitario</Link></li>
              <li onClick={handleNavlinkClick}><Link to="/construccion"onClick={toggleDropdown}>Biblioteca</Link></li>
              <li onClick={handleNavlinkClick}><a href="https://site2.q10.com/SolicitudesInstitucionales/NuevaSolicitud?aplentId=8fea0808-7bab-4370-8802-1e51d36b878c" onClick={toggleDropdown} target='_blank'>Solicitudes Institucionales</a></li>
              <li onClick={handleNavlinkClick}><Link to="/Horizontista/blog"onClick={toggleDropdown}>Blog</Link></li>
            </ul>
          </li>

          <li onClick={handleNavlinkClick} ><a href="https://campusvirtual.unihorizonte.edu.co/063cb562cbf68c0b7733db2b308490ea03c37370/" target="_blank" >Campus Virtual</a></li>

          <li onClick={handleNavlinkClick} ><Link to="https://fuh.q10.com/" target="_blank">Sistema Académico</Link></li>
          
          

        </ul>
      </nav>

    </div>
  </header>
      

      
  
     

        
    )
}

export default Header