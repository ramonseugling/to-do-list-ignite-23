import { Notepad } from "phosphor-react";
import styles from "./Empty.module.css";

function Empty() {
  return (
    <>
      <div className={styles.taskList}>
        <Notepad size={56} />
        <div className={styles.emptyTasksText}>
          <span>
            <strong>Você ainda não tem tarefas cadastradas</strong>
          </span>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
    </>
  );
}

export default Empty;
