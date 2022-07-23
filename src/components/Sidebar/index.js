import { Link } from "react-router-dom";
import { links } from "constants/links";

// icons
import { ReactComponent as PlusIcon } from "../../assets/Plus.svg";

// styles
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarLinks}>
        {links.map((link) => {
          return (
            <Link key={link.id} to={link.url} className={styles.sidebarLink}>
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* create goal button */}
      <div className={styles.sidebarCta}>
        <div className={styles.sidebarBtn}>
          <PlusIcon />
        </div>
        <span className={styles.sidebarBtnText}>New goals</span>
      </div>
    </nav>
  );
};

export default Sidebar;
