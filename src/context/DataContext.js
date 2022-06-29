import { createContext } from "react";
import useFetchUsers from "../services/useFetchUsers";
import usePrevious from "../services/usePrevious";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { users, setUsers, vote } = useFetchUsers();
  const { prev, handlePrev } = usePrevious(users);

  
  return (
    <DataContext.Provider value={{ users, handlePrev, prev }}>
        {children}
    </DataContext.Provider>
  );
};
