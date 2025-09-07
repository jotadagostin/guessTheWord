import styles from "./app.module.css";
import { Header } from "./components/Header";

function App() {
  function handleRestartGame() {
    alert("Restart the game");
  }
  return (
    <div className={styles.container}>
      <main>
        <Header current={2} max={10} onRestart={handleRestartGame} />
      </main>
    </div>
  );
}

export default App;
