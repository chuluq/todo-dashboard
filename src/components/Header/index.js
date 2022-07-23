// icons
import { ReactComponent as BellIcon } from "assets/Bell.svg";
import { ReactComponent as SearchIcon } from "assets/Search.svg";

// image
import avatar from "assets/avatar-1.png";

// styles
import styles from "./Header.module.css";

const Header = () => {
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
          <div className={styles.headerProfile}>
            <img src={avatar} alt="profile" />
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
