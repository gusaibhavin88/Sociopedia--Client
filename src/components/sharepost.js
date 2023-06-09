import React, { useState } from "react";
import styles from "../styles/sharepost.module.css";
import Image from "next/image";
import { profile } from "../../public/Images";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "@/redux/API/uploadrequest";
import { uploadPost } from "@/redux/API/postrequest";
import { getAllPosts, getPostUrl } from "@/redux/action/postaction";
import { attachment } from "../../public/Images";

const Sharepost = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const [postImage, setpostImage] = useState("");
  const [inputBar, setinputBar] = useState("");
  const imageRef = useRef();

  const [postData, setpostData] = useState({
    desc: "",
    userId: "",
    imageName: "",
  });

  const handleChange = (e) => {
    setpostData({
      ...postData,
      [e.target.name]: e.target.value,
      userId: user._id,
    });
    setinputBar(e.target.value);
  };

  const onImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = await e.target.files[0];
      if (img) {
        setpostImage(img);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (postImage && inputBar) {
      const imageFile = new FormData();
      const fileName = `${Date.now()}_${user._id}`;
      imageFile.append("name", fileName);
      imageFile.append("image", postImage);
      postData.imageName = fileName;
      console.log(postData); //  console.log([...imageFile.entries()]);
      try {
        uploadImage(user._id, imageFile);
        uploadPost(postData);
        setinputBar("");
        const inputBar = document.getElementById("inputbar");
        inputBar.value = "";
        setpostImage("");
        setTimeout(() => {
          dispatch(getAllPosts(user._id));
          dispatch(getPostUrl());
        }, 4000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.sharepost}>
      {user && (
        <>
          <div className={styles.inputbar}>
            <Image
              src={user.profileUrl ? user.profileUrl : profile}
              width={100}
              height={100}
              alt="Image not found"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "1rem",
                cursor: "pointer",
              }}
            ></Image>{" "}
            <input
              type="text"
              placeholder="What's happening"
              name="desc"
              id="inputbar"
              onChange={handleChange}
            />
            <Image
              alt="Image not found"
              src={attachment}
              style={postImage ? { display: "flex" } : { display: "none" }}
            />
          </div>
          <div className={styles.sharebtns}>
            <div
              className={styles.option}
              style={{ color: "var(--photo)", alignItems: "center" }}
              onClick={() => imageRef.current.click()}
            >
              <input
                type="file"
                ref={imageRef}
                style={{ display: "none" }}
                onChange={onImageChange}
                name="attach"
                accept="image/*"
              />
              <UilScenery
                className={styles.icon}
                style={{
                  cursor: "pointer",
                }}
              />
              Image
            </div>
            <div className={styles.option} style={{ color: "var(--video)" }}>
              <UilPlayCircle className={styles.icon} />
              Video
            </div>
            <div className={styles.option} style={{ color: "var(--location)" }}>
              <UilLocationPoint className={styles.icon} />
              Location
            </div>
            <div className={styles.option} style={{ color: "var(--schedule)" }}>
              <UilSchedule className={styles.icon} />
              Schedule
            </div>
            <button
              onClick={handleSubmit}
              disabled={postImage && inputBar ? false : true}
              style={{
                background: postImage && inputBar ? "" : "var(--gray)",
              }}
            >
              Share
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sharepost;
