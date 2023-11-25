import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import '../css/documentos.css'
import bannerdocs from '../../src/img/doc-banner.jpeg'
import politica1 from '../../src/documentos/calidad/unihorizonte-politica-autoevaluacion.pdf'
import acuerdo1 from '../../src/documentos/calidad/unhorizonte-acuerdoAutoevaluacion-1.pdf'
import modelo1 from '../../src/documentos/calidad/unihorizonte-modeloAutoevaluacion-2018.pdf'
import PEI from '../../src/documentos/D-119-PEI-UNIHORIZONTE-2019-R-VACI.pdf'
import PDI from '../../src/documentos/PDI-2021-2026-UniHorizonte-V2-1.pdf'
import calendarioa from '../../src/documentos/Calendario-academico-2023-I-.pdf'
import calendarioa1 from '../../src/documentos/calendario-academico-2023-2.pdf'
import EscalafonD from '../../src/documentos/unihorizonte-ACUERDO_013_2015-escalafonDocente_codigoEtica_buenGobierno.pdf'
import opciongrado from '../../src/documentos/unihorizonte-ACUERDO_088-1-OPCIONES_DE_GRADO_2020.pdf'
import Idiomas from '../../src/documentos/politicas/GUIA-IDIOMAS.pdf'
import martiz from '../../src/documentos/politicas/MATRIZ-LEGAL-UNIHORIZONTE.pdf'
import politcasinter from '../../src/documentos/politicas/P-02-POLITICA-RELACIONES-INTERNACIONALES-ORII-R-VAC.pdf'
import tratamientodatos from '../../src/documentos/politicas/P-04-POLITICA-DE-TRATAMIENTO-DE-LOS-DATOS-PERSONALES-UNIHORIZONTE-1.pdf'
import proyeccionsocial from '../../src/documentos/politicas/P-05-Politicas-Proyeccion-Social-web.pdf'
import educacionvirtual from '../../src/documentos/politicas/P-07-Politica-de-educación-virtual.pdf'
import investigacion from '../../src/documentos/politicas/P-08-Polìtica-de-Investigaciones.pdf'
import autoevaluacion from '../../src/documentos/politicas/P-09-POLITICA-DE-AUTOEVALUACION.pdf';
import graduados from '../../src/documentos/politicas/P-10-POLITICA-DE-GRADUADOS-R-VACI.pdf';
import seguridadysalud from '../../src/documentos/politicas/SEGURIDAD-SALUD.pdf';
import politicaconsumo from '../../src/documentos/politicas/P-12-POLITICA-DE-NO-CONSUMO-DE-TABACO-ALCOHOL-Y-OTRAS-SUSTANCIAS-PSICOAPTIVAS.pdf';
import bienestar from '../../src/documentos/politicas/POLITICA-DE-BIENESTAR-1.pdf';
import inclusion from '../../src/documentos/politicas/POLITICA-DE-INCLUSION-UNIHORIZONTE.pdf';
import violencia from '../../src/documentos/politicas/PROTOCOLO-DE-ATENCION-EN-CASOS-DE-VIOLENCIA-Y-ACOSO-EN-UNIHORIZONTE-2023.-ULTIMA-VERSION-1.pdf';
import computo from '../../src/documentos/reglamentos/R-04-REGLAMENTO-DE-SALAS-DE-COMPUTO.pdf';
import rdocente from '../../src/documentos/reglamentos/R-08-Reglamento-Docente.pdf';
import restudiantil from '../../src/documentos/reglamentos/R-09-REGLAMENTO-ESTUDIANTIL.pdf';
import rconsultorioj from '../../src/documentos/reglamentos/Reglamento-Consultorio-Juridico.pdf';
import rinvestigacion from '../../src/documentos/reglamentos/REGLAMENTO-DE-INVESTIGACION-2021.pdf';
import rpracticas from '../../src/documentos/reglamentos/Reglamento-de-praticas-2021.pdf';
import rsemilleros from '../../src/documentos/reglamentos/REGLAMENTO-GRUPOS-Y-SEMILLEROS-DE-INVESTIGACION-VACI.pdf';
import rderecho from '../../src/documentos/reglamentos/Reglamento-Preparatorios-Derecho.pdf';
import finvestigacionapli from '../../src/documentos/formacion_para_el_trabajo/ACCIONES-DE-INVESTIGACION-APLICADA.pdf';
import fregistro from '../../src/documentos/formacion_para_el_trabajo/DOCUMENTO_REGISTRO_Y_CONTROL.pdf';
import fmecanismos from '../../src/documentos/formacion_para_el_trabajo/Mecanismos-de-evaluacion.pdf';
import fmediacion from '../../src/documentos/formacion_para_el_trabajo/MEDIACION-PEDAGOGICA-Y-DIDACTICA.pdf';
import fplaneacion from '../../src/documentos/formacion_para_el_trabajo/Planeacion-de-la-etapa-Lectiva-y-Productiva.pdf';
import fprotocolo from '../../src/documentos/formacion_para_el_trabajo/PROTOCOLO-DE-APRENDIZAJE-EN-PRACTICAS.pdf';
import fsoporte from '../../src/documentos/formacion_para_el_trabajo/Soporte-de-practicas-realizadas.pdf';
import pec2023 from '../../src/documentos/derechos_pecuniarios/acuerdo-131-derechos-pecuniarios-1.pdf';
import pec2022 from '../../src/documentos/derechos_pecuniarios/derechos-pecuniarios.pdf';
import pec2021 from '../../src/documentos/derechos_pecuniarios/unihorizonte-Derechos_pecuniarios_2021-Acuerdo_087-2_Alcance-087-1.pdf';
import pec2020 from '../../src/documentos/derechos_pecuniarios/DerechosPecuniarios2020-Acuerdo80.pdf';
import pec2018 from '../../src/documentos/derechos_pecuniarios/ACUERDO-No-46-DE-2017.-POR-MEDIO-DEL-CUAL-SE-APRUEBEN-LOS-VALOPRES-DE-LOS-DERECHOS-PECUNIARIOS-DE-LA-FUNDACION-UNIVERSITARIA-HORIZONTE-PARA-LA-VIGENCIA-.pdf';
import pec2017 from '../../src/documentos/derechos_pecuniarios/pecuniarios2016.pdf';
import pec2015 from '../../src/documentos/derechos_pecuniarios/pecuniarios2015.compressed.pdf';
import pec2014 from '../../src/documentos/derechos_pecuniarios/ACUERDO_002_DE_2014.pdf';
import pecacuer from '../../src/documentos/derechos_pecuniarios/acuerdo_002.pdf';
import pec20142 from '../../src/documentos/derechos_pecuniarios/Pecuniarios2014.compressed.pdf';
import dcertificacionr from '../../src/documentos/dian/derechos-pecuniarios.pdf';
import dmemoriae from '../../src/documentos/dian/MEMORIA-ECONOMICA-1.pdf';
import dactaef from '../../src/documentos/dian/ACTA-APROBACION-ESTADOS-FINANCIEROS.pdf';
import def2018 from '../../src/documentos/dian/ESTADOS-FINANCIEROS-2018.pdf';
import dcertcumplimiento from '../../src/documentos/dian/5.-CERTIFICACION-DE-CUMPLIMIENTO.pdf';
import descriturap from '../../src/documentos/dian/6.-ESCRITURA-PUBLICA-RESOLUCION-No-11106-1983.pdf';
import descriturap9432 from '../../src/documentos/dian/6A-RESOLUCION-No-9432-2014.pdf';
import daprobacionestados from '../../src/documentos/dian/4A-ACTA-APROBACION-ESTADOS-FINANCIEROS.pdf';
import dautorepresentante from '../../src/documentos/dian/AUTORIZACION-REPRESENTANTE-RTE.pdf';
import dcertifexistencia from '../../src/documentos/dian/CERTIFICADO-DE-EXISTENCIA.pdf';
import ddeclaracioncaducidad from '../../src/documentos/dian/10.-DECLARACION-CADUCIDAD-DE-CONTRATOS.pdf';
import dinformegestion from '../../src/documentos/dian/INFORME-DE-GESTION-ANUAL.pdf';
import dcertificaciona from '../../src/documentos/dian/CERTIFICACION-ANTECEDENTES-RTE.pdf';
import dcertcumreq from '../../src/documentos/dian/CERTIFICADO-CUMPLIMIENTO-REQUISITOS-RTE.pdf';
import dcertex10jun from '../../src/documentos/dian/CERTIFICADO-EXISTENCIA-10-JUNIO-2020.pdf';
import destadosfinnotas from '../../src/documentos/dian/ESTADOS-FINANCIEROS-2019-NOTAS-DICTAMEN_compressed.pdf';
import dinformeanualrte from '../../src/documentos/dian/INFORME-ANUAL-RESULTADOS-RTE.pdf';
import dmemoriarte from '../../src/documentos/dian/MEMORIA-ECONOMICA-RTE.pdf';
import drutfuh from '../../src/documentos/dian/RUT-FUH.pdf';
import dceraj from '../../src/documentos/dian/CERTIFICACION-ANTECEDENTESJUDICIALES-CADUCIDADDECONTRATOS.pdf';
import dcercump from '../../src/documentos/dian/CERTIFICACION-CUMPLIMIENTOREQUISITOS-PARAPERMANESCER-RTE.pdf';
import dceremu from '../../src/documentos/dian/CERTIFICACION-REMUNERACION-DELOSCARGOS-DIRECTIVOS.pdf';
import dcdictamenf from '../../src/documentos/dian/DICTAMEN-REVISORIAFISCAL-2020.pdf';
import dcinformeanual from '../../src/documentos/dian/INFORME-ANUALDERESULTADOS-2020.pdf';
import dmemoria2020 from '../../src/documentos/dian/MEMORIA-ECONOMICA2020.pdf';
import destadosfinan20 from '../../src/documentos/dian/ESTADOSFINANCIEROS-2020.pdf';
import dinformea2021 from '../../src/documentos/dian/INFORME-ANUAL-RESULTADOS-2021.pdf';
import dmemoriaeco21 from '../../src/documentos/dian/MEMORIA-ECONOMICA-2021.pdf';
import drevelacionesdef21 from '../../src/documentos/dian/EF-REVELACIONES-DEFINITIVAS-2021.pdf';
import dcerticargdir from '../../src/documentos/dian/CERTIFICACION-CARGOS-DIRECTIVOS.pdf';
import dcertantecdentes from '../../src/documentos/dian/CERTIFICACION-ANTECEDENTES.pdf';
import dcertcump  from '../../src/documentos/dian/CERTIFICACION-DE-CUMPLIMIENTO.pdf';
import dform5245  from '../../src/documentos/dian/FORMULARIO5245-DEFINITIVO.pdf';



