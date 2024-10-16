import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.linkWrapper}>
        <NavLink to="/profile" className={s.item}>
          Profile
        </NavLink>
      </div>
      <div className={s.linkWrapper}>
        <NavLink to="/dialogs" className={s.item}>
          Messages
        </NavLink>
      </div>
      <div className={s.linkWrapper}>
        <NavLink to="/users" className={s.item}>
          Users
        </NavLink>
      </div>

      <div className={s.linkWrapper}>
        <NavLink className={s.item}>News</NavLink>
      </div>
      <div className={s.linkWrapper}>
        <NavLink className={s.item}>Music</NavLink>
      </div>
      <div className={s.linkWrapper}>
        <NavLink className={s.item}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
