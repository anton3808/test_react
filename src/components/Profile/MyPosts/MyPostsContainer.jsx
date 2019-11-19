import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';




const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch( addPostActionCreator() );//диспатчим обэкт
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator( text );//записываем actionCreator
    props.store.dispatch( action );//диспатчим обэкт
  }

  return (

    <MyPosts updateNewPostText={ onPostChange } addPost={ addPost } posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />

  );
}





export default MyPostsContainer;