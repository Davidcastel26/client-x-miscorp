import { useContext } from "react";
import { UserContext } from "../Context/UserContext";


export const useAccountUser = () => {

    const context = useContext(UserContext);

    if( context === undefined) throw new Error(`useAccountUser must be used with an AccountProvider`);

    return context;
}