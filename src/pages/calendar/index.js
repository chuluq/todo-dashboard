// components
import CustomCalendar from "components/CustomCalendar";
import PendingTask from "components/PendingTask";

// styles
import styles from "./Calendar.module.css";

const CalendarPage = () => {
  return (
    <div className={styles.container}>
      {/* Calendar */}
      <div className={styles.calendar}>
        <h1 className={styles.sectionTitle}>Calendar</h1>
        <div className={styles.calendarContent}>
          <CustomCalendar />
        </div>
      </div>

      {/* Upcoming goals */}
      <div className={styles.upcomingGoals}>
        <h1 className={styles.sectionTitle}>Upcoming goals</h1>
        <span className={styles.sectionSubtitle}>5 task for you</span>
        <div className={styles.pendingTask}>
          <PendingTask />
          <PendingTask />
          <PendingTask />
          <PendingTask />
          <PendingTask />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
