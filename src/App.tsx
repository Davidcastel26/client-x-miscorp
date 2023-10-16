import './main.css'
import { Navbar } from "./components/Navbar"
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/screens/Home'


function App() {

  return (
    <>
    <Navbar /> 
    <div className="container mt-28 mx-auto px-12 py-4">
     <Routes>
       <Route path="/" element={<Home/>} />
     </Routes>
    </div>
   </>
  )
}

export default App
