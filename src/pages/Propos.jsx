import React from "react";
import "./Propos.css";
import ndiaga from "../asset/ndiaga (1).png";
import ndiaga1 from "../asset/ndiaga (3).png";
import ndiaga2 from "../asset/ndiaga (2).png";
import oeil from "../asset/oeil.png";
import Footer from "../composants/Footer/Footer";

export default function Propos() {
  return (
    <div className="">
      <div className="container">
        <h1 className="propos">
          {" "}
          <span>A propos de </span> nous{" "}
        </h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 m-0 p-0 border">
            <div className="comtainer-img">
              <img src={ndiaga} alt="dd" />
            </div>
          </div>
          <div className="col-sm-6 m-0 p-0 border">
            <div className="comtainer-text">
              <h2 className="sommes">Qui sommes nous ?</h2>
              <p className="text-cont01">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.+
              </p>
              <button className="btn-propos">En savoir plus</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 m-0 p-0 border">
            <div className="comtainer-text">
              <h2 className="sommes">Notre vision</h2>
              <p className="text-cont01">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.+
              </p>
              <button className="btn-propos">En savoir plus</button>
            </div>
          </div>
          <div className="col-sm-6 m-0 p-0 border">
            <div className="comtainer-img">
              <img src={oeil} alt="dd" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 m-0 p-0 border">
            <div className="comtainer-img">
              <img src={ndiaga1} alt="dd" />
            </div>
          </div>
          <div className="col-sm-6 m-0 p-0 border">
            <div className="comtainer-text">
              <h2 className="sommes">Qui sommes nous ?</h2>
              <p className="text-cont01">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.+
              </p>
              <button className="btn-propos">En savoir plus</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 m-0 p-0 border">
            <div className="comtainer-text">
              <h2 className="sommes">Qui sommes nous ?</h2>
              <p className="text-cont01">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.+
              </p>
              <button className="btn-propos">En savoir plus</button>
            </div>
          </div>
          <div className="col-sm-6 m-0 p-0 border">
            <div className="comtainer-img">
              <img src={ndiaga2} alt="dd" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
