import React from 'react'
import {ReactComponent as VoteSVG} from "../assets/vote.svg"
const Button = () => {
  return (
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
  )
}

export default Button