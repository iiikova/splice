import React, { useState } from "react";
import styles from "./Hero.module.scss";

function Hero() {
  const [hide, setHide] = useState(true);

  const handleHide = (e) => {
    setHide((e) => !e);
    setTimeout(() => {
      setHide((e) => !e);
    }, 2000);
  };

  return (
    <div className={styles.hero_bg}>
      {hide ? (
        <div className={styles.advisor}>
          <p>
            🤘 Get free Sounds when you start a trial & 4 months off a Sounds+
            annual plan.
          </p>
          <a href="#" onClick={handleHide}>
            Click here
          </a>
        </div>
      ) : null}

      <div className={styles.container}>
        <div className={styles.hero}>
          <div>
            <h1>Step into the producer’s playground</h1>
            <p>
              Explore the world’s best sample library and an unmatched
              marketplace of plugins and DAWs.
            </p>
            <button>Try free</button>
          </div>
        </div>
      </div>
      <div className={styles.learn_more}>
        <p>Learn more</p>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
    </div>
  );
}

export default Hero;
