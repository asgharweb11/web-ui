import {createContext , useContext , useState , useReducer} from "react";
import reducer from "./context/reducre";
import initialState from "./context/todos";

const ThemeContext = createContext()

export const useTodo = () => {
    return useContext(ThemeContext)
}


export default function ProviderValue ({children}) {

    const [todo , dispatch] = useReducer(reducer , initialState)

    return <ThemeContext.Provider value={{todo , dispatch}}>{children}</ThemeContext.Provider>
}