import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const NavList = ({ isMenuVisible }) => {
  return isMenuVisible ? (
    <div className={`navList  ${isMenuVisible  ?  'visible'   : " "} `}>
    <div className="navList__Item">
        <NavLink className={({isActive}) => isActive ? 'navList__Item__active' : 'navList__Item__menuItems'} to='/menu'>Our Menu</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navList__Item__active' : 'navList__Item__menuItems'} to='/contact'>Our Information</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navList__Item__active' : 'navList__Item__menuItems'} to='/faq'>FAQ</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navList__Item__active' : 'navList__Item__menuItems'} to='/gallery'>Gallery</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navList__Item__active' : 'navList__Item__menuItems'} to='/#'>Reservation</NavLink>
        <hr />
    </div>
    </div> 
  ) : null;
}

NavList.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired,
};

export default NavList