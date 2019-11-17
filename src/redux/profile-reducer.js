const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW_POST-TEXT';

let initialState = {
  posts: [ 
    {id: 1, message: 'Hi, how are you ?', likesCount: 12}, 
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 12}, 
    {id: 4, message: 'Dada', likesCount: 11}
  ],
  newPostText: 'it-kamasutra'
};


const profileReducer = (state = initialState, action) => {//state = initialState - если state не передан в параметры то пусть по умолчанию state равно initialState

  switch( action.type ) {
    case ADD_POST: 
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };//створюєм обєкт нового поста по структурі яка вже створена в state
    
      state.posts.push(newPost);//добавляєм цей обєкт нового поста в змінну state обєкт profilePage і в масив posts
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;

    default: 
      return state;
  }
 

}



//actionCreator
export const addPostActionCreator = () => ({ type: ADD_POST } )

export const updateNewPostTextActionCreator = (text) => {//actionCreator с параметром text
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text
  }
}


export default profileReducer;