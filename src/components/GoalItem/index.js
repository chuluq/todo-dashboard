// components
import TeamMember from "components/TeamMember";

// icons
import { ReactComponent as DeadlineDateWhiteIcon } from "assets/DeadlineDateWhite.svg";
import { ReactComponent as ClockIcon } from "assets/Clock.svg";

// styles
import styles from "./GoalItem.module.css";
import ProgressBar from "components/ProgressBar";

const GoalItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>UI Dashboard Projects</h3>
        <div className={styles.headerMenu}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <div className={styles.team}>
            <TeamMember />
          </div>
          <div className={styles.datetime}>
            <div className={styles.date}>
              <DeadlineDateWhiteIcon />
              <p>Aug 23, 2021</p>
            </div>
            <div className={styles.time}>
              <ClockIcon />
              <p>13.30</p>
            </div>
          </div>
        </div>
        <div className={styles.progress}>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default GoalItem;
