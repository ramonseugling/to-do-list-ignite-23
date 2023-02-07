import Header from "./Header/Header";
import Empty from "./Empty/Empty";
import Task from "./Task/Task";
import styles from "./TaskList.module.css";

interface TasksListProps {
  tasks: string[];
  onRemoveTask: (content: string) => void;
}

function TaskList({ tasks, onRemoveTask }: TasksListProps) {
  return (
    <main className={styles.taskListContainer}>
      <Header createdTasksTotal={3} doneTasksTotal={2} />
      {tasks.length === 0 ? (
        <Empty />
      ) : (
        tasks.map((task) => <Task content={task} onRemoveTask={onRemoveTask} />)
      )}
    </main>
  );
}

export default TaskList;
