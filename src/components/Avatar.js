import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Avatar = () => {
    const {prev} = useContext(DataContext)
    const { name:{first,last}, picture:{large}} = prev[0];
    
  return (
  
    <div className="avatar-container-profile">
    <a href="/id">
      <div className="avatar-profile">
      <img src={large} alt={`${first}-${last}`}/>
      </div>
    </a>
  </div>

  )
}

export default Avatar