import { Route, Routes } from "react-router-dom"
import { Activitis } from "./screens/Activitis"
import { Home } from "./screens/Home"
import { Profile } from "./screens/Profile"
import { useAccountUser } from "../hooks/useAccountUser"
import { PrivateRoutes } from '../hooks/usePrivateRoutes';

export const Views = () => {

  const { user } = useAccountUser()

  return user.loggedIn === null 
  ?(<Routes> 
    <Route path="*" element={<Home />} />
  </Routes>) 
  :(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoutes/>}>
        <Route path="/actividades" element={<Activitis />} />
        <Route path="/perfil" element={<Profile />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
