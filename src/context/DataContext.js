import { createContext } from "react";
import useFetchUsers from "../services/useFetchUsers";
import usePrevious from "../services/usePrevious";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  //Verilere her yerden ulaşabilmem için context yapısı kullandım.
  const { users } = useFetchUsers();
  const { prev, handlePrev } = usePrevious(users);
  
  return (
    <DataContext.Provider value={{ users, handlePrev, prev }}>
        {children}
    </DataContext.Provider>
  );
};
