import React from 'react'; 
import userPhoto from '../../assets/images/user.png';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'; //библиотека для запросові
import { usersAPI, unFollow, follow } from '../../api/api';

let Users = (props) => {

  //взнаєм к-сть сторінок
  let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);//округляет в большую сторону 
  let pages = [];
  for (let i=1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>

      {pages.map( p => {
        return <span className={ props.currentPage === p && styles.selectedPage } 
                      onClick={ () => { 
                        props.onPageChanged(p) 
                      }}>{p}</span>
      })}

    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
             <NavLink to={'/profile/' + u.id}> {/*сылка */}
              <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto} />
            </NavLink>
          </div>

          <div>
            {u.followed
              ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                  props.unfollow(u.id); //disabled button
              }} >Unfollow</button>
              : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { //переверяем ли клопка disabled
                  // some() - вибирает тот которий есть 
                  props.follow(u.id); //disabled button
              }} >Follow</button>}  {/* при нажатии на кнопку визивается анонимная функция которая визивает колбек функцию */}
          </div>
        </span>

        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}


export default Users;