import { useState } from "react";
import { FaHamburger, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Header = () => {
    const [isHamburger, setIsHamburger] = useState(true)

    const toggleIcon = () => {
        setIsHamburger(!isHamburger)
    }

  return (
    <div className="Header">
        <div className="Header__logo">Cuisine</div>
        <div className="Header__content">
            <button className="Header__content__reserveButton">reservation</button>
            <div className="Header__content__hamburger">
                <button className="Header__content__hamburger__button" onClick={toggleIcon}> {isHamburger ? <FaHamburger/> : <FaTimes/>}</button>
            </div>
                <Sidebar/>
        </div>
    </div>
  )
}

export default Header