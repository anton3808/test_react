import React from 'react';
import * as axios from 'axios'; //библиотека для запросові
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component{

  componentDidMount () {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true, //настройки запроса ставим true
    })
      .then(response => { 
        if (response.data.resultCode === 0){//если пользователь залогинин
          let {userId, login, email} = response.data.data;
          this.props.setAuthUserData(userId, email, login);//выводим логин пользователя
        }
      });
  }

  render () {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({

  isAuth: state.auth.isAuth,
  login: state.auth.login,

});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);