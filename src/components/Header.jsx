import { useState } from "react";
import PropTypes from "prop-types";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Header = ({ isMenuVisible, toggleMenu }) => {
    const [isHamburger, setIsHamburger] = useState(true)

    const toggleIcon = () => {
        setIsHamburger(!isHamburger);
        toggleMenu();
    }

  return (
    <div className="Header">
        <div className="Header__logo" ><NavLink to='/'>Cuisine</NavLink></div>
        <div className="Header__content">
            <button className="Header__content__reserveButton">reservation</button>
            <div className="Header__content__hamburger">
                <button className="Header__content__hamburger__button" onClick={toggleIcon}> {isHamburger ? <FaHamburger/> : <FaTimes/>}</button>
            </div>
        </div>
    </div>
  )
}

    Header.propTypes = {
    isMenuVisible: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
  };

export default Header