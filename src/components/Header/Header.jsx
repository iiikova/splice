import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.navbar}>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul>
              <li>Sounds</li>
              <li>Skills</li>
              <li>Plugins</li>
              <li>Studio</li>
              <li>Community</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </nav>
          <div className={styles.hamburger}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        <div className={styles.buttons}>
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
      {isOpen ? (
        <div className={styles.hamburger_menu}>
          <ul>
            <li>Sounds</li>
            <li>Skills</li>
            <li>Plugins</li>
            <li>Studio</li>
            <li>Community</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
