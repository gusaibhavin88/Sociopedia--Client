import React, { useState } from "react";
import styles from "../styles/profileinfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "@/redux/action/authaction";
import Profilemodel from "./profilemodel";
import { useRouter } from "next/router";

const Profileinfo = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [profileform, setprofileform] = useState(false);
  const user = useSelector((state) => state.auth.user);

  //Logutt
  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logOutUser());
  };

  return (
    <div className={styles.profileinfo}>
      {user && (
        <>
          <div className={styles.info}>
            <h1>Profile Info</h1>
            <FontAwesomeIcon
              icon={faPenToSquare}
              size="2x"
              onClick={() => setprofileform(true)}
            />
            <Profilemodel
              profileform={profileform}
              setprofileform={setprofileform}
            />
          </div>
          <div className={styles.infodata}>
            <h2>
              Status &nbsp; &nbsp; :{" "}
              <span style={{ fontWeight: "100", color: "var(--gray)" }}>
                {user.relationship
                  ? user.relationship
                  : "Add Relationship Status"}
              </span>{" "}
            </h2>
            <h2>
              Living at :{" "}
              <span style={{ fontWeight: "100", color: "var(--gray)" }}>
                {user.livesin ? user.livesin : "Where are you living"}
              </span>{" "}
            </h2>
            <h2>
              Work at &nbsp; :{" "}
              <span style={{ fontWeight: "100", color: "var(--gray)" }}>
                {user.worksAt ? user.worksAt : "Where are you working"}
              </span>{" "}
            </h2>
            <h2>
              Country &nbsp;:{" "}
              <span style={{ fontWeight: "100", color: "var(--gray)" }}>
                {" "}
                {user.country ? user.country : "Write your country name"}
              </span>
            </h2>
          </div>
          <button onClick={logoutUser} style={{ cursor: "pointer" }}>
            Logout
          </button>
          {profileform && <Profilemodel />}
        </>
      )}
    </div>
  );
};

export default Profileinfo;
