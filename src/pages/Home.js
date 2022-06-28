import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import Button from "../components/Button";

const Home = () => {
  // API'den gelen verileri context yapısı ile yönetiyorum

  const { users, handlePrev } = useContext(DataContext);

  return (
    <>
      {/* Çalışanların Listelendiği alan. API'den genel veriler bir alt componente (EmployeeCards) prop olarak iletiliyor.*/}
      {/* NOT: Context'i direkt olarak EmployeeCards componentinin içinde de kullanabilirdim fakat clean code olması açısından burada prop olarak göndermeyi tercih ettim */}

      {users &&
        users.map((values) => {
          //Map ettiğim değerleri values'e aktarıyorum. Context'ten gelen ve içerisinde objeler barındıran users Array'ini direkt obje olarak kullanıyorum.
          const {
            name: { first, last, title },
            picture: { large },
            email,
            gender,
            id,
          } = values;
          console.log(id);
          return (
            <div className="container">
              <div className="card-container">
                <div className="card">
                  <Link
                  className="avatar-container"
                    to={`/${id}`}
                    key={id}
                    data-userid={id}
                    onClick={handlePrev}
                    style={{ textDecoration: "none" }}
                  >
                    <div >
                      <a href={`${id}`}>
                        <div className="avatar">
                          <img src={values.picture.large} alt={`${first}-${last}`} />
                        </div>
                      </a>
                    </div>
                  </Link>

                  <div className="card-body">
                    <h2 className="card-title">
                      {title} {first} {last}{" "}
                    </h2>
                    <p className="card-text">E-mail : {email}</p>
                    <p
                      className="card-text "
                      style={{ textTransform: "uppercase" }}
                    >
                      Gender : {gender}
                    </p>
                    <a href="/" className="card-link">
                      Read more...
                    </a>
                  </div>
                  <Button/>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Home;
