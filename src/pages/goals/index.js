// components
import TeamMember from "components/TeamMember";
import Attachment from "components/Attachment";
import Task from "components/Task";

// icons
import { ReactComponent as PlusIcon } from "assets/Plus.svg";
import { ReactComponent as DeadlineDateIcon } from "assets/DeadlineDate.svg";
import { ReactComponent as DeadlineTimeIcon } from "assets/DeadlineTime.svg";

// styles
import styles from "./Goals.module.css";
import { useState } from "react";

const GoalsPage = () => {
  const someMoreText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, repellendus!";

  const [moreText, setMoreText] = useState(false);

  return (
    <div className={styles.projects}>
      <h1 className={styles.projectsTitle}>UI Dashboard Projects</h1>
      <div className={styles.projectDetails}>
        <div className={styles.projectsData}>
          <div className={styles.projectsDataContent}>
            {/* Team */}
            <div className={styles.team}>
              <h2 className={styles.teamTitle}>Team</h2>
              <div className={styles.teamCard}>
                <TeamMember />
                <div className={styles.teamCardBtn}>
                  <PlusIcon />
                </div>
              </div>
            </div>

            {/* Deadline */}
            <div className={styles.deadline}>
              <h2 className={styles.deadlineTitle}>deadline</h2>
              <div className={styles.deadlineCard}>
                <div className={styles.deadlineDate}>
                  <DeadlineDateIcon />
                  <p>Aug 23, 2021</p>
                </div>
                <div className={styles.deadlineTime}>
                  <DeadlineTimeIcon />
                  <p>13.30 - 15.30</p>
                </div>
              </div>
            </div>
          </div>
          {/* Attachment */}
          <div className={styles.attachment}>
            <h2 className={styles.attachmentTitle}>Attachments</h2>
            <div className={styles.attachmentList}>
              <Attachment type="document" />
              <Attachment type="picture" />
              <Attachment type="document" />
            </div>
          </div>
        </div>

        <div className={styles.projectDesc}>
          <h2 className={styles.projectDescTitle}>Description</h2>
          <p className={styles.projectDescContent}>
            Make your own design UI Dashboard for meeting now. Send your files
            not more than 200 mb. I will check it soon. Make your own design UI
            Dashboard for meeting now. Send your files not more than 200 mb. I
            will check it soon. {moreText && someMoreText}{" "}
            <span
              className={styles.readMore}
              onClick={() => setMoreText(!moreText)}
            >
              {!moreText ? "Read more" : "Read less"}
            </span>
          </p>
          <div className={styles.projectTask}>
            <h3 className={styles.projectTaskTitle}>Task</h3>
            <div className={styles.projectTaskList}>
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
      </div>
    </div>
  );
};

export default GoalsPage;
