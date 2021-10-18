
  let state = {
      profilePage: {
        posts: [
            {id: 1, message: 'How are you?', likesCount: 15},
            {id: 2, message: 'Its my first props', likesCount: 20},
          ]
      },
      dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Im fine'}
          ],
        dialogs: [
            {id: 1, name: 'Valya'},
            {id: 3, name: 'Basya'},
            {id: 2, name: 'Marta'},
            {id: 4, name: 'Andrii'},
            {id: 5, name: 'Haskel'}
            ]
      },
      friendsSidebar: [
        {id: 1, name: 'Basya'},
        {id: 3, name: 'Valya'},
        {id: 2, name: 'Andrii'}
      ]
     
  }

  export let addPost  = (postMessage) => {
    let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    
  }

  export default state