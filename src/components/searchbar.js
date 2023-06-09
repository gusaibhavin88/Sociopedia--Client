import React from "react";
import styles from "../styles/searchbar.module.css";
import Image from "next/image";
import { logo } from "../../public/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/router";

const Searchbar = () => {
  const router = useRouter();

  return (
    <div className={styles.searchbar}>
      <Image
        src={logo}
        alt="img not found"
        onClick={() => router.replace("/home")}
        style={{ cursor: "pointer" }}
      ></Image>
      <div className={styles.searchinput}>
        <input type="text" placeholder="#Explore" />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          color="white"
          size="2x"
          className={styles.searchicon}
        />
      </div>
    </div>
  );
};

export default Searchbar;
