import React from 'react';
import { updateNewPostTextActionCreator, updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => {//во время конектинга функция connect передаст в функцию mapStateToProps state
  return {//возврощает обьект, настраивает свойства з state
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {//во время конектинга функция connect передаст в функцию mapDispatchToProps dispatch
  return {//возвращает callbacks functions которие мы будем отправлять в призентационую компоненту
    updateNewMessageBody: (body) => {
      dispatch( updateNewMessageBodyCreator(body) );//функция sendMessageCreator возвращает type action который мы потом dispatch
    },
    sendMessage: () => {
      dispatch( sendMessageCreator() );
    }
  }
}



// создоет контейнерну компоненту внутри этой компоненты рендерит призентационую компоненту и внутрь призентационой компоненты в качестве пропсов передает своиства которие сидят в функции f1, f2
//вызиваем функцию connect, а она вернула нам другую функцию и мы вызиваем потом ту функцию которую вернул предыдущий вызов

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs); //вторим визивается функция которую вернул первий компосе