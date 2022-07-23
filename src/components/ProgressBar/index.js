// styles
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <div className={styles.progress}>
      <div className={styles.progressBar}>
        <span className={styles.percentage}></span>
      </div>
      <div className={styles.text}>
        <p className={styles.name}>In progress</p>
        <span className={styles.number}>90%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
