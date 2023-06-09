import Posts from "@/components/posts";
import Sharepost from "@/components/sharepost";
import React from "react";
import styles from "../styles/postside.module.css";

const Postside = ({ location }) => {
  return (
    <div className={styles.postside}>
      <Sharepost />
      <Posts location={location} />
    </div>
  );
};

export default Postside;
