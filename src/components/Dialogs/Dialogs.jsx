import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
  let path = "/dialogs/"+props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
      {/* props.id - звертаємся до обєкта props і берем значення атрибута id */}
    </div>
  );
}

const Message = (props) => {
  return(
    <div className={s.message}>{props.message}</div>
  );
} 


const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        {/* створюєм нову компоненту і передаєм в параметри(props) два атрибута тобто дані( name="Dimych" id="1") */}
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Viktor" id="5" />
        <DialogItem name="Valera" id="6" />

      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How is your it-kamasutra?" />
        <Message message="Yo" />
      </div>
    </div>
  );
}


export default Dialogs;