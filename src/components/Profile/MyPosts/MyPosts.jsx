import React from "react";
import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <>
      <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>

        <div>New post</div>
        <div className={s.postsItem}>
          <div className={s.item}>
            <img src="/src/img/dog.jpg" alt="dog" />
            post one
          </div>
          <div>post two</div>
          <div>post three</div>
        </div>
      </div>
    </>
  );
};

export default MyPosts;
