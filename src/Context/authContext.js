import { createContext } from "react";


export const authContext = createContext()

export const AuthContextProvider = ({children}) =>{

    const handleNavigate = (nav) =>{
        nav.navigate("/SingleRecipe")
    }
    
    return(
        <AuthContext.Provider value={{handleNavigate}}>
            {children}
        </AuthContext.Provider>
    )
}