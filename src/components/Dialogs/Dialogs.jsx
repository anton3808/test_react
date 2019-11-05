import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {
  

  // промапував масив обєктів і створив компоненти
  
  let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.state.messages.map( message => <Message message={message.message} />);


  let newTextMessage = React.createRef();
  let addMessageText = () => {
    let textMessage = newTextMessage.current.value;
    alert(textMessage);

  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {/* створюєм нову компоненту і передаєм в параметри(props) два атрибута тобто дані( name="Dimych" id="1") */}
        {/* {dialogsData[0].name} - зветраємся до масива першого елемента і пебем значення name */}
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
        
        <textarea ref={newTextMessage} ></textarea>
        <button onClick={ addMessageText }>Create</button>
      </div>
    </div>
  );
}


export default Dialogs;