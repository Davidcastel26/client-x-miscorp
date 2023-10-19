import { useEffect, useState } from 'react';
import { AccountUserContextType, AccountUserProviderProps } from '../interfaces/iuser';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const URL = import.meta.env.VITE_API_CONNECTION || "http://localhost:8080"

export const AccountUserProvider: React.FC<AccountUserProviderProps> = ({children}) =>{
    
    const [user, setUser] = useState< any | null >({loggedIn: null});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${URL}/xcompany/auth/login`,{
            method: 'GET',
            credentials: "include"
        }).catch( err => {
            console.log(err)
            setUser({loggedIn: false})
            // console.log('false logged in')
            return;

        }).then(r => {

            if(!r || !r.ok || r.status >= 400 ){
                console.log('false logged in', r)
                setUser({loggedIn: false})
                return;
            }
            return r.json()

        }).then( (data:any) => { 
            if(!data){
                console.log('false logged in', data)
                setUser({loggedIn: false})
                return;
            }
            // console.log('logged in papi');
            console.log(data)
            setUser({...data})
            navigate('/actividades')
            return
        })
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