// src/redux/state.js

const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];

const state = {
  dialogs: [
    {
      id: 1,
      name: "Lays",
      messages: [
        { id: 1, text: "Hi Alice!", sender: "me" },
        { id: 2, text: "Hello!", sender: "Alice" },
      ],
    },
    {
      id: 2,
      name: "Ocean",
      messages: [
        { id: 1, text: "Hey Bob!", sender: "me" },
        { id: 2, text: "What's up?", sender: "Bob" },
      ],
    },
    {
      id: 3,
      name: "Izym",
      messages: [
        { id: 1, text: "Hey Bob!", sender: "me" },
        { id: 2, text: "What's up?", sender: "Bob" },
      ],
    },
    {
      id: 4,
      name: "Kayzer",
      messages: [
        { id: 1, text: "Hey Bob!", sender: "me" },
        { id: 2, text: "What's up?", sender: "Bob" },
      ],
    },
  ],
  posts: savedPosts,
};

// Функция для добавления поста
export const addPost = (postMessage) => {
  const newPost = {
    id: state.posts.length + 1,
    message: postMessage,
    likesCount: 0,
  };
  state.posts.push(newPost);
  localStorage.setItem("posts", JSON.stringify(state.posts));
};

export default state;
