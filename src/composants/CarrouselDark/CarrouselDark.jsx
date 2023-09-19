import React, { Component } from "react";
import quote from "../../asset/Ellipse 9.png";
import {RiDoubleQuotesL} from 'react-icons/ri'
import "./CarrouselDark.css";
export default class CardSlider extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <div className="row ">
          <div className="cont-im-background d-flex align-items-center ">
            <div className=" bask-im col- justify-content-center  mt-4 ">
              <div className="row border cont-row ">
                <div className="col-lg-4 col-md-6 col-sm-12  ">
                  <div className="global-cont  rec p-4">
                    <div className="cont-text-car-glab   ">
                      <div className="cont-text-ipsum">
                      <RiDoubleQuotesL className="icon-double  abso" />
                        <p className="text-ipsum">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                      <div className="cont-img-temaoin m-0">
                        <img src={quote} alt="" />
                      </div>
                      <div className="div-touts center">
                        <p className="center1 m-0">JONE SMITH </p>
                        <span className="center2">
                          Founder of Awesomeux Technology
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="global-cont  rec p-4">
                    <div className="cont-text-car-glab  ">
                      <div className="cont-text-ipsum">
                      <RiDoubleQuotesL className="icon-double  abso" />
                        <p className="text-ipsum">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                      <div className="cont-img-temaoin m-0">
                        <img src={quote} alt="dd" />
                      </div>
                      <div className="div-touts center">
                        <p className="center1 m-0">JONE SMITH </p>
                        <span className="center2">
                          Founder of Awesomeux Technology
                        </span>
                      </div>
                    </div>
                  </div></div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="global-cont  rec p-4">
                    <div className="cont-text-car-glab   ">
                      <div className="cont-text-ipsum">
                      <RiDoubleQuotesL className="icon-double  abso" />
                        <p className="text-ipsum">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                      <div className="cont-img-temaoin m-0">
                        <img src={quote} width='100%' alt="" />
                      </div>
                      <div className="div-touts center">
                        <p className="center1 m-0">JONE SMITH </p>
                        <span className="center2">
                          Founder of Awesomeux Technology
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
