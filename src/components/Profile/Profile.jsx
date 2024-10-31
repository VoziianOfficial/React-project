import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addPost } from "../../redux/state";

const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts addPost={addPost} />
    </div>
  );
};

export default Profile;
