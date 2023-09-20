import React from "react";
import "./Categorie.css";
import CrustomCard from "../CrustomCard";
export default function Categorie() {
  return (
    <div>
      <CrustomCard titre="Categorie">
        <div className="cont-emploi-d-temp ">
          <div className="cont-cate d-flex   d">
            <button className="btn-filtre"> Taille basse</button>
            <button className="btn-filtre"> File a file</button>{" "}
            <button className="btn-filtre"> Robe</button>{" "}
            <button className="btn-filtre"> taille basse</button>{" "}
            <button className="btn-filtre"> Costume Africain</button>{" "}
            <button className="btn-filtre"> Baye Lathe</button>{" "}
            <button className="btn-filtre"> Taille Mame</button>{" "}
            <button className="btn-filtre"> Grand boubou homme</button>{" "}
            <button className="btn-filtre"> Robe  homme</button>{" "}
            <button className="btn-filtre"> Taille haute</button>{" "}
            <button className="btn-filtre"> Grand boubou femme</button>{" "}
            <button className="btn-filtre"> taille basse</button>{" "}
            <button className="btn-filtre"> taille basse</button>{" "}
          
          </div>
        </div>
      </CrustomCard>
    </div>
  );
}
