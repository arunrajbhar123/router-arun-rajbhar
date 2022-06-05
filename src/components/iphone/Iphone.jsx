import React from "react";
import styles from "./styles.module.css";
const Iphone = () => {
  return (
    <div className={styles.main}>
      <div className={styles.border}>
        <div className={styles.text}>
          <h1>A Guided Tour of</h1>
          <h1>
            iPhone 13 & <br />
            iPhone 13 Pro
          </h1>
          <button>Watch the film</button>
        </div>
        <img
          src="https://www.apple.com/v/iphone/home/bh/images/overview/subhero/guided_tour__c40f88on9o8y_small_2x.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Iphone;
