import React from 'react'
import img from "../../asset/6point9.png"
import './Card.css'
import { AiFillStar } from 'react-icons/ai';
import { BiLogoWhatsappSquare } from 'react-icons/bi';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { LuMessagesSquare } from 'react-icons/lu';
import { Link } from "react-router-dom";
export default function Carde({ img, titre, nbr }) {
  return (
    <>
      <section className="card   ">
        
            <Link to="/couture/ateliers-info">
              <div className='card-img ' >
                <img src={img} width='100%'  alt="titre" className="" />
              </div>
            </Link>     <div className="  cont-card-text ">
              <h3 className="card-title font2 mt"> {titre}</h3>
              <section className="card-reviews d-flex justify-content-between align-items-center a ">
                <div className='font'> {nbr}</div>
                <div>
                  < AiFillStar className='icon-color' />
                  < AiFillStar className='icon-color' />
                  < AiFillStar className='icon-color' />
                  < AiFillStar className='icon-color' />
                </div>
                <span className="total-reviews font">2 avis </span>
                <span>
                  <BiLogoWhatsappSquare className=' icon-card  whatsap' />
                  <FaPhoneSquareAlt className=' icon-card  rouge' />
                  <LuMessagesSquare className=' icon-card  rouge' />
                </span>
              </section>
              <section className="card-price">

                <div className="bag">
                  {/* <BsFillBagFill className="bag-icon" />  */}
                </div>
              </section>
            </div>
          
      </section>

    </>
  )
}
