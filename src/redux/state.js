let renderEntireTree = () => {
  console.log("state");
}

let state = {
  profilePage: {
    posts: [ 
      {id: 1, message: 'Hi, how are you ?', likesCount: 12}, 
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 12}, 
      {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra'
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrew' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Viktor' },
      { id: 6, name: 'Valera' }
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your it-kamasutra?' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Yo' }
    ],
    newMessageText: 'it-kamasutra'
  }
  
  
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };//створюєм обєкт нового поста по структурі яка вже створена в state


  state.profilePage.posts.push(newPost);//добавляєм цей обєкт нового поста в змінну state обєкт profilePage і в масив posts
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}





// export let addMessageText = () => {
//   let newMessage = {
//     id: 6,
//     message: state.dialogsPage.newMessageText
//   };//створюєм обєкт нового поста по структурі яка вже створена в state


//   state.dialogsPage.dialogsPage.push(newMessage);//добавляєм цей обєкт нового поста в змінну state обєкт profilePage і в масив posts
//   state.dialogsPage.newMessageText = '';
//   renderEntireTree(state);
// }
// export let updateNewMessageText = (newText) => {
//   state.dialogsPage.newMessageText = newText;
//   renderEntireTree(state);
// }


export const subscribe = (observer) => {
 renderEntireTree = observer;
}

export default state;