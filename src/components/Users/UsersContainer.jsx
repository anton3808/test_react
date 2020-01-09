import React from 'react';
import {connect} from "react-redux";
import { toggleFetchingAC, setUsersTotalCountAC, setCurrentPageAC, followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';
import * as axios from 'axios'; //библиотека для запросові
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component{

  constructor (props) {//вывивается только один раз коград создается обэкт класса
    super(props);
  }

  componentDidMount(){ //вмонтирование (только один раз)
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }


  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return <>
          { this.props.isFetching ? 
            <Preloader /> : null }
          <Users totalUsersCount = { this.props.totalUsersCount }
                  pageSize = { this.props.pageSize }
                  currentPage = { this.props.currentPage }
                  onPageChanged = { this.onPageChanged }
                  users = { this.props.users }
                  unfollow = { this.props.unfollow }
                  follow = { this.props.follow }
                                    
      /> 
    </>
  }
  
}

let mapStateToProps = (state) => {//с помощью этой функции прийдет в функциональную компоненту Users в Props будет сидеть свойство users значением которого будут пользователи из state
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
    },

    toggleIsFetching: (isFetching) => {
      dispatch( toggleFetchingAC(isFetching) );
    }

    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer) ;