// images

import avatar2 from "../../assets/avatar-2.png";
import avatar3 from "../../assets/avatar-3.png";
import avatar4 from "../../assets/avatar-4.png";

// styles
import styles from "./TeamMember.module.css";

const TeamMember = () => {
  return (
    <div className={styles.teams}>
      <div className={styles.teamMember}>
        <img src={avatar2} alt="teams" className={styles.teamMemberImg} />
      </div>
      <div className={styles.teamMember}>
        <img src={avatar4} alt="teams" className={styles.teamMemberImg} />
      </div>
      <div className={styles.teamMember}>
        <img src={avatar3} alt="teams" className={styles.teamMemberImg} />
      </div>
    </div>
  );
};

export default TeamMember;
