import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
      {/* props.id - звертаємся до обєкта props і берем значення атрибута id */}
    </div>
  );
}


export default DialogItem;