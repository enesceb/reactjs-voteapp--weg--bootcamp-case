import { useState, useEffect } from "react";
import uuid from "react-uuid";

const useFetchUsers = () => {
  const [users, setUsers] = useState(
    JSON.parse(window.sessionStorage.getItem("users")) || []
  );

  const url = `https://randomuser.me/api/?results=5&nat=us&&exc=login,registered`;

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(url);
      const items = await res.json();

      return items.results;
    };
    if (users.length < 1) {
      fetchUsers()
        .then((resultsArray) => {
          const dataSlice = resultsArray.slice().map((results) => {
            results.id = uuid();
            return results;
          });
          setUsers(dataSlice);
        })
        .catch((err) => console.log(err));
    }
  }, [url, users]);

  useEffect(() => {
    window.sessionStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return {
    users,
  };
};

export default useFetchUsers;
