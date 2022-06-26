import React from 'react'
import {ReactComponent as VoteSVG} from "../assets/vote.svg"

const Card = () => {
  return (
    <div className="container">
    <div className="card-container">
      <div className="card">
        <div className="avatar-container">
          <a href="https://randomuser.me/api/portraits/men/75.jpg">
            <div className="avatar">
              <img src="https://randomuser.me/api/portraits/men/75.jpg" />
            </div>
          </a>
        </div>
        <div className="card-body">
          <h2 className="card-title">MR ENES ÇEB</h2>
          <p className="card-text">Title : Manager</p>
          <p className="card-text">Gender : Male</p>
          <a href="/" className="card-link">
            Read more...
          </a>
        </div>
        <div className="card-footer">
          <button className="btn-track" href="/">
            <div className="--icon">
              <div className="circle-inner"></div>
              <div className="circle-outer"></div>
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