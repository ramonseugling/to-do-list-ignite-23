import Header from "./Header/Header";
import Empty from "./Empty/Empty";
import Task from "./Task/Task";
import styles from "./TaskList.module.css";

interface ITask {
  content: string;
  isDone: boolean;
}
interface TasksListProps {
  tasks: ITask[];
  onRemoveTask: (content: string) => void;
  onChangeTaskIsDone: (content: string, isDone: boolean) => void;
}

function TaskList({ tasks, onRemoveTask, onChangeTaskIsDone }: TasksListProps) {
  return (
    <main className={styles.taskListContainer}>
      <Header tasks={tasks} />
      {tasks.length === 0 ? (
        <Empty />
      ) : (
        tasks.map((task) => (
          <Task
            key={task.content}
            content={task.content}
            onRemoveTask={onRemoveTask}
            onChangeTaskIsDone={onChangeTaskIsDone}
          />
        ))
      )}
    </main>
  );
}

export default TaskList;
