import React from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, how are you?", likesCount: 5 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ];
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
          <Post
            message={postsData[0].message}
            likeCount={postsData[0].likesCount}
          />
          <Post
            message={postsData[1].message}
            likeCount={postsData[1].likesCount}
          />
        </div>
      </div>
    </>
  );
};

export default MyPosts;
