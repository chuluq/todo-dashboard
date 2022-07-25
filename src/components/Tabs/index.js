// styles
import styles from "./Tabs.module.css";

const Tabs = ({ title, handleClick, name, activeTab }) => {
  return (
    <button
      name={name}
      className={
        name === activeTab ? `${styles.tab} ${styles.activeTab}` : styles.tab
      }
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Tabs;
