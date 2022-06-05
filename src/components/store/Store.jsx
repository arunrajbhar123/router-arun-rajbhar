import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";

const Store = () => {
  const [data, setData] = useState([]);
  const [dataS, setDataS] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/store").then((res) => {
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8080/box").then((res) => {
      setDataS(res.data);
    });
  }, []);

  return (
    <div className={styles.main}>
      <h1>Store. The best way to buy the products you love.</h1>
      <div className={styles.flexing}>
        {data.map(({ id, img, name ,color}) => (
          <div key={id} className={styles.box}>
            <Box boxSize="sm" height="200px">
              <Image src={img} alt=" " />
              <Link to={`${name}`}  className={styles.Link}>
                {name}
              </Link>
            </Box>
          </div>
        ))}
      </div>

      <div className={styles.flexing_cart}>
        {dataS.map(({ id, img, name, span }) => (
          <div key={id}>
            <Box className={styles.cart}>
              <div className={styles.cart_img}>
                <Link to={`${name}`} className={styles.Link_ab}>
                  {name}
                </Link>
                <Image src={img} alt="" />
              </div>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
