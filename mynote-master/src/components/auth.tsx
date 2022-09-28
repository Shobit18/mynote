import { createContext, useState, useContext } from "react"

export const AuthContext = createContext(null as any)

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null)

    const login: any = (user: any) => {
        setUser(user)
    }

    const logout: any = (user: any) => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}