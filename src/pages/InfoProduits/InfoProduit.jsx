import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsTelephone } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import point9 from "../../asset/6point9.png";
import { AiFillStar } from "react-icons/ai";
import femme from "../../asset/rtm_RTMHC078.jpeg";
import logohc from "../../asset/hc.png";
import { Link } from "react-router-dom";
import "./InfoProduit.css";
import { FcApproval} from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

import CarrouselDark from "../../composants/CarrouselDark/CarrouselDark"
import { TfiHeart } from "react-icons/tfi";
import { HiOutlineShare } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { TiMessages} from "react-icons/ti";
import Footer from "../../composants/Footer/Footer";
import CrustomCard from "../../composants/CrustomCard";
import CartMap from "../../composants/Map/CartMap";
import Categorie from "../../composants/Categorie/Categorie";
export default function InfoProduit() {
  return (
    <div>
      <Container className="container-contact mb-4 ">
        <Row>
          <Col sm="3">
            
            <CrustomCard titre="Information">
                  <div className="content-elems">
                    <div className="mycontaine-im">
                      <img src={point9} alt="" />
                    </div>
                    <div className="text-logo7">
                      <h3 className="m-2"> 6 point 9</h3>
                    </div>
                    <div className="elems-span">
                      <span className="elems-span1">
                        <BsTelephone />
                      </span>
                      <span className="elems-span3">
                        {" "}
                        <BiLogoFacebook />{" "}
                      </span>
                      <span className="elems-span2">
                        <AiOutlineInstagram />
                      </span>
                    </div>
                    <div>
                      <p className="para-re">Rejoint: 07 Septembre 2023</p>

                      <p className="ville"> ville: Dakar</p>
                    </div>
                    <button className="btn-partage">Partager</button>
                  </div>
                </CrustomCard>
                <CrustomCard titre="Information Contact">
                  <div className="div-blkdoc my-2">
                    <span className="elem01 mx-2 ">
                      <BsTelephone />
                    </span>
                    <span className="elem02">+221 586 54 15</span>
                  </div>
                  <div className="div-bloc">
                    <span className="elem01 mx-2 ">
                      <FiGlobe />
                    </span>
                    <span className="elem02">www.6Point 9.com</span>
                  </div>
                  <div className="div-bloc my-2">
                    <span className="elem01 mx-2 ">
                      <MdEmail />
                    </span>
                    <span className="elem02">6point9@gmail.com</span>
                  </div>
                  <div className="div-bloc my-2">
                    <span className="elem01 mx-2 ">
                      <AiFillMessage />
                    </span>
                    <span className="elem02">Envoyer un message</span>
                  </div>
                </CrustomCard>
                <Categorie/>
               <CartMap/>
                <CrustomCard titre="EMPLOI DU TEMPS">
                  <div className="cont-emploi-d-temp ">
                    <div className="cont-jour d-flex  align-items-center justify-content-between">
                      <p className="lundi"> lundi</p>
                      <p><span className="ouv">ouverture </span> <span className="hora">de 8 a 20h</span></p>
                      <p> <FcApproval/> </p>
                    </div>
                  </div>
                  <div className="cont-emploi-d-temp ">
                    <div className="cont-jour d-flex  align-items-center justify-content-between">
                      <p className="lundi"> Mardi</p>
                      <p><span className="ouv">ouverture </span> <span className="hora">de 8 a 20h</span></p>
                      <p> <FcApproval/> </p>
                    </div>
                  </div>
                  <div className="cont-emploi-d-temp ">
                    <div className="cont-jour d-flex  align-items-center justify-content-between">
                      <p className="lundi"> Mercredi</p>
                      <p><span className="ouv">ouverture </span> <span className="hora">de 8 a 20h</span></p>
                      <p> <FcApproval/> </p>
                    </div>
                  </div>
                  <div className="cont-emploi-d-temp ">
                    <div className="cont-jour d-flex  align-items-center justify-content-between">
                      <p className="lundi"> Jeudi</p>
                      <p><span className="ouv">ouverture </span> <span className="hora">de 8 a 20h</span></p>
                      <p> <FcApproval/> </p>
                    </div>
                  </div>
                  <div className="cont-emploi-d-temp ">
                    <div className="cont-jour d-flex  align-items-center justify-content-between">
                      <p className="lundi"> Vendredi</p>
                      <p><span className="ouv">ouverture </span> <span className="hora">de 8 a 20h</span></p>
                      <p> <FcApproval/> </p>
                    </div>
                  </div>
                  <div className="cont-emploi-d-temp ">
                    <div className="cont-jour d-flex  align-items-center justify-content-between">
                      <p className="lundi"> Samedi</p>
                      <p><span className="ouv">ouverture </span> <span className="hora">de 8 a 20h</span></p>
                      <p> <FcApproval/> </p>
                    </div>
                  </div>
                  <div className="cont-emploi-d-temp ">
                    <div className="cont-jour d-flex  align-items-center justify-content-between">
                      <p className="lundi"> Dimenche</p>
                      <p><span className="fer"> fermer </span> <span className="hora">de 8 a 20h</span></p>
                      <p> <AiFillCloseCircle className="close" /> </p>
                    </div>
                  </div>
                  
                </CrustomCard>
          </Col>
          <Col sm="9">
            <div className="card-text mt-4">

              <div className="cont-profile-02   myflex">
                <div className="header-card d-flex justify-content-center  align-items-center ">
                  <div className="mycontaine-im">
                    <img src={point9} alt="" />
                  </div>
                  <div className="text-logo7">
                    <h3 className="m-2"> 6 point 9</h3>
                    <div className="cont-41 px-2 fontlab"> Hier 23:57</div>
                  </div>
                </div>
            
                 <div className="elems-span  ">
                      <span className="elems-span1 color-whatsap ">
                      <AiOutlineWhatsApp  />
                      </span>
                      <span className="elems-span3 color-phone">
                        {" "}
                        <BsTelephoneForward />{" "}
                      </span>
                      <span className="elems-span2 color-phone">
                      <TiMessages className=" " />
                      </span>
                    </div>
              </div>
              <div className="boy-card">
                <span className="progres-bar">
                  <span className="progress-color"></span>
                </span>
                <div className="para-text-info-at">
                  <div className="mycar">
                    <div className="img-group">
                      <Link to="/couture/ateliers-info">
                        <div className="container-imsc border ">
                          <img src={femme} width="100%" alt="" />
                        </div>
                        <div className="cont-logo-hc">
                          <img src={logohc} alt="" />
                        </div>
                      </Link>
                    </div>

                    <div>
                      <div container-atelier-text>
                        <div className="con-check d-flex justify-content-between p-4 align-items-center taille ">
                          <div className="taille-basse cont-41 taille-bass-font ">
                            taille bass
                          </div>
                          <div className="cont-41  fontlab"> Hier 23:57</div>
                        </div>
                        <div className="con-check d-flex justify-content-between cont-res-icon marg  ">
                          <div className="taille-basse cont-41 fontlab ">
                            <TfiHeart className="font-icons-produit" /> <span>534K</span>
                          </div>
                          <div className="cont-41 font-icons-produit fontlab">
                            {" "}
                            <HiOutlineShare /> <span>34</span>
                          </div>
                          <div className="cont-41 font-icons-produit fontlab">
                            {" "}
                            <AiOutlineMessage /> <span>567</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
            <div className="mb-4">
            <CrustomCard titre="Notez nous" >
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
            </div>
          </Col>
        </Row>
      </Container>
      <CarrouselDark/>
      <Footer />
    </div>
  );
}
