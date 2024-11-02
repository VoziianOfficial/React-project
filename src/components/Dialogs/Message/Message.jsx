import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={s.messageContainer}>
      {props.message}
      {/* <textarea className={s.textarea} name="" id=""></textarea>
      <button>Send</button> */}
    </div>
  );
};

export default Message;
