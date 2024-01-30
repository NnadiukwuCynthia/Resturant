import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import NavList from './components/NavList';



const App = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
    <div>
      <Header isMenuVisible={isMenuVisible} toggleMenu={toggleMenu}/>
      <NavList isMenuVisible={isMenuVisible}/>  
     </div>
    <Outlet/>
    </>
  )
}

export default App
