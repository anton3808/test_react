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

  let dialogsData = [ 
    {id: 1, name: 'Dimych'}, 
    {id: 2, name: 'Andrew'}, 
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
  ]

  let messagesData = [ 
    {id: 1, message: 'Hi'}, 
    {id: 2, message: 'How is your it-kamasutra?'}, 
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        {/* створюєм нову компоненту і передаєм в параметри(props) два атрибута тобто дані( name="Dimych" id="1") */}
        {/* {dialogsData[0].name} - зветраємся до масива першого елемента і пебем значення name */}
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />

      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
}


export default Dialogs;