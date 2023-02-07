import { useEffect, useState } from "react";
import styles from "./Header.module.css";
interface ITask {
  content: string;
  isDone: boolean;
}
interface HeaderProps {
  tasks: ITask[];
}

function Header({ tasks }: HeaderProps) {
  const [createdTasksTotal, setCreatedTasksTotal] = useState(0);
  const [doneTasksTotal, setDoneTasksTotal] = useState(0);

  useEffect(() => {
    setCreatedTasksTotal(tasks.length);
  }, [tasks]);

  useEffect(() => {
    setDoneTasksTotal(
      tasks.reduce((acc, task) => acc + (task.isDone === true ? 1 : 0), 0)
    );
  }, [tasks]);

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
