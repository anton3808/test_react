import React from 'react';//импортируэм язык JSX
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          {/* Route використовується для роботи як силки, path - адрес сторінки, component - в цей параметр ми передаєм компоненту яка буде віддображатись */}
          {/* path="/dialogs" - це путь читається з корня то навіть якшо буде такий путь /dialogs/spam/dkkmd всеодно буде показуватись цей компонента */}
          {/* exact - говорить щоб компонента виводилась якщо путь в точ точ такий самий  */}

          {/* Route это компонента еоторая смотрит за url, если он совпадает то делает render */}
          <Route path="/dialogs" render={ () => <DialogsContainer /> } />
          <Route path="/profile" render={ () => <ProfileContainer /> } />
          <Route path="/users" render={ () => <UsersContainer /> } />
          <Route path="/news" render={ () => <News /> } />
          <Route path="/music" render={ () => <Music /> } />
          <Route path="/Settings" render={ () => <Settings /> } />
        </div>

      </div>
    
  );
}


export default App;
