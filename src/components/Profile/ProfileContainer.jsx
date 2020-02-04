import React from 'react';
import * as axios from 'axios'; //библиотека для запросові
import {connect} from "react-redux";
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';





class ProfileContainer extends React.Component{

  componentDidMount() {//метод жизненого цикла
    let userId = this.props.match.params.userId;//берем номер пользователя с урл адреса с помощю оброщения к параметрам строки
    if (!userId) { //если айди нету то захаркодим значение 2
      userId = 2;
    }

    this.props.getUserProfile(userId);
    
  }


  render() {//рендер
    return (
      <Profile {...this.props} profile={this.props.profile} />//передаем все props(розкукоживаем их используя спред оператор)
    )
  }

}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default compose(
  connect(mapStateToProps, {getUserProfile} ),
  withRouter,
  withAuthRedirect //HOC
)(ProfileContainer)

 //вернет новую компоненту отресует AuthRedirectComponent и в нее закинутся данние из урла
