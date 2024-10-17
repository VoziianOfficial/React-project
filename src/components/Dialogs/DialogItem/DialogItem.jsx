import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs" + props.id;

  return (
    <div className={s.dialogs}>
      <NavLink className={s.dialogItem} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};
export default DialogItem;
