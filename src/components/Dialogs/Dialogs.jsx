import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewPostTextActionCreator, updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';



const Dialogs = (props) => {

  let state = props.dialogsPage;
  

  // промапував масив обєктів і створив компоненти
  
  let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
  let messagesElements = state.messages.map( message => <Message key={message.id} message={message.message} />);
  let newMessagesBody = state.newMessagesBody;


  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {/* створюєм нову компоненту і передаєм в параметри(props) два атрибута тобто дані( name="Dimych" id="1") */}
        {/* {dialogsData[0].name} - зветраємся до масива першого елемента і пебем значення name */}
        { dialogsElements }
      </div>
      <div className={s.messages}>
        <div>{ messagesElements }</div>
        
        <div>
          <div><textarea value={newMessagesBody} onChange={ onNewMessageChange } placeholder="Enter your message"></textarea></div>
          <div><button onClick={ onSendMessageClick }>Send</button></div>
        </div>
      </div>
    </div>
  );
}


export default Dialogs;