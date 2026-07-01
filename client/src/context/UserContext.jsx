import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext()

export const UserProvider = ({children}) => {
    
    const [userData, setUserData] = useState(null)

    return <UserContext.Provider value={{userData, setUserData}}>
        {children}
    </UserContext.Provider>
}

export const useUser = () => {
    const context = useContext(UserContext)

    if(!context){
        console.error("Context is not provided!")
    }

    return context
}