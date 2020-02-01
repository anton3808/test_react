import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};


const authReducer = (state = initialState, action) => {//state = initialState - если state не передан в параметры то пусть по умолчанию state равно initialState

  switch( action.type ) {

    case SET_USER_DATA:
      return {
        ...state, //диструкторизакия
        ...action.data,
        isAuth: true
      }
    
    default: 
      return state;
  }
}



//actionCreator
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} } );

export const getAuthUserData = () => (dispatch) => { //thunk
  authAPI.me()
      .then(response => { 
        if (response.data.resultCode === 0){//если пользователь залогинин
          let {userId, login, email} = response.data.data;
          dispatch( setAuthUserData(userId, email, login) );//выводим логин пользователя
        }
      });
}

export default authReducer;