import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import TaskList from "./TaskList/TaskList";
import styles from "./Tasks.module.css";

function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  }

  function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    setTask(e.target.value);
  }

  function onRemoveTask(content: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== content;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleAddNewTask} className={styles.form}>
        <input
          className={styles.addTaskInput}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          value={task}
        />
        <button type="submit" className={styles.addTaskButton}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.tasksContainer}>
        <TaskList tasks={tasks} onRemoveTask={onRemoveTask} />
      </div>
    </main>
  );
}

export default Tasks;
