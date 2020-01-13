import React from 'react';
import * as axios from 'axios'; //библиотека для запросові
import {connect} from "react-redux";
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';




class ProfileContainer extends React.Component{

  componentDidMount() {//метод жизненого цикла
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`) //запрос на сервак
    .then(response => {
      this.props.setUserProfile(response.data);
    });
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



export default connect(mapStateToProps, {setUserProfile} )(ProfileContainer);