import { createContext } from "react";
import { AccountUserContextType } from "../interfaces/iuser";

export const UserContext = createContext<AccountUserContextType>( {} as AccountUserContextType)