import { useEffect, useState } from 'react';
import { AccountUserContextType, AccountUserProviderProps } from '../interfaces/iuser';
// import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';



export const AccountUserProvider = ({children}: AccountUserProviderProps) =>{
    
    const [user, setUser] = useState< any | null >({loggedIn: null});
    // const navigate = useNavigate();

    useEffect(() => {

    },[]);

    const contextValue: AccountUserContextType = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )

}