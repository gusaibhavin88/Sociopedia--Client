import styles from "../styles/rightsidebtns.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGear,
  faBell,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Rightbtns = () => {
  const router = useRouter();
  return (
    <div className={styles.rightbtns} onClick={() => router.replace("/home")}>
      <FontAwesomeIcon
        icon={faHouse}
        width={25}
        style={{ color: "var(--location)", fontSize: "2em", cursor: "pointer" }}
      />
      <FontAwesomeIcon
        icon={faGear}
        width={25}
        style={{ color: "var(--location)", fontSize: "2em" }}
      />
      <FontAwesomeIcon
        icon={faBell}
        width={25}
        style={{ color: "var(--location)", fontSize: "2em" }}
      />
      <FontAwesomeIcon
        icon={faMessage}
        width={25}
        style={{ color: "var(--location)", fontSize: "2em" }}
      />
    </div>
  );
};

export default Rightbtns;
