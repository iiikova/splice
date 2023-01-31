import React from "react";
import styles from "./Footer.module.scss";
import fb from "../../assets/images/fb.png";

function Footer() {
  return (
    <div className="container">
      <div className={styles.footer}>
        <div className={styles.footer_list}>
          <ul>
            <h3>Skills</h3>
            <li>Features</li>
            <li>Catalog</li>
            <h3>Studio</h3>
            <li>Features</li>
            <li>About Splice Studio</li>
            <li>Managing Your Production Library</li>
            <li>Collaborating with Baewatch</li>
          </ul>
          <ul>
            <h3>Community</h3>
            <li>Ableton Live Projects</li>
            <li>FL Studio Projects</li>
            <li>Logic Pro X Projects</li>
            <li>Garageband Projects</li>
            <li>Remix Contests</li>
            <li>Tiesto's Secrets</li>
          </ul>
          <ul>
            <h3>Sounds</h3>
            <li>Features</li>
            <li>Catalog</li>
            <li>How Jauz Uses Sounds</li>
            <li>deadmau5's Chimaera</li>
            <li>KSHMR Vol. 2</li>
          </ul>
          <ul>
            <h3>Plugins</h3>
            <li>Top VSTs</li>
            <li>Serum</li>
            <li>Rent to Own</li>
            <li>Free Plugins</li>
            <li>Top Manufacturers</li>
          </ul>
          <ul>
            <h3>Beatmaker</h3>
            <li>Create Your Own Beat</li>
            <li>Wakapella</li>
            <li>Just Blaze</li>
          </ul>
          <ul>
            <h3>Blog</h3>
            <li>Latest Posts</li>
            <li>Using Soundtoys Decapitator</li>
            <li>Mastering 101</li>
            <li>Producing Future Beats</li>
            <li>Belonging @ Splice</li>
          </ul>
        </div>
        <div className={styles.footer_nav}>
          <p>© 2022 Splice.com All Rights Reserved</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Jobs</p>
          <p>Contact</p>
          <p>Help</p>
          <a href="#">
            <img src={fb} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
