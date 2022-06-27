import React from 'react'

const EmployeeDetail = () => {
  return (
    <div className="container-profile">
    <div className="card-container-profile">
      <div className="card-profile">
        <div className="avatar-container-profile">
          <a href="/">
            <div className="avatar-profile">
              <img src='https://randomuser.me/api/portraits/men/75.jpg'/>
            </div>
          </a>
        </div>
        <div className='card'>
        <h2 className='card-title-profile'>AD</h2>
        </div>
        <div className='card-body-profile'>
        <div>
          <h2 className="card-title-profile"> </h2>
          <p className="card-text-profile">Email : </p>
          <p className="card-text-profile " style={{textTransform: "uppercase"}}>Phone :</p>
          <p className="card-text-profile " style={{textTransform: "uppercase"}}>Age :</p>
        </div>
        </div>
        <div >
          <p className="card-text-profile">Adres : </p>
        </div>
        <div className="card-footer-profile">
      
        </div>
      </div>
    </div>
  </div>
  )
}

export default EmployeeDetail