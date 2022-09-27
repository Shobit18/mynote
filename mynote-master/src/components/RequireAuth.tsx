import { Children } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const RequireAuth = ({ children }: any) => {
    const auth: any = useAuth()

    if(!auth.user) {
        return <Navigate to='/admin' />
    }

    return children
}

