import React from "react";
import styles from "./BlocksLeft.module.scss";

function BlocksLeft({ span, h2, p, button, img }) {
  return (
    <div className="container">
      <div className={styles.blocks}>
        <div className={styles.text}>
          <span>{span}</span>
          <h2>{h2}</h2>
          <p>{p}</p>
          <button>{button}</button>
        </div>
        <div className={styles.image}>
          <img src={img} alt="block" />
        </div>
      </div>
    </div>
  );
}

export default BlocksLeft;
