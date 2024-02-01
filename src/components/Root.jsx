import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header";
import NavList from './NavList';

const Root = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const handleMenuOptionClick = () => {
        toggleMenu();
  };
  return (
    <>
    <div className="root">
    <Header isMenuVisible={isMenuVisible} toggleMenu={toggleMenu}/>
    <NavList isMenuVisible={isMenuVisible} onMenuOptionClick={handleMenuOptionClick}/>
    </div>
    <Outlet/>
    </>
  )
}

export default Root