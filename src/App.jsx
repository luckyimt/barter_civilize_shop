import { Outlet } from "react-router-dom";
import './App.css'
import NavItems from "./components/NavItems";
import Footer from './components/Footer';
import {HelmetProvider} from 'react-helmet-async'
function App() {
  const helmetContext = {}
  return (
    <>
      <HelmetProvider context={helmetContext}>
      <NavItems />
      <div className="min-vh-100">
      <Outlet />
      </div>
        <Footer />
   </HelmetProvider>
      
        
    </>
  )
}

export default App
