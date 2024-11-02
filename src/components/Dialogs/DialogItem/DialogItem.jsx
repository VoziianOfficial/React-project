import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = ({ id, name, lastMessage }) => {
  const path = `/dialogs/${id}`;

  return (
    <div className={s.dialogs}>
      <NavLink className={s.dialogItem} to={path}>
        <div>
          <strong>{name}</strong>
          <p>{lastMessage}</p> {/* Последнее сообщение */}
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
