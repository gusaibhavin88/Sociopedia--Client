import Trendcard from "@/components/trendcard";
import styles from "../styles/rightside.module.css";
import Rightbtns from "@/components/rightbtns";

const Rightside = () => {
  return (
    <div className={styles.rightside}>
      <Rightbtns />
      <Trendcard />
    </div>
  );
};

export default Rightside;
