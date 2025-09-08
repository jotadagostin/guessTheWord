import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";

function App() {
  function handleRestartGame() {
    alert("Restart the game");
  }
  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip
          tip="Dynamic programming language
"
        />
      </main>
    </div>
  );
}

export default App;
