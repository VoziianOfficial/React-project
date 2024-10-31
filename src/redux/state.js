// src/redux/state.js
const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];

const state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 5 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "It's new post", likesCount: 91 },
  ],
  dialogs: [
    { id: 1, name: "Leys" },
    { id: 2, name: "Izym" },
    { id: 3, name: "Oyshen" },
    { id: 4, name: "Byblik" },
  ],
  messages: [
    { id: 1, message: "Hi bro" },
    { id: 2, message: "Hey man, how are you?" },
    { id: 3, message: "Whats up" },
    { id: 4, message: "Yo man" },
  ],
  sidebar: [],
};

let nextPostId = state.posts.length + 1;

export const addPost = (postMessage) => {
  const newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.posts.push(newPost);

  localStorage.setItem("posts", JSON.stringify(state.posts));
};

export default state;
