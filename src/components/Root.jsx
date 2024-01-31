import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header";
import NavList from './NavList';

const Root = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
    <div className="root">
    <Header isMenuVisible={isMenuVisible} toggleMenu={toggleMenu}/>
    <NavList isMenuVisible={isMenuVisible}/>
    </div>
    <Outlet/>
    </>
  )
}

export default Root