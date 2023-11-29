import React from "react";
import'../revistas.css';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import {RevistasCard} from '../RevistasCard';
import vol1 from '../../../../img/investigacion/revista_stylus/vol1.png';
import vol1dos from '../../../../img/investigacion/revista_stylus/vol1dos.png';
import pdfvol1 from '../../../../documentos/investigacion/revista_stylus/revista_stylus1.pdf';
import pdfvol1dos from '../../../../documentos/investigacion/revista_stylus/revista_stylus2.pdf';






const Stylus = () =>{

    const volumen1 = [
        {
          title: "Revista Stylus Volumen 1 No1",  
          imgContinua: vol1,
          pdf: pdfvol1,
        },
        {
          title: "Revista Stylus Volumen 1 No2",
          imgContinua: vol1dos,
          pdf: pdfvol1dos,
        },
    ]



 


   

    return(
        <>
        


   
    <section id="revistas" className="revistas">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <h2>Revistas Stylus</h2>

        </div>

        <div className=" ">

        <div className="col-lg-12 col-xs-6 content d-flex flex-column order-last order-md-first">
            

        <div className="revistas_items">
            <Tab.Container 
            id="left-tabs-example" 
            defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first"> Vol. 1</Nav.Link>
                    </Nav.Item>

                    
                  </Nav>

                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <div className="row gy-5 " >
                    
                    {
                          volumen1.map((div, index) => {
                          return (
                              <RevistasCard
                               key={index}
                               {...div}
                              />
                           )
                         })
                        }

                   
                    </div>

                    </Tab.Pane>
                   
                     
                    
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            </div>
            
          </div>
       

        </div>
        </div>
        </div>
        </section>
        </>
    )
};

export default Stylus