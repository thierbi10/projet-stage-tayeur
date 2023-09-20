import React from "react";
import CrustomCard from "../CrustomCard";
import Form from "react-bootstrap/Form";
import { AiFillStar } from "react-icons/ai";
import Carousel from "react-bootstrap/Carousel";
import imageboutique from "../../asset/6point9boutik.jpg"
import "./map.css";
export default function CartMap() {
  return (
    <div className="card-text mt-4 p-2">
      <div className="px-0">
        <div className="header-card">
          <h2 className="des">map</h2>
        </div>
        <div className="boy-card   ">
          <span className="progres-bar">
            <span className="progress-color"></span>
          </span>
        </div>
     
      <div className="cont-icon d-flex  flex-column  ">
        <div className="cont-img-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.343640930849!2d-17.47434302528493!3d14.749659473410615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10df30367ecf9%3A0x2b2a2dde7218bfe4!2s6POINT9%20Ouest%20Foire!5e0!3m2!1sfr!2ssn!4v1695057908981!5m2!1sfr!2ssn"
            width="99%"
            height="450"
            style={{ marginRight: "em" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="con-boutique">
        <Carousel className="bg-car ">
        <Carousel.Item>
          <img src={imageboutique} className="imcar" alt="" srcset="" />

          <Carousel.Caption className="text-para">
            <h1>Découvrez votre prochaine session de créativité.</h1>
            <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR </p>
            <div className="gem d-flex justify-content-center">
            <div className="input  w-50 ">
              <Form.Select className="btn-select" aria-label="Default CL select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                
              </Form.Select>
              <div className="container-btn"> <button className="btn2">RECHERCHE</button></div>
            </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img src={imageboutique} className="" alt="" srcset="" />

          <Carousel.Caption className="text-para">
            <h1>Découvrez votre prochaine session de créativité.</h1>
            <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR </p>
            <div className="gem d-flex justify-content-center">
            <div className="input  w-50 ">
              <Form.Select className="btn-select" aria-label="Default CL select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                
              </Form.Select>
              <div className="container-btn"> <button className="btn2">RECHERCHE</button></div>
            </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container-info-69 pb-4 mt-4">
       <p className="p-0 m-0 P69"> 6 point 9</p>
        <span> showroom sacre coeur</span>
        <div className="d-flex  align-items-between justify-content-between mr-4">
       <div className="avi">
         <span>2 Avis</span>
       </div>
       <div className="star">
       5 <AiFillStar className="icon-color" />
       </div>
        </div>
      </div>
       </div>   
      </div>
    </div>
    </div>
  );
}
