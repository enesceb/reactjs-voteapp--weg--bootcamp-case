import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { format } from "date-fns";


const EmployeeDetail = () => {
    const { users } = useContext(DataContext);
    const { name:{title, first,last}, picture:{large}, phone, email, location, dob:{ date, age}, gender, nat} = users;
    console.log(users)
    const formatedDOB = format(new Date(date), "MM/dd/yyyy")

  return (
    <div className="container-profile">
    <div className="card-container-profile">
      <div className="card-profile">
        <div className="avatar-container-profile">
          <a href="/">
            <div className="avatar-profile">
            <img src={large} alt={`${first}-${last}`}/>
            </div>
          </a>
        </div>
        <div className='card'>
        <h2 className='card-title-profile'>{title} {first} {last}</h2>
        </div>
        <div className='card-body-profile'>
        <div>
          <p className="card-text-profile">Email: {email} </p>
          <p className="card-text-profile " >Phone: {phone}</p>
          <p className="card-text-profile " >Age: {age}</p>
        </div>
        <div>
          
          <p className="card-text-profile">Gender: {gender} </p>
          <p className="card-text-profile ">Nationalities: {nat}</p>
          <p className="card-text-profile ">Birtday: {formatedDOB} </p>
        </div>
        </div>
        <div className='card' style={{alignItems: "baseline"}}>
        <h3 style={{marginRight: "10px"}}>Location:</h3> 
        <p className="card-text-profile">  {location.street.number} {location.street.name}. {location.city} </p>
        <p className="card-text-profile">{location.state}, {location.postcode} </p>
        </div>
        <div className="card-footer-profile">
      
        </div>
      </div>
    </div>
  </div>
  )
}

export default EmployeeDetail