import { createContext } from "react";
import useFetchUsers from "../services/useFetchUsers";



export const EmployeeDataContext = createContext();

export const DataProvider = ({ children }) => {
    
    const { users } = useFetchUsers();

    return (
        <EmployeeDataContext.Provider value={{users}}>
            {children}
        </EmployeeDataContext.Provider>
    )
}