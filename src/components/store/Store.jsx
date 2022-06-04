import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

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
        {data.map(({ id, img, name }) => (
          <div key={id} className={styles.box}>
            <img src={img} alt="" />
            <Link to={`${name}`} className={styles.Link}>
              {name}
            </Link>
          </div>
        ))}
      </div>
      <h1>The latest. Take a look at what’s new, right now.</h1>

      <div className={styles.flexing}>
        {dataS.map(({ id, img, name,span }) => (
          <div key={id} className={styles.box}>
             <span>{span}</span><br />
            <Link to={`${name}`} className={styles.Link}>
              {name}
            </Link>
            <img src={img} alt="" />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
