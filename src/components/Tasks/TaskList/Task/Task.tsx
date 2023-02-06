import styles from "./Task.module.css";

interface TaskProps {
  task: string;
}

function Task({ task }: TaskProps) {
  return (
    <main className={styles.taskContainer}>
      <input type="checkbox" id="scales" name="scales" />
      <span>{task}</span>
    </main>
  );
}

export default Task;
