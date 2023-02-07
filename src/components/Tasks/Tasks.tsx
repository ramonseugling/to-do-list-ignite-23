import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import TaskList from "./TaskList/TaskList";
import styles from "./Tasks.module.css";

interface ITask {
  content: string;
  isDone: boolean;
}

function Tasks() {
  const [newTask, setNewTask] = useState<ITask>({ content: "", isDone: false });
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask({ ...newTask, content: "" });
  }

  function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");

    setNewTask({ ...newTask, content: e.target.value });
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function onRemoveTask(content: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.content !== content;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  const onChangeTaskIsDone = (content: string, isDone: boolean) => {
    const tasksWithoutChangedOne = tasks.filter(
      (task) => task.content !== content
    );

    const changedTask = { content: content, isDone: !isDone };
    setTasks([...tasksWithoutChangedOne, changedTask]);
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleAddNewTask} className={styles.form}>
        <input
          className={styles.addTaskInput}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          value={newTask.content}
          onInvalid={handleNewTaskInvalid}
        />
        <button type="submit" className={styles.addTaskButton}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.tasksContainer}>
        <TaskList
          tasks={tasks}
          onRemoveTask={onRemoveTask}
          onChangeTaskIsDone={onChangeTaskIsDone}
        />
      </div>
    </main>
  );
}

export default Tasks;
