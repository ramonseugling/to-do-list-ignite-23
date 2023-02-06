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
  }

  function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    setTask(e.target.value);
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleAddNewTask} className={styles.form}>
        <input
          className={styles.addTaskInput}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
        />
        <button type="submit" className={styles.addTaskButton}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.tasksContainer}>
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}

export default Tasks;
