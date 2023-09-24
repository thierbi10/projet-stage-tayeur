import React from "react";
import "./Ateliers.css";
import Container from "react-bootstrap/Container";
import Navbars from "../../composants/Navbars/Navbars";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CarrouselDark from '../../composants/CarrouselDark/CarrouselDark'
import CardAteliers from "../../composants/Cards/CardAteliers";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../../composants/Footer/Footer";
import MyPagination from "../../composants/Pagination";
import datacouture from "../../data/datacouture";

export default function Ateliers({img ,titre}) {
  return (
    <div className="page-ateliers">
      <Container c>
        <h3 className=" touts">tous les items</h3>
        <p className="atelier">
          Nos Ateliers de <span> Couture</span>
        </p>
        <Row className="">
          <Col className="bg-co cont-col col-row-taill " sm={3}>
            <div className="cont-co">
              <div className="souss ">Filtre</div>
              <h5 className="p-2 m-2 filtre">filtre par</h5>
              <div className="cont-sec ">
                <h6 className="p-2 m-2 catego">Categorie</h6>
                <div className="con-check d-flex justify-content-between mx-3 def-mar ">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab "
                      for="flexCheckDefault"
                    >
                      Taille basse
                    </label>
                  </div>
                  <div className="cont-41 fontlab">454</div>
                </div>
                <div className="con-check d-flex justify-content-between mx-3 def-mar ">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab"
                      for="flexCheckDefault"
                    >
                      Robe
                    </label>
                  </div>
                  <div className="cont-41 fontlab">74</div>
                </div>
                <div className="con-check d-flex justify-content-between mx-3 def-mar ">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab"
                      for="flexCheckDefault"
                    >
                      Grand Boubou Femme
                    </label>
                  </div>
                  <div className="cont-41 fontlab">54</div>
                </div>
                <div className="con-check d-flex justify-content-between mx-3 def-mar fontlab">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab"
                      for="flexCheckDefault"
                    >
                      Grand Boubou Homme
                    </label>
                  </div>
                  <div className="cont-41 fontlab">454</div>
                </div>
                <div className="con-check d-flex justify-content-between mx-3 def-mar">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab"
                      for="flexCheckDefault"
                    >
                      Costume Africain
                    </label>
                  </div>
                  <div className="cont-41 fontlab">104</div>
                </div>
                <div className="con-check d-flex justify-content-between mx-3 def-mar">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab"
                      for="flexCheckDefault"
                    >
                      Comstume
                    </label>
                  </div>
                  <div className="cont-41 fontlab">14</div>
                </div>
              </div>
              <div className="cont-sec ">
                <h6 className="p-2 m-2 catego">Ateliers</h6>
                <div className="con-check d-flex justify-content-between mx-3 def-mar ">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab "
                      for="flexCheckDefault"
                    >
                      6 Point 9
                    </label>
                  </div>
                  <div className="cont-41 fontlab">54</div>
                </div>
                <div className="con-check d-flex justify-content-between mx-3 def-mar ">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab"
                      for="flexCheckDefault"
                    >
                      Falou Gallass Couture
                    </label>
                  </div>
                  <div className="cont-41 fontlab">74</div>
                </div>
                <div className="con-check d-flex justify-content-between mx-3 def-mar ">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab"
                      for="flexCheckDefault"
                    >
                      iss couture
                    </label>
                  </div>
                  <div className="cont-41 fontlab">54</div>
                </div>
                <div className="con-check d-flex justify-content-between mx-3 def-mar fontlab">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab"
                      for="flexCheckDefault"
                    >
                      Heritage couture
                    </label>
                  </div>
                  <div className="cont-41 fontlab">54</div>
                </div>
                <div className="con-check d-flex justify-content-between mx-3 def-mar">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab"
                      for="flexCheckDefault"
                    >
                      Djolof Couture
                    </label>
                  </div>
                  <div className="cont-41 fontlab">14</div>
                </div>
                <div className="con-check d-flex justify-content-between mx-3 def-mar">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab"
                      for="flexCheckDefault"
                    >
                      Bamba couture
                    </label>
                  </div>
                  <div className="cont-41 fontlab">64</div>
                </div>
                <div className="con-check d-flex justify-content-between mx-3 def-mar">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab"
                      for="flexCheckDefault"
                    >
                      Made bouaba
                    </label>
                  </div>
                  <div className="cont-41 fontlab">24</div>
                </div>
                <div className="con-check d-flex justify-content-between mx-3 def-mar">
                  <div className="check- ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label mx-2 fontlab"
                      for="flexCheckDefault"
                    >
                      Senegal Couture
                    </label>
                  </div>
                  <div className="cont-41 fontlab">64</div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={9}>
            <div className="center-end ">
            <DropdownButton id="dropdown-basic-button" title="Trier par Les plus pertinents">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            </div>
            <div className="col-cont-card ">
              <Container className=" d-flex  dwrap ">

                {
                  datacouture.map((item,index)=>(
                    <CardAteliers
                    
                    lassName="conttainer-items-grid"
                    key={index}
                    img={item.img}
                    titre={item.titre}
                    
                    />


                  ))
                }
                
                <div className="center">
                  <MyPagination />
                </div>

                {/* { data.map((item, index) => (
              <Carde
                key={index}
                img={item.img}
                titre={item.titre}
                nbr={item.nbr}
              />
            ))} */}
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
      <CarrouselDark/>
      <Footer />
    </div>
  );
}
