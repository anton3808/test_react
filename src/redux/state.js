const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW_POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
  _state: {
    profilePage: {
      posts: [ 
        {id: 1, message: 'Hi, how are you ?', likesCount: 12}, 
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 12}, 
        {id: 4, message: 'Dada', likesCount: 11}
      ],
      newPostText: 'it-kamasutra'
    },
  
    dialogsPage: {
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
    }  
  },

  _callSubscriber() {
    console.log("state");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {//action - обэкт который описывет кокое действие совершить
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };//створюєм обєкт нового поста по структурі яка вже створена в state
    
    
      this._state.profilePage.posts.push(newPost);//добавляєм цей обєкт нового поста в змінну state обєкт profilePage і в масив posts
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if( action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    } else if( action.type === UPDATE_NEW_MESSAGE_BODY ) {
      this._state.dialogsPage.newMessageBody = action.body;
      debugger;
      this._callSubscriber(this._state);
    } else if ( action.type === SEND_MESSAGE ){
      let body = this._state.dialogsPage.newMessageBody;
      debugger;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push ( {id: 6, message: body} );
      this._callSubscriber(this._state);
    }

  }

}



//actionCreator
export const addPostActionCreator = () => ({ type: ADD_POST } )

export const updateNewPostTextActionCreator = (text) => {//actionCreator с параметром text
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text
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









// export let addMessageText = () => {
//   let newMessage = {
//     id: 6,
//     message: state.dialogsPage.newMessageText
//   };//створюєм обєкт нового поста по структурі яка вже створена в state


//   state.dialogsPage.dialogsPage.push(newMessage);//добавляєм цей обєкт нового поста в змінну state обєкт profilePage і в масив posts
//   state.dialogsPage.newMessageText = '';
//   renderEntireTree(state);
// }
// export let updateNewMessageText = (newText) => {
//   state.dialogsPage.newMessageText = newText;
//   renderEntireTree(state);
// }




export default store;
window.store = store;