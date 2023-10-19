import { useState } from 'react';
import { Link } from 'react-router-dom';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';

import { NavLink } from './ui/NavLink';
import { MenuOverlay } from './ui/MenuOverlay';
import ToggleColorMode from './ui/ToggleColorMode';
// import { useAccountUser } from '../hooks/useAccountUser';
import { useAuth } from '../hooks/usePrivateRoutes';

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  // const { user } = useAccountUser()
  const isAuth = useAuth()
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <Link 
          to='/' 
          className="bg-gray-900  text-white rounded-md px-3 py-2 text-sm font-bold"
        >
          X-company
        </Link> 
        
       <div className="mobile-menu block md:hidden"  id="mobile-menu">
          {
            !navbarOpen ? (
              <div>
                <ul className='ml-20'>
                <ToggleColorMode />
                </ul>
                <button 
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                    <HamburgerIcon className="h-5 w-5"/>
                </button>
                </div>
            ): (
              <div>
                <ul className='ml-20'>
                <ToggleColorMode />
                </ul>
                <button
                    onClick={() => setNavbarOpen(!navbarOpen)} 
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                    <CloseIcon className="h-5 w-5"/>
                </button>
                </div>
            )
          }
          </div>
         
          <div className="menu hidden md:block md:w-auto sm:ml-6" id="navbar">
            <ul className="flex md:flex-row md:space-x-8 mt-0 pr-9">
              {
                isAuth
                ? <><NavLink to="/actividades">Actividades</NavLink>
                <NavLink to="/perfil">Perfil</NavLink>
                <ToggleColorMode /></>
                :<ToggleColorMode />
              }
              
            </ul>
          </div>
      </div>
    </div>

      {
        !navbarOpen ? null :  <MenuOverlay />
      }
    </nav>
  )

}
