import { Navigate, Outlet } from "react-router-dom";
import { useAccountUser } from "./useAccountUser"


export const useAuth = () => {
    const { user } = useAccountUser();
    return user && user.loggedIn
}

export const PrivateRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/home" />
}