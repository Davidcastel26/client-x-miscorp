import { Route, Routes } from "react-router-dom"
import { Activitis } from "./screens/Activitis"
import { Home } from "./screens/Home"
import { Profile } from "./screens/Profile"

export const Views = () => {
  return (
    <Routes>
      <Route path="/actividades" element={<Activitis />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
