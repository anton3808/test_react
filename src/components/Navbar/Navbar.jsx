import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`} >
        <NavLink to="/profile" activeClassName={s.activeLink} >Profile</NavLink>
        {/* тег NavLink - это аналог до тега "а", але виконюэ переадресацію без перезагрузки сторінки, to замінсть href */}
        {/* всі атрибути превращаються в props */}
        {/* activeClassName={s.active} - перезаписуєм клас для активних силок */}
      </div>

      <div className={s.item} >
        <NavLink to="/dialogs" activeClassName={s.activeLink} >Message</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink} >News</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink} >Music</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink} >Settings</NavLink>
      </div>
    </nav>
  );

}


export default Navbar;