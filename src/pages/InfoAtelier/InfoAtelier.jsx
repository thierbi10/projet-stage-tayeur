import React from "react";
import "./InfoAteliers.css";
import { AiFillStar } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FcApproval} from "react-icons/fc";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { TbMessages } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Navbars from "../../composants/Navbars/Navbars";
import Footer from "../../composants/Footer/Footer";
import logoatelier from "../../asset/6point9.png";
import point9 from "../../asset/6point9.png";
import homme from "../../asset/boubou.png";
import imgmap from "../../asset/Map.png";
import img1 from "../../asset/boubou.png";
import img2 from "../../asset/984PHEl6NF.jpeg (3).png";
import imComment from "../../asset/avatar.png (1).png";
import imComment1 from "../../asset/avatar.png.png";
import imgTemoin from "../../asset/Rectangle.png";
import imgdark from "../../asset/Dark.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ButtonCrusto from "../../composants/ButtonCrusto";
import CrustomCard from "../../composants/CrustomCard";
import MyPagination from "../../composants/Pagination";
import CarrouselDark from "../../composants/CarrouselDark/CarrouselDark";
import CartMap from "../../composants/Map/CartMap";
import Categorie from "../../composants/Categorie/Categorie";
export default function InfoAtelier() {
  return (
    <div className="container-info-atelier ">
      <div className="container-fuid">
        <div className="container-im-infAteteliers  ">
          <div className="image-logo-atelier ">
            <img src={logoatelier} alt="" />
          </div>
        </div>
        <div className="container content-element-info d-flex">
          <div className="cont-logo-point6">
            <div className="relative-img">
              <div className="iim-cont ">
                <img src={logoatelier} alt="" />
              </div>
            </div>
          </div>
          <div className="gp-icons-btn d-flex justify-content-between align-items-center  w-100 ">
            <div className="cont-elment-detais ">
              <div className="text-icon-avis m-2">
                <h5 className="font-point6"> 6 point 9</h5>
                <h6>
                  5 <AiFillStar className="icon-color" />
                  <AiFillStar className="icon-color" />
                  <AiFillStar className="icon-color" />
                  <AiFillStar className="icon-color" />
                  <AiFillStar className="icon-color" />
                </h6>
                <span> 1 avis</span>
              </div>
            </div>
            <div className="group-btn-2">
           
          <div className="d-flex">
            <button className="bnt-cristo" >DEVENIR PARTENAIRE</button>
            <button className="btn1 ">S’IDENTIFIER</button>
          </div >
            </div>
          </div>
        </div>
        <Container>
          <Row className="">
            <Col className=" bg-col m- " sm={3}>
              <div className="group-reseau">
                <p className="tel">Contacter par Téléphone</p>
                <div className="btn-whatsap d-flex justify-content-beetwen  w-100">
                  <span className="span-mar">
                    <BiLogoWhatsapp className="chatdd" />
                  </span>
                  <span>Whatsap</span>
                </div>
                <div className="btn-whatsap1 d-flex mt-4   borderd w-100">
                  <span className="span-mar">
                    <BsTelephone className="chatdd" />
                  </span>
                  <span>Afficher le numéro</span>
                </div>
                <p className="chat p-3">Contacter via Chat</p>
                <div className="btn-whatsap1 d-flex mt-4   borderd w-100">
                  <span className="span-mar">
                    <TbMessages className="chatdd" />
                  </span>
                  <span>Commencez à discuter</span>
                </div>
                <div className="btn-whatsap2 d-flex mt-4   borderd w-100">
                  <span className="span-mar">
                    <AiOutlineHeart className="chatdd" />
                  </span>
                  <span>Ajouter aux Favoris</span>
                </div>
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
              </div>
            </Col>

            <Col className="  " sm={8}>
              <div className="col-cont-card mt-4 ">
                <Container className=" d-flex  dwrap ">
                  <div className="card-text">
                    <div className="header-card">
                      <h2 className="des"> DESCRIPTION</h2>
                    </div>
                    <div className="boy-card">
                      <span className="progres-bar">
                        <span className="progress-color"></span>
                      </span>
                      <div className="para-text-info-at">
                        <p>
                          Bienvenue à l'atelier de couture "6 Point 9" ! Plongez
                          dans l'univers créatif de la mode où chaque point
                          compte et chaque tissu raconte une histoire. Notre
                          atelier est bien plus qu'un simple lieu de couture,
                          c'est un véritable sanctuaire de l'art du vêtement. Au
                          cœur de "6 Point 9", vous découvrirez une atmosphère
                          où la passion pour la couture se marie harmonieusement
                          avec la créativité. Nos machines à coudre bourdonnent
                          doucement, tandis que les étagères débordent de tissus
                          luxueux, de boutons colorés et de fils chatoyants,
                          attendant d'être transformés en pièces uniques.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-2-container mt-4">
                    <h2>Galerie | Nos réalisations </h2>
                    <div className="cont-homme-img d-flex justify-content-center align-itmes-center mt-4">
                      <img src={homme} alt="" />
                    </div>

                    <div className="cont-trois-im mt-4 d-flex justify-content-center align-itmes-center">
                      <div className="im m-2">
                        <img src={img2} alt="" />
                      </div>
                      <div className="im2 m-2">
                        <img src={img2} alt="" />
                      </div>
                      <div className="im3 m-2">
                        <img src={img2} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="card-text mt-4">
                    <div className="header-card">
                      <h2 className="des"> COMMENTAIRES (3)</h2>
                    </div>
                    <div className="boy-card">
                      <span className="progres-bar">
                        <span className="progress-color"></span>
                      </span>
                      <div className="cont-general-commentaire d-flex">
                        <div className="container-comment-1 d-flex">
                          <div className="cont-im-comt">
                            <img src={imComment} alt="ss" />
                          </div>
                          <div className="cont-elment-detais d-flex ">
                            <div className="text-icon-avis m-2 ">
                              <h5 className="font-text-comment text-icon-avis1">
                                {" "}
                                M****E
                              </h5>
                              <h6 className="font-text-comment mb-0">
                                {" "}
                                Date-14 nov. 2023
                              </h6>
                              <h6 className="mb-0">
                                5 <AiFillStar className="icon-color" />
                                <AiFillStar className="icon-color" />
                                <AiFillStar className="icon-color" />
                                <AiFillStar className="icon-color" />
                                <AiFillStar className="icon-color" />
                              </h6>
                              <span> 1 avis</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-comt">
                          tres bonne qualité franchement
                        </p>
                      </div>
                      <div className="cont-general-commentaire mt-4 d-flex">
                        <div className="container-comment-1 d-flex">
                          <div className="cont-im-comt">
                            <img src={imComment1} alt="ss" />
                          </div>
                          <div className="cont-elment-detais d-flex ">
                            <div className="text-icon-avis m-2 ">
                              <h5 className="font-text-comment text-icon-avis1">
                                {" "}
                                T****I
                              </h5>
                              <h6 className="font-text-comment mb-0">
                                {" "}
                                Date-14 nov. 2023
                              </h6>
                              <h6 className="mb-0">
                                5 <AiFillStar className="icon-color" />
                                <AiFillStar className="icon-color" />
                                <AiFillStar className="icon-color" />
                                <AiFillStar className="icon-color" />
                                <AiFillStar className="icon-color" />
                              </h6>
                              <span> 1 avis</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-comt">I like</p>
                      </div>
                      <div className="cont-input">
                        <input
                          className="input1"
                          type="text"
                          placeholder="Écrivez un commentaire"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-text mt-4">
                    <div className="header-card">
                      <h2 className="des"> Notez la boutique</h2>
                    </div>
                    <div className="boy-card">
                      <span className="progres-bar">
                        <span className="progress-color"></span>
                      </span>
                      <div className="cont-icon d-flex  flex-column align-items-center ">
                        <div className="div1">
                          <p>Notez la boutique</p>
                        </div>
                        <div className="div">
                          <AiFillStar className="icon-color1" />
                          <AiFillStar className="icon-color1" />
                          <AiFillStar className="icon-color1" />
                          <AiFillStar className="icon-color1" />
                          <AiFillStar className="icon-color1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-text mt-4">
                    <div className="header-card">
                      <h2 className="des"> Contactez nous</h2>
                    </div>
                    <div className="boy-card">
                      <span className="progres-bar">
                        <span className="progress-color"></span>
                      </span>
                      <div className="cont-icon d-flex  ">
                        <form className="w-100 ">
                          <div className="cont-input  d-flex gap-4 w">
                            <input
                              className="inpnon"
                              type="text"
                              placeholder="Nom"
                            />
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
                    </div>
                  </div>
                  <h3 className="text-parol">Ne nous croyez pas sur parole…</h3>
                  <div className="m-2 w-100 ">
                    <MyPagination />
                  </div>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
         <CarrouselDark/> 
                {/* <CarrouselDark/> */}
        {/* <section className="temoignage">
        <div className="absolu-con">
            <div className="cont-cards">
              <div className="cont-card-1">
                <img src={imgTemoin} alt="imge" />
              </div>
              <div className="cont-boy">
                <span> icon</span>
                <div className="pparatext">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam aperiam nemo pariatur! Quasi illo natus eligendi
                    perferendis, nisi, quas optio ullam suscipit quos numquam
                    animi rerum tenetur totam sit tempore aut? Error fuga
                    suscipit illo sit molestias aliquid officiis repellat.
                  </p>
                  <div className="general-elems">
                    <div className="cont-im-temoignage">
                      <img src="" alt="" />
                    </div>
                    <h5>JONE SMITH</h5>
                    <p>Founder of Awesomeux Technology</p>
                  </div>
                  </div>
                  </div>
              </div>
            </div>
          <div className="sect-im-cont ">
            <img className="im" src={imgdark}  alt="ddd"  />
         
     
          </div>
        </section> */}
      </div>
      <Footer />
    </div>
  );
}
