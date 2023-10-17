import './main.css';
import { Navbar } from "./components/Navbar";
import { Views } from './components/Views';
import { AccountUserProvider } from './Providers/AccountUserProvider';


function App() {

  return (
    <AccountUserProvider>
      <Navbar /> 
      <div className="container mt-28 mx-auto px-12 py-4">
        <Views />
      </div>
   </AccountUserProvider>
  )
}

export default App
