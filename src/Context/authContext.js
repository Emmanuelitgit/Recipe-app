import { createContext } from "react";


export const authContext = createContext()

export const authContextProvider = ({children}) =>{

    const handleNavigate = (nav) =>{
        nav.navigate("/SingleRecipe")
    }
    
    return(
        <authContext.Provider value={{handleNavigate}}>
            {children}
        </authContext.Provider>
    )
}