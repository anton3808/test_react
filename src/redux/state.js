import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



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
    },
    sidebarPage: {

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

    this._state.profilePage = profileReducer( this._state.profilePage, action);//profilePage
    this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);//dialogPage
    this._state.sidebarPage = sidebarReducer( this._state.sidebarPage, action);//sidebarPage


    this._callSubscriber(this._state);

  }

}



export default store;
window.store = store;