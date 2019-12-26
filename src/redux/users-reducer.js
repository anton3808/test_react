const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
   users: [ 
  //   {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
  //     followed: false, fullName: 'Dmitriy', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} }, 
  //   {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg', 
  //     followed: true, adnin: 'Sasha', status: 'I am a boss too', location: {city: 'Woskow', country: 'Russia'}},
  //   {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg', 
  //     followed: false, fullName: 'Dmitriy', status: 'I am a boss too', location: {city: 'Kiew', country: 'Ukraine'}}
  ]
};


const usersReducer = (state = initialState, action) => {//state = initialState - если state не передан в параметры то пусть по умолчанию state равно initialState

  switch( action.type ) {

    case FOLLOW:
      return {
        ...state, 
        users: state.users.map( u => {//копирование только масива
          if (u.id === action.userId) { //если id пользователя в масиве будет равен userId которий пришол к нам при клике на кнопку
            return {...u, followed: true}//чтобы изменить данные в обэкте эго сначала мы копируем и потом изменяем 
          }
          return u;//если u не изменилито возвращаем его 
        })//map возвращает новый масив на основе старого масива (мапим кожний елемент масива u) тоисть идентично до записи [...state.users]
      }



    case UNFOLLOW:
      return {
        ...state, 
        users: state.users.map( u => {//копирование только масива
          if (u.id === action.userId) { //если id пользователя в масиве будет равен userId которий пришол к нам при клике на кнопку
            return {...u, followed: false}//чтобы изменить данные в обэкте эго сначала мы копируем и потом изменяем 
          }
          return u;//если u не изменилито возвращаем его 
        })//map возвращает новый масив на основе старого масива (мапим кожний елемент масива u) тоисть идентично до записи [...state.users]
      }

    case SET_USERS: {
      return { ...state, users: [ ...state.users, ...action.users ] }// беру масив users в state которий там записан и склеиваю его тоисть добавляю к нему масив users з сервера которий мы передали в actionCreator (перезаписую всех пользователей в state)
    }
    default: 
      return state;
  }
 

}



//actionCreator
export const followAC = (userId) => ({ type: FOLLOW, userId } )
export const unfollowAC = (userId) => ( { type: UNFOLLOW, userId } )
export const setUsersAC = (users) => ( { type: SET_USERS, users } )//берем пользователей з сервака и засетаем в state


export default usersReducer;