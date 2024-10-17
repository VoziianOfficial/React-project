import React from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = () => {
  return (
    <>
      <div className={s.postsWrapper}>
        <h3 className={s.myPostsTitle}> My Posts </h3>
        <div>
          <div>
            <textarea placeholder="..." className={s.textareaInput}></textarea>
          </div>
          <div className={s.postsBtns}>
            <button className={s.addBtn}>Add Post</button>
            <button className={s.removeBtn}>Remove</button>
          </div>
        </div>
        <div className="s.posts">
          <Post message="Hi, how are you?" likeCount={5} />
          <Post message="It's my first post" likeCount={11} />
        </div>
      </div>
    </>
  );
};

export default MyPosts;
