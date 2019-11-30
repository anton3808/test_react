const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ],

  newMessageBody: 'it-kamasutra'
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type){
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body//записиваем сразу в переменую  newMessageBody
      };//глубокое копирование

    case SEND_MESSAGE:
      //створюєм обєкт нового поста по структурі яка вже створена в state

      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: state.newMessageBody }]
      };//глубокое копирование
      

    default:
      return state;
  }

}



//actionCreator
export const sendMessageCreator = () => ({ type: SEND_MESSAGE } )

export const updateNewMessageBodyCreator = (body) => {//actionCreator с параметром text
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}

export default dialogsReducer;