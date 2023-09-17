import React from "react";
import femme from "../../asset/rtm_RTMHC078.jpeg";
import logohc from '../../asset/hc.png'
import "./Card.css";
import {TfiHeart}  from  'react-icons/tfi'
import {HiOutlineShare} from 'react-icons/hi2'
import {AiOutlineMessage} from 'react-icons/ai'
export default function CardAteliers() {
  return (
    <div className="mycard">
      <div className="img-group">
      <div className="container-ims">
        <img   src={femme}  alt="" />
      </div>
       <div className="cont-logo-hc">
        <img src={logohc} alt="" />
       </div>
       </div>
       <div>
        <div  container-atelier-text>
          <div className="con-check d-flex justify-content-between  align-items-center taille ">
            <div className="taille-basse cont-41 taille-bass-font ">taille bass</div>
            <div className="cont-41 fontlab"> Hier 23:57</div>
          </div>
          <div className="con-check d-flex justify-content-between cont-res-icon  ">
            <div className="taille-basse cont-41 fontlab "><TfiHeart className="font-icons-produit"/></div>
            <div className="cont-41 font-icons-produit fontlab"> <HiOutlineShare/> <span>34</span></div>
            <div className="cont-41 font-icons-produit fontlab">  <AiOutlineMessage/> <span>567</span> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
