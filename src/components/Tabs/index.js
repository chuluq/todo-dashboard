// styles
import styles from "./Tabs.module.css";

const Tabs = ({ title }) => {
  return <button className={styles.tab}>{title}</button>;
};

export default Tabs;
