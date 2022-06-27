import React from 'react'
import {ReactComponent as VoteSVG} from "../assets/vote.svg"
import { MdHowToVote } from "react-icons/md";

//Üst compenent'ten gönderdiğim propları burada yakalıyorum
const Card = ({first,last, picture,title,email, gender }) => {
  return (
    <div className="container">
    <div className="card-container">
      <div className="card">
        <div className="avatar-container">
          <a href="https://randomuser.me/api/portraits/men/75.jpg">
            <div className="avatar">
              <img src={picture} alt={`${first}-${last}`}/>
            </div>
          </a>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title} {first} {last} </h2>
          <p className="card-text">E-mail : {email}</p>
          <p className="card-text " style={{textTransform: "uppercase"}}>Gender : {gender}</p>
          <a href="/" className="card-link">
            Read more...
          </a>
        </div>
        <div className="card-footer">
          <button className="btn-track" href="/">
            <div className="--icon">
              <div className="circle-inner"></div>
              <div className="circle-outer"></div>
              <p>Oy ver</p>
              <VoteSVG/>
              
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card