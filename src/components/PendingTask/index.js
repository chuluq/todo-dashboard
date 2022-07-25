// components
import TeamMember from "components/TeamMember";

// icons
import { ReactComponent as PeriodIcon } from "assets/Period.svg";
import { ReactComponent as DotMenuIcon } from "assets/DotMenu.svg";
// import { ReactComponent as PeriodActiveIcon } from "assets/PeriodActive.svg";

// styles
import styles from "./PendingTask.module.css";

const PendingTask = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        <PeriodIcon />
        <DotMenuIcon />
      </div>
      <h3 className={styles.cardName}>Landing page design</h3>
      <div className={styles.cardMember}>
        <TeamMember />
      </div>
    </div>
  );
};

export default PendingTask;
