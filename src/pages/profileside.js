import Searchbar from "@/components/searchbar";
import Profilecard from "@/components/profilecard";
import Findfriend from "@/components/findfriend";
import styles from "../styles/profileside.module.css";

const Profileside = () => {
  return (
    <div className={styles.profileside}>
      <Searchbar />
      <Profilecard />
      <Findfriend />
    </div>
  );
};

export default Profileside;
