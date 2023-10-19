// import { NavLink } from '../NavLink'
// import ToggleColorMode from './btnColorMode'

import { NavLink } from "./NavLink"

export const MenuOverlay = () => {
    return (
      <div id="mobile-menu">
        <div className="space-y-1 md:hidden px-2 pb-3 pt-2">
           {/* <div className="flex flex-col md:hidden py-4 items-center"> */}
           <div className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
           <NavLink to="/actividades">Actividades</NavLink>
           </div>
                
           <div className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
           <NavLink to="/perfil">Perfil</NavLink>
           </div>
               
   
          </div>
      </div>
    )
  }