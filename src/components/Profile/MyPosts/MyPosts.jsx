import React, { useEffect, useState } from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";
import state, { addPost as addPostToState } from "../../../redux/state";

const MyPosts = () => {
  const [posts, setPost] = useState(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    return savedPosts || state.posts;
  });
  const newPostElement = React.createRef();

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = () => {
    const text = newPostElement.current.value;
    if (text.trim()) {
      addPostToState(text);
      const updatePosts = [...state.posts];
      setPost(updatePosts);
      newPostElement.current.value = ""; // очистка поля ввода
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addPost();
    }
  };

  // Изменим функцию удаления так, чтобы она принимала id поста
  const removePost = (id) => {
    setPost((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  // Обновим отображение каждого поста и добавим функцию удаления
  const postsElements = posts.map((post) => (
    <div key={post.id} className={s.post}>
      <Post message={post.message} likesCount={post.likesCount} />
      <button onClick={() => removePost(post.id)} className={s.removeBtn}>
        Remove
      </button>
    </div>
  ));

  return (
    <>
      <div className={s.postsWrapper}>
        <h3 className={s.myPostsTitle}>My Posts</h3>
        <div>
          <div>
            <textarea
              onKeyDown={handleKeyDown}
              ref={newPostElement}
              placeholder="..."
              className={s.textareaInput}
            ></textarea>
          </div>
          <div className={s.postsBtns}>
            <button onClick={addPost} className={s.addBtn}>
              Add Post
            </button>
          </div>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    </>
  );
};

export default MyPosts;
