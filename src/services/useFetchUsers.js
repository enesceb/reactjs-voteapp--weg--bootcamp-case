import { useState, useEffect } from "react";
import uuid from "react-uuid";

const useFetchUsers = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [vote, setVote] = useState();

  const url = `https://randomuser.me/api/?results=4&nat=TR&&exc=login,registered`;

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(url);
      const items = await res.json();

      return items.results;
    };

    if (users.length < 1) {
      fetchUsers()
        .then((resultsArray) => {
          let dataSlice = resultsArray.slice().map((results) => {
            results.id = uuid();
            results.vote = vote
            return results;
          });
          localStorage.setItem("users", JSON.stringify(dataSlice));
          setUsers(dataSlice);
        })
        .catch((err) => console.log(err));
    }
  }, [url, users]);

  return {
    users,
    vote,
    setVote,
    setUsers,
  };
};

export default useFetchUsers;
