import React from 'react';
import {connect} from "react-redux";
import {getUsers, toggleFollowingProgress, setCurrentPage, follow, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component{

  constructor (props) {//вывивается только один раз коград создается обэкт класса
    super(props);
  }

  componentDidMount(){ //вмонтирование (только один раз)
    this.props.getUsers(this.props.currentPage, this.props.pageSize); // функция знаходиться в users-reducer
  }


  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
                  followingInProgress = {this.props.followingInProgress}
                                    
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}






//передаем вторим параметром обэкт функций AC, а react сам обернет их и продиспатчит(вместо mapDispatchToProps)
export default withAuthRedirect( connect(mapStateToProps, 
  { follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsers }
)(UsersContainer) ) ;