import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import NavList from './components/NavList';
import Hero from "./components/Hero";



const App = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
    <div className="root">
      <Header isMenuVisible={isMenuVisible} toggleMenu={toggleMenu}/>
      <NavList isMenuVisible={isMenuVisible}/>
      <Hero/>  
     </div>
    <Outlet/>
    </>
  )
}

export default App
