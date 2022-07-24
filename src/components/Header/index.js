import { useState } from "react";

// components
import ProfileMenu from "components/ProfileMenu";

// icons
import { ReactComponent as BellIcon } from "assets/Bell.svg";
import { ReactComponent as SearchIcon } from "assets/Search.svg";
import { ReactComponent as TaskIcon } from "assets/Task.svg";
import { ReactComponent as TeamIcon } from "assets/Team.svg";
import { ReactComponent as UserIcon } from "assets/User.svg";
import { ReactComponent as PrivacyIcon } from "assets/Privacy.svg";
import { ReactComponent as SettingsIcon } from "assets/Settings.svg";
import { ReactComponent as ExitIcon } from "assets/Exit.svg";

// image
import avatar from "assets/avatar-1.png";

// styles
import styles from "./Header.module.css";

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleClickProfile = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerData}>
          <h1 className={styles.headerGreetings}>Hi, Apriliani</h1>
          <span className={styles.headerSubGreetings}>UI Designer</span>
        </div>

        <div className={styles.headerMenu}>
          <div className={styles.headerNotification}>
            <BellIcon />
          </div>
          <div className={styles.headerProfile} onClick={handleClickProfile}>
            <img src={avatar} alt="profile" />
          </div>
          {/* Profile menu */}
          <div
            className={
              !showProfileMenu
                ? styles.headerProfileMenu
                : `${styles.headerProfileMenu} ${styles.showProfileMenu}`
            }
          >
            {/* profile header */}
            <div className={styles.profileHeader}>
              <div className={styles.projectHeaderContent}>
                <p>Total project</p>
                <div className={styles.projectCard}>
                  <div className={styles.projectCardIcon}>
                    <TaskIcon />
                  </div>
                  <div className={styles.projectCardText}>
                    <p>My Project</p>
                    <span>42+</span>
                  </div>
                </div>
              </div>
              <div className={styles.projectHeaderContent}>
                <p>Total team</p>
                <div className={styles.projectCard}>
                  <div className={`${styles.projectCardIcon} ${styles.team}`}>
                    <TeamIcon />
                  </div>
                  <div className={styles.projectCardText}>
                    <p>My Team</p>
                    <span>10+</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className={styles.profileLine} />
            <div className={styles.profileMenuList}>
              <ProfileMenu name="Settings" icon={<SettingsIcon />} />
              <ProfileMenu name="User Management" icon={<UserIcon />} />
              <ProfileMenu name="Privacy" icon={<PrivacyIcon />} />
              <ProfileMenu name="Log Out" icon={<ExitIcon />} />
            </div>
          </div>
        </div>
      </div>

      <form className={styles.headerSearch}>
        <input
          type="text"
          placeholder="Search here..."
          className={styles.headerSearchInput}
        />
        <div className={styles.headerSearchIcon}>
          <SearchIcon />
        </div>
      </form>
    </header>
  );
};

export default Header;
