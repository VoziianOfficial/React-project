import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <div>
          <img src="https://c4.wallpaperflare.com/wallpaper/267/461/308/the-long-dark-wallpaper-preview.jpg" />
        </div>
        <div className={s.description}>Ava + description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
