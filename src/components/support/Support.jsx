import React from "react";
import { Text } from "@chakra-ui/react";
import styles from "./styles.module.css"
const Support = () => {
  return (
    <div className={styles.main}>
      <div>
        <Text className={styles.Text}>Apple Support</Text>
        <img
          src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/psp-hero-banner-homepage-welcome.image.large_2x.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Support;
