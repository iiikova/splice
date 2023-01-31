import React from "react";
import styles from "./Creators.module.scss";

function Creators({ dataCreators }) {
  return (
    <div className="container">
      <h2 className={styles.creators_title}>What creators are saying about Splice</h2>
      <div className={styles.creators}>
        <div className={styles.creator}>
          <img src={dataCreators[0]} alt="creator" />
          <p>
            I can always find what I’m looking for on Splice, whether it’s the
            exact sound I want or just a bit of inspiration.
          </p>
          <span>Andrew Huang</span>
        </div>
        <div className={styles.creator}>
          <img src={dataCreators[1]} alt="creator" />
          <p>
            Finally a way to buy plugins that works. By paying a little at a
            time, producers can get legit access to the top VSTs.
          </p>
          <span>KSHMR</span>
        </div>
        <div className={styles.creator}>
          <img src={dataCreators[2]} alt="creator" />
          <p>
            It’s been fun to dive into Splice’s creator community and explore
            tools that support my own creative process.
          </p>
          <span>Kesha Lee</span>
        </div>
      </div>
    </div>
  );
}

export default Creators;
