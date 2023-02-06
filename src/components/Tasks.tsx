import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
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
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
        />
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
        {tasks.map((task) => (
          <span>{task}</span>
        ))}
      </form>
    </main>
  );
}

export default Tasks;
