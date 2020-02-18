import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW_POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [ 
    {id: 1, message: 'Hi, how are you ?', likesCount: 12}, 
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 12}, 
    {id: 4, message: 'Dada', likesCount: 11}
  ],
  newPostText: 'it-kamasutra',
  profile: null,
  status: ""
};


const profileReducer = (state = initialState, action) => {//state = initialState - если state не передан в параметры то пусть по умолчанию state равно initialState

  switch( action.type ) {

    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };//створюєм обєкт нового поста по структурі яка вже створена в state

      return {
        ...state,
        posts: [...state.posts, newPost],//добавляєм цей обєкт нового поста в змінну state обєкт profilePage і в масив posts
        newPostText: ''
      };//поверхносное копирование
    }

    case UPDATE_NEW_POST_TEXT: {

      return {
        ...state,
        newPostText: action.text
      };//поверхносное копирование

    }

    case SET_STATUS: {

      return {
        ...state,
        status: action.status
      };//поверхносное копирование

    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }

    default: 
      return state;
  }
 

}



//actionCreator
export const addPostActionCreator = () => ({ type: ADD_POST } )

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile } )
export const setStatus = (status) => ({ type: SET_STATUS, status } )

export const getUserProfile = (userId) => (dispatch) => { //thunk
  usersAPI.getProfile(userId).then(response => {
    dispatch ( setUserProfile(response.data) );
  });
}

export const getStatus = (userId) => (dispatch) => { //thunk
  profileAPI.getStatus(userId)
  .then(response => {
    dispatch ( setStatus(response.data) );
  });
}

export const updateStatus = (status) => (dispatch) => { //thunk
  profileAPI.updateStatus(status)
  .then(response => {
    if (response.data.resultCode === 0) {// если сервак подтвердил
      dispatch ( setStatus(status) ); //отображаем статус
    }
    
  });
}

export const updateNewPostTextActionCreator = (text) => {//actionCreator с параметром text
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text
  }
}


export default profileReducer;