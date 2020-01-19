const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 2,
   isFetching: true,
   followingInProgress: []
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
      return { ...state, users: [ ...action.users ] }// беру масив users в state которий там записан и склеиваю его тоисть добавляю к нему масив users з сервера которий мы передали в actionCreator (перезаписую всех пользователей в state)
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }// беру масив users в state которий там записан и склеиваю его тоисть добавляю к нему масив users з сервера которий мы передали в actionCreator (перезаписую всех пользователей в state)
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }// беру масив users в state которий там записан и склеиваю его тоисть добавляю к нему масив users з сервера которий мы передали в actionCreator (перезаписую всех пользователей в state)
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return { 
        ...state, 
        followingInProgress: action.isFetching 
          ? [...state.followingInProgress, action.userId] 
          : state.followingInProgress.filter(id => id != action.userId)
      }
    }
    

    
    default: 
      return state;
  }
 

}



//actionCreator
export const follow = (userId) => ({ type: FOLLOW, userId } )
export const unfollow = (userId) => ( { type: UNFOLLOW, userId } )
export const setUsers = (users) => ( { type: SET_USERS, users } )//берем пользователей з сервака и засетаем в state
export const setCurrentPage = (currentPage) => ( { type: SET_CURRENT_PAGE, currentPage } )
export const setTotalUsersCount = (totalUsersCount) => ( { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } )
export const toggleIsFetching = (isFetching) => ( { type: TOGGLE_IS_FETCHING, isFetching } )
export const toggleFollowingProgress = (isFetching, userId) => ( { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } )

export default usersReducer;