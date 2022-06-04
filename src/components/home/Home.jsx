import React from "react";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.img}>
      <img src="asset/hero.png" alt="hero" />
      <div>
        <div className={styles.img2}>
          {" "}
          <img src="asset/title.png" alt="title" />
        </div>
      </div>
      <h1>Watch June 6 at 10:00 a.m. PT.</h1>
      <h1>View online at apple.com or on the Apple TV app.</h1>

      <div className={styles.icons}>
        Add to your calendar
        <span className="material-icons">arrow_circle_down</span>
        <div>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-solid fa-envelope"></i>
          <i class="fa-solid fa-link"></i>
        </div>
      </div>
      <div className={styles.iphone}>
        <div className={styles.textmanaged}>
          <h1>iPhone 13 Pro</h1>
          <span>Oh. So. Pro.</span>
          <br />
          <span className={styles.learn}>Learn more ></span>
        </div>
        <img src="asset/iphone.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
