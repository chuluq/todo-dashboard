// components
import GoalItem from "components/GoalItem";
import Tabs from "components/Tabs";
import Task from "components/Task";
import { useState } from "react";

// styles
import styles from "./Home.module.css";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("inProgress");

  return (
    <div className={styles.container}>
      {/* my goals */}
      <div className={styles.goals}>
        <h1 className={styles.sectionTitle}>My goals</h1>
        <div className={styles.goalTabs}>
          <Tabs
            title="In progress"
            handleClick={() => setActiveTab("inProgress")}
            name="inProgress"
            activeTab={activeTab}
          />
          <Tabs
            title="To do"
            handleClick={() => setActiveTab("todo")}
            name="todo"
            activeTab={activeTab}
          />
          <Tabs
            title="Done"
            handleClick={() => setActiveTab("done")}
            name="done"
            activeTab={activeTab}
          />
          <Tabs
            title="Upcoming"
            handleClick={() => setActiveTab("pending")}
            name="pending"
            activeTab={activeTab}
          />
          <Tabs
            title="see all"
            handleClick={() => setActiveTab("seeAll")}
            name="seeAll"
            activeTab={activeTab}
          />
        </div>
        {/* In progress */}
        <div
          className={
            activeTab === "inProgress"
              ? `${styles.goalList} ${styles.showGoal}`
              : styles.goalList
          }
        >
          <GoalItem />
        </div>
        {/* Todo */}
        <div
          className={
            activeTab === "todo"
              ? `${styles.goalList} ${styles.showGoal}`
              : styles.goalList
          }
        >
          <GoalItem />
          <GoalItem />
        </div>
        {/* Done */}
        <div
          className={
            activeTab === "done"
              ? `${styles.goalList} ${styles.showGoal}`
              : styles.goalList
          }
        >
          <GoalItem />
          <GoalItem />
          <GoalItem />
        </div>
        {/* Pending */}
        <div
          className={
            activeTab === "pending"
              ? `${styles.goalList} ${styles.showGoal}`
              : styles.goalList
          }
        >
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
        </div>
        {/* See all */}
        <div
          className={
            activeTab === "seeAll"
              ? `${styles.goalList} ${styles.showGoal}`
              : styles.goalList
          }
        >
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
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
