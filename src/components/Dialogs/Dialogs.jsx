import React from 'react';
import s from './Dialogs.module.css';
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

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  );
}



const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
  ]
  
  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ]

  // промапував масив обєктів і створив компоненти
  let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = messages.map( message => <Message message={message.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {/* створюєм нову компоненту і передаєм в параметри(props) два атрибута тобто дані( name="Dimych" id="1") */}
        {/* {dialogsData[0].name} - зветраємся до масива першого елемента і пебем значення name */}
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  );
}


export default Dialogs;