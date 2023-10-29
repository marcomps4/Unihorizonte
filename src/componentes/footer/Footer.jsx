import React from "react";
import '../footer/footer.css';
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Footer = () =>{

    const ScrollToTop = () => {
     window.scrollTo({
       top: (0,0),
       behavior: 'smooth',
     });
 
   return null;
 }
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
                <Link to="https://www.facebook.com/fundacionunihorizonte/" target="_blank" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></Link>
                <Link to="https://www.instagram.com/soyunihorizonte/" target="_blank" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></Link>
                <Link to="https://www.linkedin.com/company/fundaci%C3%B3n-universitaria-horizonte/?viewAsMember=true" target="_blank" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></Link>
                <Link to="https://www.youtube.com/channel/UCpuBk9vtyzxsO44mnLfksNg" target="_blank" className="d-flex align-items-center justify-content-center"><i className="bi bi-youtube"></i></Link>
                <Link to="https://www.tiktok.com/@soy_unihorizonte" target="_blank" className="d-flex align-items-center justify-content-center"><i className="bi bi-tiktok"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Mapa del sitio</h4>
            <ul>
              <li><a href="#inscripcion">Queremos conocerte</a></li>
              <li><a href="#New">Noticias y Eventos</a></li>
              <li><a href="#clients">Convenios</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Facultades</h4>
            <ul>
              <li><Link to="/facultades/facultadIngenieria" onClick={ScrollToTop}>Ingenierías</Link></li>
              <li><Link to="/facultades/facultadCienciasAdministrativas" onClick={ScrollToTop}>Ciencias Administrativas</Link></li>
              <li><Link to="/facultades/facultadComunicacion" onClick={ScrollToTop}>Comunicación, Arte y Marketing Digital</Link></li>
              <li><Link to="/facultades/facultadGastronomia" onClick={ScrollToTop}>Gastronomía</Link></li>
              <li><Link to="/facultades/facultadCienciasJuridicas" onClick={ScrollToTop}>Ciencias Jurídicas</Link></li>
              <li><Link to="/posgrados" onClick={ScrollToTop}>Posgrados</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Links de Importancia</h4>
            <ul>
              <li><Link to="https://site2.q10.com/Preinscripcion?aplentId=8fea0808-7bab-4370-8802-1e51d36b878c" target="_blank">Q10</Link></li>
              <li><Link to="https://account.live.com/tou/accrue?mkt=ES-ES&uiflavor=web&client_id=1E00004040979A&id=0&ru=https://login.live.com/oauth20_authorize.srf%3fuaid%3d21aee4df02a3478591e0f587bb8b13bb%26client_id%3d4765445b-32c6-49b0-83e6-1d93765276ca%26opid%3dC2C22A0D627F87E7%26mkt%3dES-ES%26opidt%3d1698518795" target="_blank">Correo Unihorizonte</Link></li>
              <li><Link to="https://www.banco.scotiabankcolpatria.com/PagosElectronicos/AgreementCategory.aspx" target="_blank">Pagos por Pse</Link></li>
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