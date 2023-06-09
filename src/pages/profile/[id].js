import React from "react";
import styles from "../../styles/profile.module.css";
import Profileleft from "@/components/profileleft";
import Postprofile from "@/components/postprofile";
import Rightside from "../rightside";
import PrivateRoute from "..";
const Profile = () => {
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
        <div className={styles.profile}>
          <Profileleft />
          <Postprofile />
          <Rightside />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Profile;
