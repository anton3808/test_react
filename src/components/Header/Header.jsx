import React from 'react';
import s from './Header.module.css';//підключення стилів як модуль (якобєкт з ключом назви класа і значенням нового класа)
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png" />

      <div className={s.loginBlock}>
        { props.isAuth ? props.login
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );

}


export default Header;