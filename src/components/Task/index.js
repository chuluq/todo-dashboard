// styles
import { useState } from "react";
import styles from "./Task.module.css";

const Task = () => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <div className={styles.task}>
      <label className={styles.taskName}>
        Sketching logo and coloring
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className={styles.taskCheck}
        />
      </label>
    </div>
  );
};

export default Task;
