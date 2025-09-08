import styles from "./app.module.css";
import { useEffect, useState } from "react";
import { WORDS } from "./utils/words";
import type { Challenge } from "./utils/words";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed, type LettersUsedProps } from "./components/LettersUsed";

export default function App() {
  const [attempts, setAttempts] = useState(0);
  const [letter, setLetter] = useState("");
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  function handleRestartGame() {
    alert("Restart the game");
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);
    setAttempts(0);
    setLetter("");
  }

  function handleConfirm() {
    if (!challenge) {
      return;
    }

    if (!letter.trim()) {
      return alert("Type a letter!");
    }

    const value = letter.toUpperCase();
    alert(value);
  }

  useEffect(() => {
    startGame(), [];
  });

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />
        <Tip
          tip="Dynamic programming language
"
        />
        <div className={styles.word}>
          {challenge.word.split("").map(() => (
            <Letter value="" />
          ))}
        </div>

        <h4>Guess</h4>
        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirme" onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}
