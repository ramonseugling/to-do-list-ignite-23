import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  onRemoveTask: (content: string) => void;
}

function Task({ content, onRemoveTask }: TaskProps) {
  function handleRemoveTask() {
    onRemoveTask(content);
  }

  return (
    <main className={styles.taskContainer}>
      <input type="checkbox" id="scales" name="scales" />
      <span>{content}</span>
      <button type="button" onClick={handleRemoveTask}>
        <Trash size={18} />
      </button>
    </main>
  );
}

export default Task;
