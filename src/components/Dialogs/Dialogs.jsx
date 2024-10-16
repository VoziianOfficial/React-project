import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <>
      <div className={s.dialogs}>
        <ul className={s.dialogsList}>
          <li className={s.dialogItem}>Lays</li>
          <li className={s.dialogItem}>Izym</li>
          <li className={s.dialogItem}>Oyshen</li>
          <li className={s.dialogItem}>Byblik</li>
        </ul>
        <ul className={s.messagesList}>
          <li className={s.messageItem}>Hi bro</li>
          <li className={s.messageItem}>How is your doing</li>
          <li className={s.messageItem}>Whats up </li>
        </ul>
      </div>
    </>
  );
};

export default Dialogs;
