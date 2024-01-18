import { useState,createContext } from "react";

export const MeuContexto = createContext()

export const MeuContextoProvider = ({children}) => {
    const [msg, setMsg] = useState('Mensagem do contexto')

    const valorDoContexto = {
        msg,
        setMsg
    }
    
    return (
        <MeuContexto.Provider value={valorDoContexto}>
            {children}
        </MeuContexto.Provider>
    )
}