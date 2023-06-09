import React, { useEffect } from "react";
import styles from "../styles/findfriend.module.css";
import Image from "next/image";
import { profile } from "../../public/Images";
import { useDispatch, useSelector } from "react-redux";
import { followUpdate } from "@/redux/API/userrequest";
import { getAllUsers, getProfile } from "@/redux/action/useraction";
import { getAllPosts, getPostUrl } from "@/redux/action/postaction";

const Findfriend = () => {
  const allUsers = useSelector((state) => state.auth.allusers);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleSubmit = (friendId) => async (e) => {
    const ids = {
      profileId: user._id,
      friendId: friendId,
    };
    await followUpdate(ids);
    dispatch(getProfile());
    setTimeout(() => {
      dispatch(getAllPosts(user._id));
      dispatch(getPostUrl());
    }, 3000);
  };

  return (
    <div className={styles.findfriend}>
      {user && (
        <>
          <h3>People you may know</h3>
          {allUsers &&
            allUsers.map((data) => {
              return (
                <div className={styles.friendinfo} key={data._id}>
                  <div className={styles.flexseting}>
                    <Image
                      src={data.profileUrl ? data.profileUrl : profile}
                      alt="Image not found"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                      width={100}
                      height={100}
                    ></Image>
                    <div className={styles.nameinfo}>
                      <h4>
                        {data.firstname} {data.lastname}
                      </h4>
                      <h4>{data.email}</h4>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit(data._id)}
                    style={
                      user.following.includes(data._id)
                        ? { background: "green" }
                        : { background: " var(--buttonBg)" }
                    }
                  >
                    {user.following.includes(data._id) ? "Following" : "Follow"}
                  </button>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default Findfriend;
