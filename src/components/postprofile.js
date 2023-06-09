import React from "react";
import styles from "../styles/postprofile.module.css";
import Profilecard from "./profilecard";
import Postside from "@/pages/postside";

const Postprofile = () => {
  return (
    <div className={styles.postprofile}>
      <Profilecard location={true} />
      <Postside location={true} />
    </div>
  );
};

export default Postprofile;
