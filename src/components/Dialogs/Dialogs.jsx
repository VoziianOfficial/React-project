import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import { useParams } from "react-router-dom";
import Message from "./Message/Message";

const Dialogs = () => {
  const { id } = useParams(); // Получаем ID из параметров маршрута

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsList}>
        <DialogItem name="Leys" id="1" />
        <DialogItem name="Izym" id="2" />
        <DialogItem name="Oyshen" id="3" />
        <DialogItem name="Byblik" id="4" />
      </div>

      <div className={s.messagesList}>
        <Message message="Hi" />
        <Message message="Hey man" />
        <Message message="Whats up" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
