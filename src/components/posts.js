import React, { useEffect } from "react";
import Post from "./post";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { getAllPosts, getPostUrl } from "@/redux/action/postaction";
import styles from "../styles/post.module.css";

const Posts = ({ location }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.postLoading);
  const post = useSelector((state) => state.auth.post);
  const posturl = useSelector((state) => state.auth.posturl);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getPostUrl());
  }, [dispatch]);

  const getImageUrl = (imageName) => {
    const matchingUrl =
      posturl && posturl.find((url) => url.includes(imageName));
    return matchingUrl || null;
  };

  const formatTimeDifference = (createdAt) => {
    // Convert the "createdAt" string to a Date object
    const createdDate = new Date(createdAt);
    // Get the current date
    const currentDate = new Date();
    // Calculate the time difference in milliseconds
    const timeDiff = currentDate - createdDate;

    if (timeDiff < 1000) {
      // If the duration is less than one second
      return "Just now";
    } else if (timeDiff < 1000 * 60) {
      // If the duration is less than one minute, calculate the seconds difference
      const secondsDiff = Math.floor(timeDiff / 1000);
      return `${secondsDiff} second${secondsDiff !== 1 ? "s" : ""} ago`;
    } else if (timeDiff < 1000 * 60 * 60) {
      // If the duration is less than one hour, calculate the minutes difference
      const minutesDiff = Math.floor(timeDiff / (1000 * 60));
      return `${minutesDiff} minute${minutesDiff !== 1 ? "s" : ""} ago`;
    } else if (timeDiff < 1000 * 60 * 60 * 24) {
      // If the duration is less than one day, calculate the hours difference
      const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
      return `${hoursDiff} hour${hoursDiff !== 1 ? "s" : ""} ago`;
    } else {
      // If the duration is one day or more, calculate the days difference
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      return `${daysDiff} day${daysDiff !== 1 ? "s" : ""} ago`;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {user && location ? (
        <>
          {post && post[0] ? (
            post
              .filter((posturl) => posturl.userId === user._id)
              .map((post) => {
                const imageUrl = getImageUrl(post.imageName);
                const timeDifference = formatTimeDifference(post.createdAt);
                return (
                  <>
                    {imageUrl && timeDifference && (
                      <Post
                        post={post}
                        imageUrl={imageUrl}
                        timeDifference={timeDifference}
                      />
                    )}
                  </>
                );
              })
          ) : (
            <h1 style={{ color: "var(--gray)", alignSelf: "center" }}>
              {loading ? (
                <div className={styles.loginloading}>
                  <ReactLoading
                    type="bubbles"
                    color="#0000FF"
                    height={100}
                    width={50}
                  />
                </div>
              ) : (
                "No Posts"
              )}
            </h1>
          )}
        </>
      ) : (
        <>
          {post && post[0] ? (
            post.map((post) => {
              const imageUrl = getImageUrl(post.imageName);
              const timeDifference = formatTimeDifference(post.createdAt);

              return (
                <>
                  {imageUrl && timeDifference && (
                    <Post
                      post={post}
                      imageUrl={imageUrl}
                      timeDifference={timeDifference}
                    />
                  )}
                </>
              );
            })
          ) : (
            <h1 style={{ color: "var(--gray)", alignSelf: "center" }}>
              {loading ? (
                <div className={styles.loginloading}>
                  <ReactLoading
                    type="bubbles"
                    color="#0000FF"
                    height={100}
                    width={50}
                  />
                </div>
              ) : (
                "No Posts"
              )}
            </h1>
          )}
        </>
      )}
    </div>
  );
};

export default Posts;
