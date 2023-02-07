import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  onRemoveTask: (content: string) => void;
  onChangeTaskIsDone: (content: string, isDone: boolean) => void;
}

function Task({ content, onRemoveTask, onChangeTaskIsDone }: TaskProps) {
  const [isDone, setIsDone] = useState<boolean>(false);

  const handleRemoveTask = () => onRemoveTask(content);

  const handleOnChangeTaskIsDone = () => {
    setIsDone(() => {
      return !isDone;
    });

    onChangeTaskIsDone(content, isDone);
  };

  return (
    <main className={styles.taskContainer}>
      <button
        type="button"
        onClick={handleOnChangeTaskIsDone}
        className={styles.isDoneButton}
      >
        {isDone ? (
          <CheckCircle
            size={18}
            className={styles.isDoneCheckedButton}
            weight="fill"
          />
        ) : (
          <Circle size={18} className={styles.isDoneNotCheckedButton} />
        )}
      </button>
      <span
        className={
          isDone ? styles.taskIsDoneContent : styles.taskIsNotDoneContent
        }
      >
        {content}
      </span>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={handleRemoveTask}
      >
        <Trash size={18} />
      </button>
    </main>
  );
}

export default Task;
