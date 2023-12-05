import styles from "./RippleSpinner.module.css";
export default function RippleSpinner() {
  return (
    <div className={styles["spinner-container"]}>
      <div className={styles["lds-ripple"]}>
        <p className={styles["loading-text"]}>Loading please wait...</p>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
