import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { ReactComponent as VoteSVG } from "../assets/vote.svg";
import useFetchUsers from "../services/useFetchUsers";

const Home = () => {


  const { users, handlePrev, } = useContext(DataContext);
  const { setUsers} = useFetchUsers(users);
  
  const sortedUsers = users.sort((a,b) => b.vote - a.vote)

  const updateVote = selected => {

    setUsers(sortedUsers => sortedUsers.map(user => {
      if(user.id === selected.id){
        user.vote += 1
      }
   
      return user
    }))
  }
  return (
    <>
    
      {sortedUsers &&
        sortedUsers.map((user) => {
          return (
            <div key={user.id}>
              <div  className="container">
                <div className="card-container">
                  <div className="card">
                    <Link
                      className="avatar-container"
                      to={`/${user.id}`}
                      key={user.id}
                      data-userid={user.id}
                      onClick={handlePrev}
                      style={{ textDecoration: "none" }}
                    >
                      <div>
                        <a href={`${user.id}`}>
                          <div className="avatar">
                            <img
                              src={user.picture.large}
                              alt={`${user.name.first}-${user.name.last}`}
                            />
                          </div>
                        </a>
                      </div>
                    </Link>

                    <div className="card-body">
                      <h2 className="card-title">
                        {user.name.title} {user.name.first} {user.name.last}{" "}
                      </h2>
                      <p className="card-text">E-mail : {user.email}</p>
                      
                      <p
                      
                        className="card-text "
                        style={{ textTransform: "uppercase" }}
                      >
                        Gender : {user.gender}
                      </p>
                      <a href="/" className="card-link">
                        Read more...
                      </a>
                    </div>
                    <div className="card-footer">
                      <button onClick={()=> updateVote(user)} className="btn-track" href="/">
                        <div className="--icon">
                          <div className="circle-inner"></div>
                          <div className="circle-outer"></div>
                          <p>Oy ver</p>
                          <VoteSVG />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-container-vote">Toplam Oy {user.vote} </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Home;
