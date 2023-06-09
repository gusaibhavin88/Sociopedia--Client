import React from "react";
import styles from "../styles/trendcard.module.css";
import { TrendData } from "./trenddata";

const Trendcard = () => {
  return (
    <>
      <div className={styles.trendcard}>
        <h3 style={{ fontSize: "1.5rem" }}>Trends for you</h3>
        {TrendData.map((data, id) => {
          return (
            <div className={styles.trenditems} key={id}>
              <span>#{data.name}</span>
              <span>{data.shares}k shares</span>
            </div>
          );
        })}
      </div>
      <button
        className={styles.rightshare}
        style={{
          background: "var(--buttonBg)",
          outline: "none",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
        }}
      >
        Share
      </button>
    </>
  );
};

export default Trendcard;
