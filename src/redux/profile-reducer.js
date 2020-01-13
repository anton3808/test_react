const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW_POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [ 
    {id: 1, message: 'Hi, how are you ?', likesCount: 12}, 
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 12}, 
    {id: 4, message: 'Dada', likesCount: 11}
  ],
  newPostText: 'it-kamasutra',
  profile: null
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

export const updateNewPostTextActionCreator = (text) => {//actionCreator с параметром text
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text
  }
}


export default profileReducer;