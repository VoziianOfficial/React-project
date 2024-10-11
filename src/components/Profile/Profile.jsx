import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <>
      <div className={s.content}>
        <div>
          <img src="https://c4.wallpaperflare.com/wallpaper/267/461/308/the-long-dark-wallpaper-preview.jpg" />
        </div>
        <div>Ava + description</div>
        <MyPosts />
      </div>
    </>
  );
};

export default Profile;