const Documentos = () => {
    return(
        <>
        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerdocs})`}}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        </div>
        </div>

        <section id="docs" className="docs">
      <div className="container" data-aos="fade-up">

        <div className="col-lg-12">
          <h1>Documentos institucionales</h1>
        </div>

        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><i className="bi bi-cloud-download-fill icon-help"></i> Calidad</Accordion.Header>
        <Accordion.Body>
        <a href={politica1} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Política de autoevaluación
        </a>
        <a href={acuerdo1} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Acuerdo de autoevaluación
        </a>
        <a href={modelo1} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Modelo de autoevaluación
        </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><i className="bi bi-cloud-download-fill icon-help"></i>Proyecto Educativo Institucional (PEI)</Accordion.Header>
        <Accordion.Body>
        <a href={PEI} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Proyecto Educativo Institucional (PEI)
        </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><i className="bi bi-cloud-download-fill icon-help"></i>Plan de desarrollo</Accordion.Header>
        <Accordion.Body>
        <a href={PDI} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Plan de desarrollo institucional
        </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><i className="bi bi-cloud-download-fill icon-help"></i>Calendario Académico 2023</Accordion.Header>
        <Accordion.Body>
        <a href={calendarioa} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Calendario Académico 2023-1
        </a>
        <a href={calendarioa1} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Calendario Académico 2023-2
        </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><i className="bi bi-cloud-download-fill icon-help"></i>Escalafón docente - Código de ética y buen gobierno</Accordion.Header>
        <Accordion.Body>
        <a href={EscalafonD} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Escalafón docente - Código de ética y buen gobierno
        </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><i className="bi bi-cloud-download-fill icon-help"></i>Opciones de grado</Accordion.Header>
        <Accordion.Body>
        <a href={opciongrado} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Opciones de grado
        </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><i className="bi bi-cloud-download-fill icon-help"></i>Políticas</Accordion.Header>
        <Accordion.Body>
        <a href={investigacion} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Política de Investigación
        </a>
        <a href={autoevaluacion} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Política de Autoevaluación
        </a>
        <a href={bienestar} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Política de Bienestar
        </a>
        <a href={tratamientodatos} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Polítca de Tratamiento de la Información
        </a>
        <a href={politcasinter} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Política de Internacionalización
        </a>
        <a href={proyeccionsocial} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Política de Proyección Social
        </a>
        <a href={educacionvirtual} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Política de Educación Virtual
        </a>
        <a href={graduados} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Política de Graduados
        </a>
        <a href={violencia} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Protocolo de Atención en Casos de Violencia y Acoso en UNIHORIZONTE 2023
        </a>
        <a href={martiz} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Matríz Legal
        </a>
        <a href={politicaconsumo} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Política de no Consumo de Tabaco, alcohol y otras sustancias psicoactivas
        </a>
        <a href={seguridadysalud} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Política de Seguridad y Salud en el Trabajo
        </a>
        <a href={Idiomas} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Política Centro de Idiomas
        </a>
        <a href={inclusion} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Política de Inclusión
        </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header><i className="bi bi-cloud-download-fill icon-help"></i>Reglamentos</Accordion.Header>
        <Accordion.Body>
        <a href={rconsultorioj} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Reglamento Consultorio Jurídico
        </a>
        <a href={computo} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Reglamento Salas de Computo
        </a>
        <a href={rsemilleros} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Reglamento Grupos y Semilleros de Investigación
        </a>
        <a href={rinvestigacion} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Reglamento de Investigación
        </a>
        <a href={restudiantil} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Reglamento Estudiantil
        </a>
        <a href={rdocente} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Reglamento Docente
        </a>
        <a href={rderecho} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Reglamento Preparatorios Derecho
        </a>
        <a href={rpracticas} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Reglamento de Prácticas
        </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header><i className="bi bi-cloud-download-fill icon-help"></i>Formación para el trabajo</Accordion.Header>
        <Accordion.Body>
        <a href={fplaneacion} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Planeación etapa lectiva y productiva
        </a>
        <a href={fmediacion} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Mediación pedagógica y didáctica
        </a>
        <a href={fmecanismos} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Mecanismos de evaluación de aprendizaje
        </a>
        <a href={fprotocolo} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Protocolo de aprendizaje en prácticas
        </a>
        <a href={finvestigacionapli} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Acciones de investigación aplicada
        </a>
        <a href={fregistro} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Registro y Control
        </a>
        <a href={fsoporte} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>Soporte de Prácticas Realizadas
        </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header><i className="bi bi-cloud-download-fill icon-help"></i>Derechos Pecuniarios</Accordion.Header>
        <Accordion.Body>
        <a href={pec2023} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i> Derechos Pecuniarios 2023
        </a>
        <a href={pec2022} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i> Derechos Pecuniarios 2022
        </a>
        <a href={pec2021} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i> Derechos Pecuniarios 2021
        </a>
        <a href={pec2020} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i> Derechos Pecuniarios 2020
        </a>
        <a href='/Documentos'  >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i> Derechos Pecuniarios 2019
        </a>
        <a href={pec2018} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i> Derechos Pecuniarios 2018
        </a>
        <a href={pec2017} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i> Derechos Pecuniarios 2017
        </a>
        <a href={pec2015} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i> Derechos Pecuniarios 2015
        </a>
        <a href={pec2014} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i> Derechos Pecuniarios 2014
        </a>
        <a href={pecacuer} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Acuerdo 002
        </a>
        <a href={pec20142} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Derechos Pecuniarios 2014
        </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header><i className="bi bi-cloud-download-fill icon-help"></i>DIAN</Accordion.Header>
        <Accordion.Body>
        <a href={dcertificacionr} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Certificación de remuneración
        </a>
        <a href={dmemoriae} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Memoria económica
        </a>
        <a href={dactaef} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Acta aprobación estados financieros
        </a>
        <a href={def2018} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Estados financieros 2018
        </a>
        <a href={dcertcumplimiento} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Certificación de cumplimiento
        </a>
        <a href={descriturap} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Escritura pública resolución No. 11106 1983
        </a>
        <a href={descriturap9432} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Escritura pública resolución No. 9432 2014
        </a>
        <a href={daprobacionestados} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Acuerdo autorización representante RTE
        </a>
        <a href={dautorepresentante} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Autorización representante RTE
        </a>
        <a href={dcertifexistencia} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Certificación de existencia
        </a>
        <a href={ddeclaracioncaducidad} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Declaración caducidad de contratos
        </a>
        <a href={dinformegestion} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Informe de gestión anual
        </a>
        <a href={dcertificaciona} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Declaración del Representante Legal sobre Sanciones
        </a>
        <a href={dcertcumreq} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Certificación de Cumplimiento de los Requisitos durante 2019
        </a>
        <a href={dcertex10jun} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Certificado de Existencia y Representación Legal de Instituciones de Educación Superior
        </a>
        <a href={destadosfinnotas} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Estados Financieros Comparativos años terminados a 31 de diciembre de 2018 y 2019
        </a>
        <a href={dinformeanualrte} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Informe Anual de Resultados a diciembre 31 de 2019
        </a>
        <a href={dmemoriarte} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Memoria Económica 2019
        </a>
        <a href={drutfuh} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        RUT UNIHORIZONTE
        </a>
        <a href={dceraj} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Certificación antecedentes judiciales y caducidad de contratos
        </a>
        <a href={dcercump} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Certificación cumplimiento requisitos para permanecer RTE
        </a>
        <a href={dceremu} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Certificación remuneración cargos directivos
        </a>
        <a href={dcdictamenf} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Dictamen revisoría fiscal 2020
        </a>
        <a href={dcinformeanual} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Informe anual de resultados 2020
        </a>
        <a href={dmemoria2020} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Memoria económica 2020
        </a>
        <a href={destadosfinan20} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Estados financieros 2020
        </a>
        <a href={dinformea2021} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Informe anual de resultados 2021
        </a>
        <a href={dmemoriaeco21} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Memoria económica 2021
        </a>
        <a href={drevelacionesdef21} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Estados financieros 2021
        </a>
        <a href={dcerticargdir} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Certificación Cargos Directivos 2021
        </a>
        <a href={dcertantecdentes} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Certificación Antecedentes 2021
        </a>
        <a href={dcertcump} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Certificación de Cumplimiento 2021
        </a>
        <a href={dform5245} target="_blank" >
        <i className="bi bi-file-earmark-arrow-down icon-download"></i>
        Formulario Definitivo 5245 2021
        </a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </section>

    

            





    
      </>

    )
}

export default Documentos