import { createContext, useState } from "react";

const InterfaceContext = createContext('')

export const InterfaceProvider = ({children}) => {
    const [value, setValue] = useState(null)
    return (
        <InterfaceContext.Provider value={{setValue, value}}>
            {children}
        </InterfaceContext.Provider>
    )
}

export default InterfaceContext;