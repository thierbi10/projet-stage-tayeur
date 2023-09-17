import React from "react";
import "./Footer.css";
import logo from "../../asset/logow.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
export default function Footer() {
  return (
    <div>
      <>
        <div className="Footer ">
          <div className="container-footer">
            <div className="row">
              <div className="col-md-6 col-lg-4 col-12 ft-1">
                <div className="container-logo">
                  <img src={logo} className="logo-footer" alt="" />
                </div>
                <p className="font-aps"> A propos de nous </p>
                <p className="font-aps"> Contact </p>
                <div className="container-cons">
                  <AiOutlineInstagram className="bg-icon" />
                  <LiaBasketballBallSolid className="bg-icon" />
                  <FiTwitter className="bg-icon" />
                  <AiFillYoutube className="bg-icon" />
                </div>
                <span className="font-aps">@Tayeur gestion 20023.</span>
              </div>
              <div className="col-md-6  col-lg-3 col-12 ft-2">
                <h5 className="font-aps info "> Info</h5>
                <p className='font-aps'>  Accueil </p>
                <p className='font-aps'>  Produits </p>
                <p className='font-aps'>  A propos de nous</p>
                <p className='font-aps'>  Contact </p>
                <p className='font-aps'>  Privacy police </p>
                <p className='font-aps'>  Terms&conditions </p>
                
              </div>
              <div className="col-md-6 col-lg-3 col-12 ft-3">
                <h5 className="info"> Adresse</h5>
                <p className='font-aps'>  Grand yoff dakar </p>
                <p className='font-aps'>  Dakar </p>
                <p className='font-aps'>  Senegal</p>
                
              </div>
              <div className="col-md-6  col-lg-2 col-12 ft-3">
                <h5 className="info">Quick Links</h5>
                <p className='font-aps'>email:tayeurgestion@gmail.com</p>
                <p className='font-aps'> client support: support@lenslove.com</p>
                <p className='font-aps'>  +221 3121324083</p>

              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
