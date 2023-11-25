import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './componentes/footer/Footer';
import Whatsapp from './componentes/whatsapp/Whatsapp';
import QuienesSomos from './pages/QuienesSomos';
import Documentos from './pages/Documentos';
import ProcesoInscripcion from './pages/Proceso_Inscripcion';
import Financiamiento from './pages/Financiamiento';
import FacultadIngenieria from './pages/Facultad_Ingenieria'
import FacultadCienciasAdministrativas from './pages/Facultad_ciencias_administrativas';
import FacultadComunicacion from './pages/Facultad_comunicacion';
import FacultadGastronomia from './pages/Facultad_gastronomia'
import FacultadCienciasJuridicas from './pages/Facultad_ciencias_juridicas'
import Posgrados from './pages/Posgrados'
import Gastronomia from './pages/programas/Gastronomia';
import Derecho from './pages/programas/Derecho';
import Diseno from './pages/programas/Diseno';
import IngSoftware from './pages/programas/Ingenieria-Software';
import TecSst from './pages/programas/Tec-sst';
import IngSiho from './pages/programas/Ingenieria-Siho';
import AdminEmpresas from './pages/programas/AdministracionEmpresas';
import ComunicacionSocial from './pages/programas/ComunicacionSocial'
import Mercadeo from './pages/programas/Mercadeo';
import Contaduria from './pages/programas/Contaduria';
import AdminNegoInter from './pages/programas/AdminNegoInter';
import AdminAgro from './pages/programas/AdminAgro';
import TecGestionAmbiental from './pages/programas/TecGestionAmbiental';
import TecGestionTalentoHumano from './pages/programas/TecGestionTalentoHumano';
import TecGestionAdminiFinan from './pages/programas/TecGestionAdmonFinana';
import Sst from './pages/programas/Sst';
import EspComunDigital from '../src/pages/programas/Posgrados/EspComunicacionDigital';
import EspGsst from '../src/pages/programas/Posgrados/EspGsst';
import EspGerenCalidad from '../src/pages/programas/Posgrados/EspGerenciaCalidad';
import EspGerenciaProyectos from '../src/pages/programas/Posgrados/EspGerenciaProyectos';
import EspAva from '../src/pages/programas/Posgrados/EspAva';
import EducacionContinua from '../src/pages/programas/Econtinuada/Econtinuada';
import Investigación from '../src/pages/Investigacion';
import Construccion from '../src/pages/Construccion';
import NoticiasDetalle from './pages/NoticiasDetalle';
import NoticiasHome from '../src/componentes/header/Noticias/Noticias';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

   const ScrollToTop = () => {
    window.scrollTo({
      top: (0,0),
      behavior: 'smooth',
    });

  return null;
}


  

  return (
    <>
    <Router>
      <ScrollToTop/>
      <Header/>
    <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/Quienessomos' element={<QuienesSomos/>}/>
      <Route path='/Documentos' element={<Documentos/>}/>
      <Route path='/Proceso_de_inscripcion' element={<ProcesoInscripcion/>}/>
      <Route path='/Financiamiento' element={<Financiamiento/>}/>
      <Route path='/facultades/facultadIngenieria' element={<FacultadIngenieria/>}/>
      <Route path='/facultades/facultadCienciasAdministrativas' element={<FacultadCienciasAdministrativas/>}/>
      <Route path='/facultades/facultadComunicacion' element={<FacultadComunicacion/>}/>
      <Route path='/facultades/facultadGastronomia' element={<FacultadGastronomia/>}/>
      <Route path='/facultades/facultadCienciasJuridicas' element={<FacultadCienciasJuridicas/>}/>
      <Route path='/posgrados' element={<Posgrados/>}/>
      <Route path='/posgrados/EspecializacionComunicacionDigital' element={<EspComunDigital/>}/>
      <Route path='/posgrados/EspecializacionSst' element={<EspGsst/>}/>
      <Route path='/posgrados/EspecializacionGerenciaCalidad' element={<EspGerenCalidad/>}/>
      <Route path='/posgrados/EspecializacionGerenciaProyectos' element={<EspGerenciaProyectos/>}/>
      <Route path='/posgrados/EspecializacionAva' element={<EspAva/>}/>
      <Route path='/facultades/facultadGastronomia/gastronomia' element={<Gastronomia/>}/>
      <Route path='/facultades/facultadCienciasJuridicas/derecho' element={<Derecho/>}/>
      <Route path='/facultades/facultadComunicacion/diseno' element={<Diseno/>}/>
      <Route path='/facultades/facultadComunicacion/comunicacionSocial' element={<ComunicacionSocial/>}/>
      <Route path='/facultades/facultadComunicacion/mercadeo' element={<Mercadeo/>}/>
      <Route path='/facultades/facultadIngenieria/ingenieriaSoftware' element={<IngSoftware/>}/>
      <Route path='/facultades/facultadIngenieria/tecsst' element={<TecSst/>}/>
      <Route path='/facultades/facultadIngenieria/ingenieriaSiho' element={<IngSiho/>}/>
      <Route path='/facultades/facultadCienciasAdministrativas/AdministracionDeEmpresas' element={<AdminEmpresas/>}/>
      <Route path='/facultades/facultadCienciasAdministrativas/contaduria' element={<Contaduria/>}/>
      <Route path='/facultades/facultadCienciasAdministrativas/administraciondeNegociosInternacionales' element={<AdminNegoInter/>}/>
      <Route path='/facultades/facultadCienciasAdministrativas/administracionAgropecuaria' element={<AdminAgro/>}/>
      <Route path='/facultades/facultadCienciasAdministrativas/tecGestionAmbiental' element={<TecGestionAmbiental/>}/>
      <Route path='/facultades/facultadCienciasAdministrativas/tecGestionTalentoHumano' element={<TecGestionTalentoHumano/>}/>
      <Route path='/facultades/facultadCienciasAdministrativas/tecGestionAdministrativayFinanciera' element={<TecGestionAdminiFinan/>}/>
      <Route path='/facultades/facultadCienciasAdministrativas/AdminSst' element={<Sst/>}/>
      <Route path='/educacionContinua' element={<EducacionContinua/>}/>
      <Route path="/noticias" element={<NoticiasHome />} />
      <Route path="/noticias/:id" element={<NoticiasDetalle />} />
      <Route path='/investigacion' element={<Investigación/>}/>
      <Route path='/construccion' element={<Construccion/>}/>
      <Route /*path='*' element={<Page404/>}*//>
      
    </Routes>  
    <Whatsapp/>
    <Footer/>
    </Router>
    
    </>

  )
}

export default App;
