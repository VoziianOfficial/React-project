import React, { useState } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { useParams, useNavigate } from "react-router-dom";
import state from "../../redux/state";

const Dialogs = () => {
  const [dialogs, setDialogs] = useState(state.dialogs); // Загружаем список диалогов
  const [newMessage, setNewMessage] = useState(""); // Состояние для нового сообщения
  const { id } = useParams(); // Получаем ID из параметров маршрута
  const navigate = useNavigate();

  // Найти текущий диалог по ID из URL
  const currentDialog = dialogs.find((dialog) => dialog.id === Number(id));

  // Если ID нет, показываем общий список диалогов
  const dialogsElement = dialogs.map((dialog) => {
    const lastMessage =
      dialog.messages.length > 0
        ? dialog.messages[dialog.messages.length - 1].text
        : "Нет сообщений";

    return (
      <DialogItem
        key={dialog.id}
        id={dialog.id}
        name={dialog.name}
        lastMessage={lastMessage}
      />
    );
  });

  // Если выбран конкретный диалог, отображаем его сообщения
  const messagesElement = currentDialog
    ? currentDialog.messages.map((message) => (
        <Message key={message.id} message={message.text} />
      ))
    : null;

  // Функция отправки нового сообщения
  const sendMessage = () => {
    if (newMessage.trim() && currentDialog) {
      const newMsg = {
        id: currentDialog.messages.length + 1,
        text: newMessage,
        sender: "me",
      };

      // Обновляем диалог с новым сообщением
      const updatedDialogs = dialogs.map((dialog) =>
        dialog.id === currentDialog.id
          ? { ...dialog, messages: [...dialog.messages, newMsg] }
          : dialog
      );

      setDialogs(updatedDialogs);
      setNewMessage(""); // Очищаем поле ввода
    }
  };

  // Возвращение к общему списку диалогов
  const goBackToDialogsList = () => navigate("/dialogs");

  return (
    <div className={s.dialogs}>
      {/* Если выбран конкретный диалог, показываем сообщения и поле ввода */}
      {currentDialog ? (
        <>
          <button onClick={goBackToDialogsList} className={s.backButton}>
            Назад к списку диалогов
          </button>
          <div className={s.messagesList}>
            <h3>Диалог с {currentDialog.name}</h3>
            {messagesElement}
            <div className={s.messageInputContainer}>
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Введите сообщение..."
                className={s.textarea}
              ></textarea>
              <button onClick={sendMessage} className={s.sendButton}>
                Отправить
              </button>
            </div>
          </div>
        </>
      ) : (
        // Общий список диалогов, если нет выбранного диалога
        <div className={s.dialogsList}>
          <h2>Dialogs</h2>
          {dialogsElement}
        </div>
      )}
    </div>
  );
};

export default Dialogs;
