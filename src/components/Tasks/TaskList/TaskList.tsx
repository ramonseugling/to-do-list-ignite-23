import Empty from "./Empty/Empty";
import Task from "./Task/Task";
import styles from "./TaskList.module.css";

interface TasksListProps {
  tasks: string[];
}

function TaskList({ tasks }: TasksListProps) {
  return (
    <main className={styles.taskListContainer}>
      <header className={styles.header}>
        <span>
          Tarefas criadas <span>0</span>
        </span>
        <span>
          Concluídas <span>0</span>
        </span>
      </header>

      {tasks.length === 0 ? (
        <Empty />
      ) : (
        tasks.map((task) => <Task task={task} />)
      )}
    </main>
  );
}

export default TaskList;
