// components
import GoalItem from "components/GoalItem";
import Tabs from "components/Tabs";
import Task from "components/Task";

// styles
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* my goals */}
      <div className={styles.goals}>
        <h1 className={styles.sectionTitle}>My goals</h1>
        <div className={styles.goalTabs}>
          <Tabs title="In progress" />
          <Tabs title="To do" />
          <Tabs title="Done" />
          <Tabs title="Upcoming" />
          <Tabs title="see all" />
        </div>
        <div className={styles.goalList}>
          <GoalItem />
        </div>
      </div>

      {/* my daily task */}
      <div className={styles.task}>
        <h1 className={styles.sectionTitle}>My daily task</h1>
        <div className={styles.taskList}>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
