import React from "react";
import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={s.nav}>
      <nav>
        <div>
          <a className={`${s.item} ${s.active}`} href="">
            Profile
          </a>
        </div>
        <div>
          <a className={s.item} href="">
            Message
          </a>
        </div>
        <div>
          <a className={s.item} href="">
            News
          </a>
        </div>
        <div>
          <a className={s.item} href="">
            Music
          </a>
        </div>
        <div>
          <a className={s.item} href="">
            Settings
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
