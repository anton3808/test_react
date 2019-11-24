import React from 'react';
import { updateNewPostTextActionCreator, updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";


const mapStateToProps = (state) => {//во время конектинга функция connect передаст в функцию mapStateToProps state
  return {//возврощает обьект, настраивает свойства з state
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {//во время конектинга функция connect передаст в функцию mapDispatchToProps dispatch
  return {//возвращает callbacks functions которие мы будем отправлять в призентационую компоненту
    updateNewMessageBody: () => {
      dispatch( sendMessageCreator() );//функция sendMessageCreator возвращает type action который мы потом dispatch
    },
    sendMessage: (body) => {
      dispatch( updateNewMessageBodyCreator(body) );
    }
  }
}

// создоет контейнерну компоненту внутри этой компоненты рендерит призентационую компоненту и внутрь призентационой компоненты в качестве пропсов передает своиства которие сидят в функции f1, f2

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);//вызиваем функцию connect, а она вернула нам другую функцию и мы вызиваем потом ту функцию которую вернул предыдущий вызов


export default DialogsContainer;