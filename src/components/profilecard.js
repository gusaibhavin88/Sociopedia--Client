import React from "react";
import styles from "../styles/profilecard.module.css";
import Image from "next/image";
import { cover, profile } from "../../public/Images";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Profilecard = ({ location }) => {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  return (
    <div className={styles.profilecard}>
      {user && (
        <>
          <div className={styles.proimages}>
            <Image
              src={user?.coverUrl ? user.coverUrl : cover}
              alt="Image not found"
              width={350}
              height={300}
              layout="responsive"
              className={styles.coverimg}
              style={{ cursor: "pointer" }}
            ></Image>

            <Image
              src={user?.profileUrl ? user.profileUrl : profile}
              alt="Image not found"
              className={styles.proimg}
              width={350}
              height={300}
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                position: "absolute",
                cursor: "pointer",
              }}
            ></Image>
          </div>
          <div className={styles.proinfo}>
            <h3>
              {user.firstname} {user.lastname}
            </h3>
            <h3>Write about your self</h3>
          </div>
          <div className={styles.follow}>
            <div className={styles.followersinfo}>
              <h3>{user.followers.length}</h3>
              <h3>followers</h3>
            </div>
            <div style={{ borderLeft: "1px solid var(--hrColor)" }}></div>
            <div className={styles.followersinfo}>
              <h3>{user.following.length}</h3>
              <h3>following</h3>
            </div>
          </div>
          <h3
            style={{
              color: "var(--orange)",
              wordSpacing: "2px",
              letterSpacing: "1.5px",
              display: location ? "none" : "flex",
              cursor: "pointer",
            }}
            onClick={() => router.push(`/profile/${user._id}`)}
          >
            My Profile
          </h3>
        </>
      )}
    </div>
  );
};

export default Profilecard;
