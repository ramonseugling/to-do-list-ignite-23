import styles from "./Header.module.css";

interface HeaderProps {
  createdTasksTotal: number;
  doneTasksTotal: number;
}

function Header({ createdTasksTotal, doneTasksTotal }: HeaderProps) {
  return (
    <header className={styles.header}>
      <span className={styles.createdTasks}>
        Tarefas criadas{" "}
        <span
          className={
            createdTasksTotal === 0 ? styles.zeroTasks : styles.totalTasks
          }
        >
          {createdTasksTotal}
        </span>
      </span>
      <span className={styles.doneTasks}>
        Concluídas{" "}
        <span
          className={
            createdTasksTotal === 0 ? styles.zeroTasks : styles.totalTasks
          }
        >
          {doneTasksTotal} de {createdTasksTotal}
        </span>
      </span>
    </header>
  );
}

export default Header;
