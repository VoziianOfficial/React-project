import React, { useEffect, useState } from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";
import state, { addPost as addPostToState } from "../../../redux/state";

const MyPosts = () => {
  const [posts, setPost] = useState(state.posts);
  const newPostElement = React.createRef();

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts) {
      setPost(savedPosts);
    }
  }, []);

  const addPost = () => {
    const text = newPostElement.current.value;
    if (text.trim()) {
      addPostToState(text);
      setPost([...state.posts]);

      newPostElement.current.value = "";
    }
  };

  const postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <>
      <div className={s.postsWrapper}>
        <h3 className={s.myPostsTitle}> My Posts </h3>
        <div>
          <div>
            <textarea
              ref={newPostElement}
              placeholder="..."
              className={s.textareaInput}
            ></textarea>
          </div>
          <div className={s.postsBtns}>
            <button onClick={addPost} className={s.addBtn}>
              Add Post
            </button>
            <button className={s.removeBtn}>Remove</button>
          </div>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    </>
  );
};

export default MyPosts;
