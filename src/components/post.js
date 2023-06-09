import React, { useState } from "react";
import styles from "../styles/post.module.css";
import Image from "next/image";
import { profile } from "../../public/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faShare } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { likePost } from "@/redux/API/postrequest";
import { useSelector } from "react-redux";
library.add(faHeart);

const Post = ({ post, imageUrl, timeDifference }) => {
  const [postImage, setpostImage] = useState("");
  const user = useSelector((state) => state.auth.user);

  const handleLike = async (postId) => {
    const response = await likePost({
      postId: postId,
      profileId: user._id,
    });
    setpostImage(response.data.post);
  };

  return (
    <div className={styles.post} key={post._id}>
      {user && (
        <>
          <div className={styles.flexseting}>
            <Image
              src={post.profileUrl ? post.profileUrl : profile}
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
              <h2>
                {post.firstname} {post.lastname}
              </h2>
              <h2 style={{ color: "var(--gray )" }}>{timeDifference}</h2>
            </div>
          </div>
          <span
            style={{
              color: "var( --gray)",
              fontSize: "1.6rem",
              marginLeft: "",
            }}
          >
            {post.desc}
          </span>
          <Image
            alt="Image not found"
            src={imageUrl}
            className={styles.postpic}
            width={1000}
            height={100}
            style={{ cursor: "pointer" }}
          ></Image>

          <div className={styles.postbtn}>
            <div
              style={{ alignItems: "center", display: "flex", gap: "0.8rem" }}
            >
              <FontAwesomeIcon
                icon={faHeart}
                size="2x"
                color={
                  postImage
                    ? postImage.likes.includes(user._id)
                      ? "var(--location)"
                      : "var(--hrColor)"
                    : post.likes.includes(user._id)
                    ? "var(--location)"
                    : "var(--hrColor)"
                }
                onClick={() => handleLike(post._id)}
                style={{
                  cursor: "pointer",
                }}
              />
              <div
                className={styles.likecount}
                style={{ display: "flex", gap: "0.5rem", fontSize: "14px" }}
              >
                <span>
                  {" "}
                  {postImage ? postImage.likes.length : post.likes.length}
                </span>
                <span>Likes</span>
              </div>
            </div>

            <div
              style={{ alignItems: "center", display: "flex", gap: "0.8rem" }}
            >
              <FontAwesomeIcon
                icon={faMessage}
                size="2x"
                color="var(--location)"
              />
              <span style={{ fontSize: "1.5rem", color: "var( --gray)" }}>
                Comments
              </span>
            </div>
            <div
              style={{ alignItems: "center", display: "flex", gap: "0.8rem" }}
            >
              <FontAwesomeIcon
                icon={faShare}
                size="2x"
                color="var(--location)"
              />{" "}
              <span style={{ fontSize: "1.5rem", color: "var( --gray)" }}>
                Share
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
