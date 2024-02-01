import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const NavList = ({ isMenuVisible, onMenuOptionClick }) => {

  const handleMenuOptionClick = () => {
    onMenuOptionClick(); 
  };
  return isMenuVisible ? (
    <div className={`navList  ${isMenuVisible  ?  'visible'   : " "} `}>
    <div className="navList__Item">
        <NavLink onClick={handleMenuOptionClick} className={({isActive}) => isActive ? 'navList__Item__active' : 'navList__Item__menuItems'} to='/'>Home</NavLink>
        <NavLink onClick={handleMenuOptionClick} className={({isActive}) => isActive ? 'navList__Item__active' : 'navList__Item__menuItems'} to='/menu'>Our Menu</NavLink>
        <NavLink onClick={handleMenuOptionClick} className={({isActive}) => isActive ? 'navList__Item__active' : 'navList__Item__menuItems'} to='/contact'>Our Information</NavLink>
        <NavLink onClick={handleMenuOptionClick} className={({isActive}) => isActive ? 'navList__Item__active' : 'navList__Item__menuItems'} to='/faq'>FAQ</NavLink>
        <NavLink onClick={handleMenuOptionClick} className={({isActive}) => isActive ? 'navList__Item__active' : 'navList__Item__menuItems'} to='/gallery'>Gallery</NavLink>
        <hr />
    </div>
    </div> 
  ) : null;
}

NavList.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired,
  onMenuOptionClick: PropTypes.func.isRequired,
};

export default NavList