import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export const UserAuth = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false)

    return (

        <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </UserContext.Provider >
    )
}   