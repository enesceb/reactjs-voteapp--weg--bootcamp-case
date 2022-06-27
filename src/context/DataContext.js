import { createContext } from "react";
import useFetchUsers from "../services/useFetchUsers";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  //Verilere her yerden ulaşabilmem için context yapısı kullandım.
  const { users } = useFetchUsers();

  return (
    <DataContext.Provider value={{ users }}>
        {children}
    </DataContext.Provider>
  );
};
