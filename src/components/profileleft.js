import React from "react";
import Searchbar from "./searchbar";
import Profileinfo from "./profileinfo";
import styles from "../styles/profileleft.module.css";
import Findfriend from "./findfriend";

const Profileleft = () => {
  return (
    <div className={styles.profileleft}>
      <Searchbar />
      <Profileinfo />
      <Findfriend />
    </div>
  );
};

export default Profileleft;
