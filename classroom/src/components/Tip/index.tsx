import styles from "./styles.module.css";
import tipIcon from "../../assets/tip.svg";

type Props = {
  tip: string;
};

export function Tip({ tip }: Props) {
  return (
    <div className={styles.tip}>
      <img src={tipIcon} alt="tip icon colorful" />

      <div>
        <h3>Tips</h3>
        <p>{tip}</p>
      </div>
    </div>
  );
}
