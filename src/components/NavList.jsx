import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <div className="navList">
        <NavLink className={({isActive}) => isActive ? 'navList__active' : 'navList__menuItems'} to='/menu'>Our Menu</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navList__active' : 'navList__menuItems'} to='/contact'>Our Information</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navList__active' : 'navList__menuItems'} to='/faq'>FAQ</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navList__active' : 'navList__menuItems'} to='/gallery'>Gallery</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navList__active' : 'navList__menuItems'} to='/#'>Reservation</NavLink>

        <hr />
    </div>
  )
}

export default NavList