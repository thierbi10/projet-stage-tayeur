import React from "react";
import carouselImage from "../../asset/imcarrousel.png";
import imgfont from "../../asset/div.Home_SectionHeroOverlay__2xcyq.png";
import banier from "../../asset/Section (1).png";
import Carousel from "react-bootstrap/Carousel";
import "./Carrousel.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function () {
  return (
    <div>
      <Carousel className="bg-car ">
        <Carousel.Item>
          <img src={carouselImage} className="imcar" alt="" srcset="" />

          <Carousel.Caption className="text-para">
            <h1>Découvrez votre prochaine session de créativité.</h1>
            <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR </p>
            <div className="gem d-flex justify-content-center my-4">
            <div className="input  w-50 ">
              <Form.Select aria-label="Default select example">
                <option>Categorie</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                
              </Form.Select>
              <div className="container-btn"> <Button className="btn2">RECHERCHE</Button></div>
            </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img src={carouselImage} className="" alt="" srcset="" />

          <Carousel.Caption className="text-para">
            <h1>Découvrez votre prochaine session de créativité.</h1>
            <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR </p>
            <div className="gem d-flex justify-content-center">
            <div className="input  w-50 ">
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                
              </Form.Select>
              <div className="container-btn"> <Button className="btn2">RECHERCHE</Button></div>
            </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="img-fond">
        <img src={imgfont} alt="" />
      </div>
      {/* <div className="sec-recherche">
        <img src={banier} alt="" />
        </div> */}

    </div>
  );
}
