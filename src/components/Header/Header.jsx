import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <img
          src="https://seeklogo.com/images/B/black-dog-circle-logo-7032FEC424-seeklogo.com.png"
          width={60}
        />
      </header>
    </>
  );
};

export default Header;
