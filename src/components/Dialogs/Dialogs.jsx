import React, { useState } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { useParams } from "react-router-dom";
import state from "../../redux/state";

const Dialogs = () => {
  const [dialogs, setDialogs] = useState(state.dialogs); // Используйте state.dialogs
  const [messages, setMessages] = useState(state.messages); // Используйте state.messages

  const { id } = useParams(); // Получаем ID из параметров маршрута

  let dialogsElement = dialogs.map(
    (
      dialog // Используйте dialogs вместо dialogsData
    ) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  );

  let messagesElement = messages.map(
    (
      message // Используйте messages вместо messagesData
    ) => <Message key={message.id} id={message.id} message={message.message} />
  );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsList}>{dialogsElement}</div>
      <div className={s.messagesList}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
