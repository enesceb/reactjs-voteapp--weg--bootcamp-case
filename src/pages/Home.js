import React, { useContext } from "react";
import EmpoyeeCards from "../components/EmpoyeeCards";

import { DataContext } from "../context/DataContext";
import "../styles/Home.scss";
const Home = () => {
  const { users } = useContext(DataContext);
  console.log(users);

  return (
    <div>
      {users &&
        users.map((values) => {
          return <EmpoyeeCards />;
        })}
    </div>
  );
};

export default Home;
