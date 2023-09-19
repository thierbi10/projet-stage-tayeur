import React from "react";
import "./Couture.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CarrouselDark from "../../composants/CarrouselDark/CarrouselDark";
import Card from "react-bootstrap/Card";
import Carde from "../../composants/Cards/Carde";
import data from "../../data/dataCards";
import Footer from "../../composants/Footer/Footer";
export default function Couture({ img, titre, nbr }) {
  return (
    <div className=" bg">
      <Container>
        <h3 className="mt-4 touts">tous les items</h3>
        <p className="atelier">
          Nos Ateliers de <span> Couture</span>
        </p>
        <Row className="">
          <Col className=" bg-col cont-col col-row-taille" sm={3}>
            <div className="d">
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
          <Col className=" p-0 m-0 " sm={8}>
            <div className="center-end ">
              <DropdownButton
                id="dropdown-basic-button"
                title="Trier par Les plus pertinents"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="  ">
              <div className="  grille">
                {data.map((item, index) => (
                  <Carde
                    className="conttainer-items-grid"
                    key={index}
                    img={item.img}
                    titre={item.titre}
                    nbr={item.nbr}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <CarrouselDark />

      <Footer />
    </div>
  );
}
