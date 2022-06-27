import React, { useContext } from "react";
import EmpoyeeCards from "../components/EmpoyeeCards";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

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
            <Link
              to={`/${id}`}
              key={id}
              data-userid={id}
              onClick={handlePrev}
              style={{ textDecoration: "none" }}
            >
              <EmpoyeeCards
                id={id}
                key={id}
                first={first}
                last={last}
                title={title}
                email={email}
                gender={gender}
                picture={large}
              />
            </Link>
          );
        })}
    </>
  );
};

export default Home;
