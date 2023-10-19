import { ReactNode } from "react";

export interface AccountUser {
    loggedIn: boolean;
    user:     string;
}

export interface AccountUserContextType {
    user: AccountUser;
    setUser: (user:any | null) => void
}

export interface AccountUserProviderProps {
    // children: JSX.Element | JSX.Element[]
    children: ReactNode
}