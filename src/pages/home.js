import React from "react";
import styles from "../styles/home.module.css";
import Profileside from "./profileside";
import Postside from "./postside";
import Rightside from "./rightside";
import PrivateRoute from ".";

const Home = () => {
  return (
    <PrivateRoute>
      <div className={styles.base}>
        <div
          className={styles.backfade}
          style={{ top: "-18%", right: "0" }}
        ></div>
        <div
          className={styles.backfade}
          style={{ top: "36%", left: "-8rem" }}
        ></div>
        <div className={styles.home}>
          <Profileside />
          <Postside />
          <Rightside />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Home;
