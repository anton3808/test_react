import React from 'react';
import {connect} from "react-redux";
import Users from './Users';
import { setUsersTotalCountAC, setCurrentPageAC, followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {//с помощью этой функции прийдет в функциональную компоненту Users в Props будет сидеть свойство users значением которого будут пользователи из state
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {//передаем callbacks functions
  return {
    follow: (userId) => {
      dispatch( followAC(userId) );//диспатчим результат визова функции followAC тоисть action
    },

    unfollow: (userId) => {
      dispatch( unfollowAC(userId) );
    },

    setUsers: (users) => {
      dispatch( setUsersAC(users) );
    },

    setCurrentPage: (pageNumber) => {
      dispatch( setCurrentPageAC(pageNumber) );
    },

    setTotalUsersCount: (totalCount) => {
      dispatch( setUsersTotalCountAC(totalCount) );
    }

    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users) ;