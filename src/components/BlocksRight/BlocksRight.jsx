import React from "react";
import styles from "./BlocksRight.module.scss";

function BlocksRight({ span, h2, p, button, img }) {
  return (
    <div className="container">
      <div className={styles.blocks}>
        <div className={styles.image}>
          <img src={img} alt="block" />
        </div>
        <div className={styles.text}>
          <span>{span}</span>
          <h2>{h2}</h2>
          <p>{p}</p>
          {button ? <button>{button}</button> : null}
        </div>
      </div>
    </div>
  );
}

export default BlocksRight;
