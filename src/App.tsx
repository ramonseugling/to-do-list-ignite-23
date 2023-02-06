import Header from "./components/Header";
import "./global.css";
import Tasks from "./components/Tasks/Tasks";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.main}>
        <Header />
        <Tasks />
      </div>
    </>
  );
}

export default App;
