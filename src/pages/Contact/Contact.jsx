import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgmap from "../../asset/Map.png";
import { AiFillStar } from "react-icons/ai";

import Footer from "../../composants/Footer/Footer";
import "./Contact.css";
import CrustomCard from "../../composants/CrustomCard";
export default function Contact() {
  return (
    <div>
      <Container className="container-contact">
        <Row>
          <Col sm="3">
            <CrustomCard titre="MAP">
              <div className="cont-img-map">
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.343640930849!2d-17.47434302528493!3d14.749659473410615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10df30367ecf9%3A0x2b2a2dde7218bfe4!2s6POINT9%20Ouest%20Foire!5e0!3m2!1sfr!2ssn!4v1695057908981!5m2!1sfr!2ssn"
                  width="600"
                  height="450"
                  style={{ marginRight: '2em' }}
                  
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="con-boutique"></div>
            </CrustomCard>
          </Col>
          <Col sm="9">
            <CrustomCard titre="contactez-nous">
              <div className="cont-icon d-flex  ">
                <form className="w-100 ">
                  <div className="cont-input  d-flex gap-4 w">
                    <input className="inpnon" type="text" placeholder="Nom" />
                    <input
                      className="inpnon"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="cont-textarea">
                    <textarea
                      className="text-area"
                      name="name"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <button className=" btn-env" type="submit">
                    {" "}
                    Envoyer
                  </button>
                </form>
              </div>
            </CrustomCard>
            <CrustomCard titre="Notez nous">
              <div className="div1">
                <p>Notez la boutique</p>
              </div>
              <div className="cont-icon d-flex  flex-column align-items-center ">
                <div className="div">
                  <AiFillStar className="icon-color1" />
                  <AiFillStar className="icon-color1" />
                  <AiFillStar className="icon-color1" />
                  <AiFillStar className="icon-color1" />
                  <AiFillStar className="icon-color1" />
                </div>
              </div>
            </CrustomCard>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
