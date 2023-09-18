import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgmap from "../../asset/Map.png"
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
                <img src={imgmap} width="100%" height="500px" alt="" />
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
