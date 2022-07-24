import { ReactComponent as ArrowRightIcon } from "assets/ArrowRight.svg";

// styles
import styles from "./ProfileMenu.module.css";

const ProfileMenu = ({ name, icon }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuContent}>
        <div
          className={
            name !== "Log Out"
              ? styles.menuIcon
              : `${styles.menuIcon} ${styles.redIcon}`
          }
        >
          {icon}
        </div>
        <span className={styles.menuName}>{name}</span>
      </div>
      <ArrowRightIcon />
    </div>
  );
};

export default ProfileMenu;
