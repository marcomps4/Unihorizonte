import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../img/logo.png";
import { Link } from "react-router-dom";



const Header = () => {

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

      <Link to="/" className="logo d-flex align-items-center">
        <img src={logo} alt="Logo Unihorizonte"/> 
        
      </Link>

      <i className={`mobile-nav-toggle ${isMobileNavActive ? 'mobile-nav-hide' : 'mobile-nav-show'}  bi bi-list`} onClick={toggleMobileNav}></i>
      <i  className={`mobile-nav-toggle ${isMobileNavActive ? 'mobile-nav-show' : 'mobile-nav-hide'} d-none  bi bi-x`} onClick={closeMobileNav}></i>
      <nav id="nav_bar" className="nav_bar"> 
      
        <ul>
          <li className="dropdown"onClick={toggleDropdown}><Link to="#" ><span>Institucional</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li className="dropdown"onClick={toggleDropdown} ><Link to="#"><span>Nuestra Institución</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><Link to="/QuienesSomos" onClick={toggleDropdown}>Quienes Somos</Link></li>
                  <li><Link to="innovacion.html" onClick={toggleDropdown}>Instituto de Innovación y Emprendimiento</Link></li>

                </ul>
              </li>

              <li><Link to="/Documentos" ><span>Documentos</span> </Link></li>
             
            </ul>
          </li>

          <li className="dropdown" onClick={toggleDropdown} ><Link to="#"><span>Programas</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li className="dropdown" onClick={toggleDropdown}><Link to="#"><span>Facultades</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><Link to="/facultades/facultadIngenieria"onClick={toggleDropdown}>Facultad de Ingeniería</Link></li>
                  <li><Link to="/facultades/facultadCienciasAdministrativas"onClick={toggleDropdown}>Facultad de Ciencias Administrativas</Link></li>
                  <li><Link to="/facultades/facultadComunicacion"onClick={toggleDropdown}>Facultad de Comunicación, Arte y Marketing Digital</Link></li>
                  <li><Link to="/facultades/facultadGastronomia"onClick={toggleDropdown}>Faculta de  de Gastronomía</Link></li>
                  <li><Link to="/facultades/facultadCienciasJuridicas"onClick={toggleDropdown}>Facultad de ciencias juridicas</Link></li>
                </ul>
              </li>
              <li><Link to="/posgrados">Posgrados</Link></li>

              <li className="dropdown" onClick={toggleDropdown} ><a href="https://unihorizonte.edu.co/educacion-continua/"><span>Educación Continuada</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
              
                <ul>
                  <li><a href="https://unihorizonte.edu.co/programas/diplomados/" onClick={toggleDropdown}>Diplomados</a></li>
                  <li><a href="https://unihorizonte.edu.co/programas/cursos-rapidos/"onClick={toggleDropdown}>Cursos y Seminarios</a></li>
                  <li><a href="http://campus.unihorizonte.edu.co/certificados/"onClick={toggleDropdown}>Certificados de educación Continua</a></li>
                </ul>
              </li>
              
            </ul>
          </li>

          <li className="dropdown" onClick={toggleDropdown}><Link to="#"><span>Admisiones</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><Link to="proceso_inscripcion.html"onClick={toggleDropdown}>Proceso de Inscripción</Link></li>
              <li><a href="https://unihorizonte.edu.co/admisiones/financiamiento/"onClick={toggleDropdown}>Financiamento</a></li>
            </ul>
          </li>

          <li className="dropdown" onClick={toggleDropdown}><Link to="#"><span>Proyección Social</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li className="dropdown" onClick={toggleDropdown}><Link to="#"><span>Egresados</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><a href="https://unihorizonte.edu.co/soy-unihorizontista/egresados/"onClick={toggleDropdown}>Egresados</a></li>
                  <li><a href="https://unihorizonte.edu.co/soy-unihorizontista/eventos-para-egresados/"onClick={toggleDropdown}>Noticias para Egresados</a></li>
                </ul>
              </li>
              <li><a href="https://unihorizonte.edu.co/soy-unihorizontista/practicas/">Prácticas</a></li>
            </ul>
          </li>

          <li><Link to="/investigacion"><span>Investigación</span></Link>
</li>

          <li className="dropdown" onClick={toggleDropdown}><Link to="#"><span>Bienestar</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><a href="https://unihorizonte.edu.co/soy-unihorizontista/bienestar/"onClick={toggleDropdown}>Bienestar Universitario</a></li>
              <li><a href="https://unihorizonte.edu.co/biblioteca/"onClick={toggleDropdown}>Biblioteca</a></li>
            </ul>
          </li>

          <li ><a href="https://campusvirtual.unihorizonte.edu.co/f70d2d351209d4ccee0099b992b51a53/campus/index.html" target="_blank" >Campus Virtual</a></li>

          <li ><Link to="#" target="_blank">Q10</Link></li>
          
          

        </ul>
      </nav>

    </div>
  </header>
      

      
  
     

        
    )
}

export default Header