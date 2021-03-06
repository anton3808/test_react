import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
  let postsElements = props.posts.map( p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();//створює силку на елемент з jsx(просто силка яка нікуди не веде)

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
          {/* привязуєм створену силку до елемента */}
        </div>
        <div>
          <button onClick={ onAddPost }>Add post</button>
          {/* addPost - ми просто передаєм функцію, а addPost() - визиваєм функцію */}
        </div>
      </div>

      <div className={s.posts}>
        { postsElements  }
      </div>
    </div>

  );

}





export default MyPosts;