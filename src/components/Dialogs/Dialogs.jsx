import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import { useParams } from "react-router-dom";
import Message from "./Message/Message";

const Dialogs = () => {
  const { id } = useParams(); // Получаем ID из параметров маршрута

  let dialogsData = [
    { id: 1, name: "Leys" },
    { id: 2, name: "Izym" },
    { id: 3, name: "Oyshen" },
    { id: 4, name: "Byblik" },
  ];

  let messagesData = [
    { id: 1, message: "Hi bro" },
    { id: 2, message: "Hey man, how are you?" },
    { id: 3, message: "Whats up" },
    { id: 4, message: "Yo man" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsList}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>

      <div className={s.messagesList}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
