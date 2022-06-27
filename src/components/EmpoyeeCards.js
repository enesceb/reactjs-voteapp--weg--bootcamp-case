import Button from "./Button";
import { Link } from "react-router-dom";

//Üst compenent'ten gönderdiğim propları burada yakalıyorum
const Card = ({ first, last, picture, title, email, gender, id}) => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
        
            <div className="avatar-container">
              <a href={`${id}`}>
                <div className="avatar">
                  <img src={picture} alt={`${first}-${last}`} />
                </div>
              </a>
            </div>

          <div className="card-body">
            <h2 className="card-title">
              {title} {first} {last}{" "}
            </h2>
            <p className="card-text">E-mail : {email}</p>
            <p className="card-text " style={{ textTransform: "uppercase" }}>
              Gender : {gender}
            </p>
            <a href="/" className="card-link">
              Read more...
            </a>
          </div>
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
