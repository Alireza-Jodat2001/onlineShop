import { createContext } from "react"

import useAxios from "../axios/useAxios"

export const ContextApi = createContext()

export function ContextApiProvider({ children }) {
    const { response , isLoading , error } = useAxios('/products')
        
    const value = {
        response
    }

    return <ContextApi.Provider value={value}>{ children }</ContextApi.Provider>
}