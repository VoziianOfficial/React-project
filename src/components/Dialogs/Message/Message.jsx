import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={s.messageContainer}>
      {props.message}
      <textarea name="" id=""></textarea>
    </div>
  );
};

export default Message;
