import React from 'react';
import s from './Header.module.css';//підключення стилів як модуль (якобєкт з ключом назви класа і значенням нового класа)

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png" />
    </header>
  );

}


export default Header;